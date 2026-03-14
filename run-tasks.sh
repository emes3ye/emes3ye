#!/bin/bash
# ===========================================
# Agentic Task Runner for emes3ye.com
# Run this, go to bed, wake up to a built site
# ===========================================

set -e

PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$PROJECT_DIR/.tasks/logs"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
LOG_FILE="$LOG_DIR/run_$TIMESTAMP.log"
MAX_ITERATIONS=20  # Safety limit

mkdir -p "$LOG_DIR"

echo "=========================================="  | tee "$LOG_FILE"
echo "🚀 Agentic build started"                   | tee -a "$LOG_FILE"
echo "📅 $(date)"                                  | tee -a "$LOG_FILE"
echo "📂 Project: $PROJECT_DIR"                    | tee -a "$LOG_FILE"
echo "=========================================="  | tee -a "$LOG_FILE"

for i in $(seq 1 $MAX_ITERATIONS); do
    echo ""                                        | tee -a "$LOG_FILE"
    echo "------------------------------------------" | tee -a "$LOG_FILE"

    # Count tasks
    ACTIVE_COUNT=$(ls -1 "$PROJECT_DIR/.tasks/active/"*.md 2>/dev/null | wc -l || echo "0")
    DONE_COUNT=$(ls -1 "$PROJECT_DIR/.tasks/done/"*.md 2>/dev/null | wc -l || echo "0")
    BACKLOG_COUNT=$(ls -1 "$PROJECT_DIR/.tasks/backlog/"*.md 2>/dev/null | wc -l || echo "0")

    if [ "$ACTIVE_COUNT" -eq 0 ]; then
        echo "✅ No more active tasks!"            | tee -a "$LOG_FILE"
        echo "📊 Done: $DONE_COUNT | Backlog: $BACKLOG_COUNT" | tee -a "$LOG_FILE"
        break
    fi

    echo "📋 Iteration $i | Active: $ACTIVE_COUNT | Done: $DONE_COUNT | Backlog: $BACKLOG_COUNT" | tee -a "$LOG_FILE"
    echo "🔨 Starting at $(date +%H:%M:%S)"       | tee -a "$LOG_FILE"

    cd "$PROJECT_DIR"
    claude -p "Read .claude/commands/build-next-task.md and follow those instructions exactly. Complete the next pending task in .tasks/active/." \
        --allowedTools "Read" "Write" "Edit" \
            "Bash(npm *)" "Bash(npx *)" "Bash(git *)" \
            "Bash(curl *)" "Bash(mkdir *)" "Bash(cp *)" \
            "Bash(mv *)" "Bash(kill *)" "Bash(cat *)" \
            "Bash(ls *)" "Bash(sleep *)" "Bash(rm *)" \
        --max-turns 50 \
        --output-format text \
        2>&1 | tee -a "$LOG_FILE"

    EXIT_CODE=$?

    if [ $EXIT_CODE -ne 0 ]; then
        echo "⚠️  Claude exited with code $EXIT_CODE" | tee -a "$LOG_FILE"
    fi

    echo "⏱️  Finished at $(date +%H:%M:%S)"       | tee -a "$LOG_FILE"
    echo "😴 Pausing 15s..."                        | tee -a "$LOG_FILE"
    sleep 15
done

# Final build
echo ""                                            | tee -a "$LOG_FILE"
echo "=========================================="  | tee -a "$LOG_FILE"
echo "🔍 Final build verification..."              | tee -a "$LOG_FILE"
cd "$PROJECT_DIR"

if npm run build 2>&1 | tee -a "$LOG_FILE"; then
    echo "✅ Final build: PASSED"                  | tee -a "$LOG_FILE"
    echo ""                                        | tee -a "$LOG_FILE"
    echo "🚀 Pushing to origin..."                 | tee -a "$LOG_FILE"
    if git push origin main 2>&1 | tee -a "$LOG_FILE"; then
        echo "✅ Push: SUCCESS — Vercel deploy triggered" | tee -a "$LOG_FILE"
    else
        echo "❌ Push: FAILED — check git remote and auth" | tee -a "$LOG_FILE"
    fi
else
    echo "❌ Final build: FAILED — skipping push"  | tee -a "$LOG_FILE"
fi

# Summary
echo ""                                            | tee -a "$LOG_FILE"
echo "=========================================="  | tee -a "$LOG_FILE"
echo "🏁 BUILD RUN COMPLETE"                       | tee -a "$LOG_FILE"
echo "📅 $(date)"                                  | tee -a "$LOG_FILE"
echo "📁 Done:    $(ls -1 .tasks/done/*.md 2>/dev/null | wc -l)"    | tee -a "$LOG_FILE"
echo "📁 Active:  $(ls -1 .tasks/active/*.md 2>/dev/null | wc -l)"  | tee -a "$LOG_FILE"
echo "📁 Backlog: $(ls -1 .tasks/backlog/*.md 2>/dev/null | wc -l)" | tee -a "$LOG_FILE"
echo "📊 Log:     $LOG_FILE"                       | tee -a "$LOG_FILE"
echo "=========================================="  | tee -a "$LOG_FILE"
