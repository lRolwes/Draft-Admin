"use client";

import { useState } from "react";

import { CUSTOMER_ADMIN_MENU } from "@/lib/customer-admin-menu";

type CustomerAdminSidebarProps = {
  onCloseMobile?: () => void;
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`size-4 text-brand-mint transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function CustomerAdminSidebar({ onCloseMobile }: CustomerAdminSidebarProps) {
  const [openSection, setOpenSection] = useState<string>("Reports");

  return (
    <aside
      id="customer-admin-sidebar"
      className="no-scrollbar sticky top-0 flex h-[100dvh] min-h-[100dvh] w-[300px] shrink-0 flex-col overflow-y-auto border-r border-black/10 bg-brand-midnight text-brand-white"
    >
      <div className={`relative border-b border-white/10 px-5 py-6 ${onCloseMobile ? "pr-14 md:pr-5" : ""}`}>
        {onCloseMobile ? (
          <button
            type="button"
            onClick={onCloseMobile}
            className="absolute right-3 top-5 rounded-lg p-2 text-brand-mint outline-none ring-brand-spring/60 hover:bg-white/10 md:hidden"
            aria-label="Close menu"
          >
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        ) : null}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-mint">Customer Menu</p>
        <h2 className="mt-2 text-2xl font-extrabold leading-8 tracking-tight">Saint Mary's School</h2>
        <p className="mt-2 text-sm leading-6 text-brand-gray-owl">Go Raise Dough Partner Portal</p>
      </div>

      <nav className="no-scrollbar min-h-0 flex-1 space-y-5 overflow-y-auto p-4" aria-label="Customer admin menu">
        {CUSTOMER_ADMIN_MENU.map((section) => (
          <section
            key={section.title}
            onMouseEnter={() => setOpenSection(section.title)}
            onFocusCapture={() => setOpenSection(section.title)}
            className="rounded-xl border border-white/10 bg-white/5 p-2 transition-colors hover:bg-white/10"
          >
            <button
              type="button"
              onClick={() => setOpenSection((prev) => (prev === section.title ? "" : section.title))}
              className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-brand-mint hover:bg-white/10"
            >
              <span>{section.title}</span>
              <Chevron open={openSection === section.title} />
            </button>

            <div
              className={`overflow-hidden transition-all duration-200 ${
                openSection === section.title ? "mt-2 max-h-[900px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {section.groups ? (
                <div className="space-y-3">
                {section.groups.map((group) => (
                  <div key={group.title} className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <h4 className="text-sm font-semibold text-brand-white">{group.title}</h4>
                    <ul className="mt-2 space-y-1">
                      {group.items.map((item) => (
                        <li key={item}>
                          <button
                            type="button"
                            className="w-full rounded-md px-2 py-1 text-left text-sm text-brand-gray-owl transition-colors hover:bg-white/10 hover:text-brand-white"
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                </div>
              ) : (
                <ul className="space-y-1">
                  {section.items?.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        className="w-full rounded-md border border-transparent px-2 py-1.5 text-left text-sm text-brand-gray-owl transition-colors hover:bg-white/10 hover:text-brand-white"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </nav>
    </aside>
  );
}
