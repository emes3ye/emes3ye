"use client";

import { useState } from "react";
import Link from "next/link";
import type { NoteCategory } from "@/lib/notes";

type Props = {
  categories: NoteCategory[];
  activeSlug: string;
  onLinkClick?: () => void;
};

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function NotesSidebar({
  categories,
  activeSlug,
  onLinkClick,
}: Props) {
  const initialOpen = Object.fromEntries(
    categories.map((c) => [c.slug, true])
  );
  const [openCategories, setOpenCategories] =
    useState<Record<string, boolean>>(initialOpen);

  const toggleCategory = (slug: string) => {
    setOpenCategories((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  return (
    <nav className="py-6" aria-label="Notes navigation">
      <div className="px-4 mb-5">
        <Link
          href="/notes"
          className="font-heading font-bold text-[11px] uppercase tracking-widest text-muted hover:text-foreground transition-colors"
        >
          Notes
        </Link>
      </div>

      <ul className="space-y-0.5">
        {categories.map((category) => {
          const isOpen = openCategories[category.slug] ?? true;
          return (
            <li key={category.slug}>
              <button
                onClick={() => toggleCategory(category.slug)}
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-heading font-semibold text-foreground hover:bg-foreground/5 transition-colors rounded-sm"
                aria-expanded={isOpen}
              >
                <span>{category.name}</span>
                <ChevronIcon
                  className={`transition-transform duration-200 text-muted ${
                    isOpen ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </button>

              {isOpen && (
                <ul className="mt-0.5 mb-1">
                  {category.notes.map((note) => {
                    const isActive = note.slug === activeSlug;
                    return (
                      <li key={note.slug}>
                        <Link
                          href={`/notes/${note.slug}`}
                          onClick={onLinkClick}
                          className={`block px-4 py-1.5 ml-2 text-sm rounded-sm transition-colors duration-150 ${
                            isActive
                              ? "bg-accent/10 text-accent font-medium"
                              : "text-muted hover:text-foreground hover:bg-foreground/5"
                          }`}
                        >
                          {note.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
