import { redirect } from "next/navigation";
import { getNoteCategories } from "@/lib/notes";

export default function NotesPage() {
  const categories = getNoteCategories();
  const firstNote = categories[0]?.notes[0];

  if (firstNote) {
    redirect(`/notes/${firstNote.slug}`);
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-muted">No notes yet.</p>
    </div>
  );
}
