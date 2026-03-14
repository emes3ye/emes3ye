How I Built My Personal Website While I Slept — An Introduction to Agentic Development
By Shafiul Islam

Bismillah.
I'm a software engineer at Amazon with 8+ years of experience. I also run Carrot Soft, a bootstrap software company. I invest in halal restaurants and rent-to-rent properties. I needed a personal brand website — emes3ye.com — but I didn't want to spend weeks building it.
So I taught an AI to build it for me. Autonomously. While I slept.
This isn't clickbait. This is a practical guide to agentic development — a new way of building software where you define what you want, set up the right structure, and let AI agents execute the work without you sitting there prompting every step.
By the end of this post, you'll understand the concepts and have a reusable system you can apply to your own projects.

What Is Agentic Development?
Traditional AI-assisted coding looks like this:

You type a prompt
AI writes some code
You review it
You type another prompt
Repeat 200 times

Agentic development flips this. You set up:

Context — a file that tells the AI everything about your project
Tasks — a structured list of what needs to be built, with clear acceptance criteria
Automation — a script that feeds tasks to the AI one at a time, autonomously

Then you step away. The AI reads the context, picks up the first task, implements it, verifies it works, commits the code, and moves to the next task. If a build fails, it fixes the error and tries again.
The tool I used is Claude Code — Anthropic's command-line coding agent. It's not a chatbot. It reads your codebase, writes files, runs terminal commands, and manages git — all from natural language instructions.

The Three Pillars
1. CLAUDE.md — Give the AI a Brain
Every Claude Code session starts by reading a file called CLAUDE.md in your project root. Think of it as onboarding documentation — but for AI.
Mine includes:

Project overview: what the site is, who it's for, what stack it uses
Design system: exact colors, fonts, spacing rules
Architecture: folder structure and file conventions
Workflow rules: "build after each task, commit with descriptive messages, verify acceptance criteria"

Without this file, every session starts from scratch. With it, Claude has persistent understanding of your project across sessions.
Why this matters for you: If you've ever been frustrated that AI "forgets" your project context, CLAUDE.md is the solution. Write it once, and every session inherits the knowledge.
2. tasks.md — Break Work Into Atomic Tickets
Instead of one huge prompt ("build me a website"), I created a tasks.md file with 10 discrete tasks. Each task has:

A clear description of what to build
Acceptance criteria — specific, verifiable checkboxes

This is the same principle as writing good Jira tickets. Vague requests produce vague results. Specific, bounded tasks produce reliable output.
The key insight: task-based architecture is more reliable than monolithic prompts. If task 4 fails, tasks 1-3 are already committed and safe. You can retry task 4 without losing progress.
3. Headless Mode — Let It Run Unattended
Claude Code has a -p flag that runs it non-interactively:
bashclaude -p "Complete the next pending task in tasks.md"
It processes the prompt, does the work, and exits. No interactive prompts. No "press Y to confirm." Combined with --allowedTools to pre-approve what commands it can run, you get a fully autonomous agent.
I wrapped this in a simple bash script that loops through all pending tasks:
bashfor i in $(seq 1 10); do
    claude -p "Complete the next pending task" \
        --allowedTools "Read" "Write" "Edit" "Bash(npm *)" "Bash(git *)"
    sleep 10
done
That's it. That's the "go to bed" script.

What I Actually Built
The result is a clean, minimal personal brand site with:

Home page — hero section with my mission, about preview, venture cards, blog preview
About page — my story, values, personal interests
Ventures page — Carrot Soft, digital marketing agency, restaurant investments, rent-to-rent
Blog — MDX-powered, you're reading the first post right now
Contact — form with lead capture

Total tasks: 10. From scaffold to SEO polish.
The design follows Apple-inspired minimalism: lots of whitespace, confident typography, subtle scroll animations. The color palette — deep green and warm copper — reflects both my Islamic values and a grounded, earthy aesthetic.

The Concepts You Need to Learn
If you want to replicate this, here are the building blocks:
CLAUDE.md — Your project's persistent memory. Claude reads it at the start of every session. Include your stack, architecture, design system, and workflow rules.
Custom Commands — Reusable prompt templates stored as markdown files in .claude/commands/. Type /build-next-task instead of writing a long prompt every time.
Subagents — Specialized AI workers with their own context and tool access. I use a quality-reviewer subagent that only reads code and checks for issues, and an e2e-verifier that runs builds and checks every route.
Headless Mode (-p) — Run Claude Code non-interactively from scripts, CI/CD pipelines, or cron jobs. This is what makes "fire and forget" possible.
--allowedTools — Pre-approve which tools Claude can use, so it doesn't stop to ask permission. Bash(npm *) allows any npm command. Bash(git *) allows any git command.

How You Can Recreate This
Step 1: Install Claude Code
You need a Claude Pro or Max subscription, or API access.
bashnpm install -g @anthropic-ai/claude-code
Step 2: Clone My Template
I've open-sourced the complete task runner system:

CLAUDE.md template
tasks.md with 10 structured tasks
Custom commands
Subagent definitions
The bash task runner script

(link to your GitHub repo)
Step 3: Customise
Replace my details with yours. Change the design system colors. Swap in your business names. Adjust the tasks for your site.
Step 4: Run It
If you're learning: Run interactively with claude and use /build-next-task one at a time. Watch how it works.
If you're confident: Run the full task runner script and check the logs in the morning.

Lessons Learned
Be specific in your acceptance criteria. "Make it look good" is useless. "Hero section fills viewport, both CTAs render and link correctly, responsive at 375px" gives the AI something verifiable to aim for.
Task isolation matters. One task = one concern. Don't mix "set up the blog system" with "style the contact page." If one fails, the other is unaffected.
CLAUDE.md is your highest-leverage investment. Spend 30 minutes writing a thorough CLAUDE.md and you'll save hours of repeated context-setting across sessions.
Start interactive, go autonomous. Don't jump straight to the sleep mode. Run a few tasks interactively first. Understand what Claude does, how it interprets your instructions, where it makes mistakes. Then automate.
Git saves you. Because each task commits separately, you can always roll back to the last working state. This is your safety net.

The Bigger Picture
My purpose is to help people create halal employment and solve financial barriers so they can focus on their purpose in life and grow closer to Allah.
Agentic development is one piece of that puzzle. If a solo founder can build a professional website overnight, what else becomes possible? What if every entrepreneur in our community could ship faster, test ideas cheaper, and spend more time on their mission?
This isn't about replacing developers. I am a developer. It's about multiplying what one person can do. It's about removing the friction between having an idea and making it real.
And it starts with learning how to work with AI agents, not just chatting with them.

What's Next
This blog post is the first in a series about agentic development. Coming up:

Setting up halal investment tracking tools with Claude Code
How I use AI agents to manage multiple businesses
Building a SaaS product from idea to MVP in a weekend

If you want to follow along, subscribe below or connect with me on LinkedIn.
If you have questions or want to collaborate, hit the contact page. I'm always open.
Jazakallah khair for reading. May Allah bless your efforts.

Built with intention. Deployed with purpose. Alhamdulillah.
ShareProject contentemes3yeCreated by youAdd PDFs, documents, or other text to reference in this project.