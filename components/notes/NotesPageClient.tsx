"use client";

import { useState } from "react";
import NotesSidebar from "./NotesSidebar";
import type { NoteCategory } from "@/lib/notes";

type Props = {
  categories: NoteCategory[];
  activeSlug: string;
  noteTitle: string;
  children: React.ReactNode;
};

function HamburgerIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="15" y2="18" />
    </svg>
  );
}

export default function NotesPageClient({
  categories,
  activeSlug,
  noteTitle,
  children,
}: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="flex max-w-[1280px] mx-auto relative">
      {/* Mobile backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Sidebar — fixed drawer on mobile, sticky panel on desktop */}
      <aside
        className={[
          // Mobile: fixed drawer from left, below navbar
          "fixed top-16 bottom-0 left-0 z-40",
          // Desktop: sticky sidebar in flow
          "md:sticky md:top-16 md:bottom-auto md:left-auto md:z-auto md:h-[calc(100vh-4rem)]",
          // Sizing & scroll
          "w-[260px] flex-shrink-0 overflow-y-auto",
          // Visual
          "bg-background border-r border-black/5 dark:border-white/5",
          // Animation
          "transition-transform duration-200 ease-in-out",
          drawerOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        ].join(" ")}
        aria-label="Notes navigation"
      >
        <NotesSidebar
          categories={categories}
          activeSlug={activeSlug}
          onLinkClick={closeDrawer}
        />
      </aside>

      {/* Main content */}
      <main className="flex-1 min-w-0">
        {/* Mobile top bar */}
        <div className="md:hidden sticky top-16 z-20 flex items-center gap-3 px-4 py-3 border-b border-black/5 dark:border-white/5 bg-background/95 backdrop-blur-sm">
          <button
            onClick={() => setDrawerOpen(true)}
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
            aria-label="Open notes navigation"
            aria-expanded={drawerOpen}
          >
            <HamburgerIcon />
            <span className="font-heading font-medium truncate max-w-[220px]">
              {noteTitle}
            </span>
          </button>
        </div>

        <div className="px-6 py-10 md:px-10 md:py-12 max-w-3xl">
          {children}
        </div>
      </main>
    </div>
  );
}
