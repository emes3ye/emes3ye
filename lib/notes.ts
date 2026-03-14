import fs from "fs";
import path from "path";
import matter from "gray-matter";

const NOTES_DIR = path.join(process.cwd(), "content/notes");

export type NoteStub = {
  slug: string; // "category/filename"
  categorySlug: string;
  categoryName: string;
  title: string;
  description: string;
  updatedAt: string;
};

export type Note = NoteStub & {
  content: string;
};

export type NoteCategory = {
  name: string;
  slug: string;
  notes: NoteStub[];
};

function toTitleCase(str: string): string {
  return str
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function getNoteCategories(): NoteCategory[] {
  if (!fs.existsSync(NOTES_DIR)) return [];

  const entries = fs.readdirSync(NOTES_DIR, { withFileTypes: true });
  const categoryDirs = entries.filter((e) => e.isDirectory());

  return categoryDirs
    .map((dir) => {
      const categorySlug = dir.name;
      const categoryDir = path.join(NOTES_DIR, categorySlug);
      const files = fs
        .readdirSync(categoryDir)
        .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

      const notes: NoteStub[] = files
        .map((filename) => {
          const raw = fs.readFileSync(path.join(categoryDir, filename), "utf-8");
          const { data } = matter(raw);
          const noteSlug = filename.replace(/\.(mdx|md)$/, "");
          return {
            slug: `${categorySlug}/${noteSlug}`,
            categorySlug,
            categoryName: data.category || toTitleCase(categorySlug),
            title: data.title || toTitleCase(noteSlug),
            description: data.description || "",
            updatedAt: data.updatedAt || "",
          };
        })
        .sort((a, b) => a.title.localeCompare(b.title));

      return {
        name: notes[0]?.categoryName || toTitleCase(categorySlug),
        slug: categorySlug,
        notes,
      };
    })
    .filter((c) => c.notes.length > 0)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getAllNotes(): NoteStub[] {
  return getNoteCategories().flatMap((c) => c.notes);
}

export function getNoteBySlug(
  categorySlug: string,
  noteSlug: string
): Note | null {
  const mdxPath = path.join(NOTES_DIR, categorySlug, `${noteSlug}.mdx`);
  const mdPath = path.join(NOTES_DIR, categorySlug, `${noteSlug}.md`);
  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
    ? mdPath
    : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug: `${categorySlug}/${noteSlug}`,
    categorySlug,
    categoryName: data.category || toTitleCase(categorySlug),
    title: data.title || toTitleCase(noteSlug),
    description: data.description || "",
    updatedAt: data.updatedAt || "",
    content,
  };
}
