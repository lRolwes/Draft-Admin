"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { CustomerAdminSidebar } from "@/components/customer-admin-sidebar";

function IconMenu({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    );
  }

  return (
    <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CustomerAdminShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) document.documentElement.classList.add("overflow-hidden");
    else document.documentElement.classList.remove("overflow-hidden");
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [mobileOpen]);

  return (
    <div className="relative flex min-h-[100dvh] bg-brand-white text-brand-charcoal">
      <div
        role="presentation"
        tabIndex={-1}
        className={`fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px] transition-opacity duration-200 md:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={`fixed inset-y-0 left-0 z-50 flex h-[100dvh] w-[300px] max-w-[90vw] shrink-0 transition-transform duration-200 ease-out md:static md:z-auto md:h-auto md:max-w-none md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "max-md:pointer-events-none max-md:-translate-x-full"
        }`}
      >
        <CustomerAdminSidebar onCloseMobile={() => setMobileOpen(false)} />
      </div>

      <div className="relative flex min-h-[100dvh] min-w-0 flex-1 flex-col bg-gradient-to-b from-brand-white via-brand-mint/12 to-brand-white">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-brand-gray-owl/80 bg-brand-white/95 px-3 py-3 backdrop-blur-sm md:hidden">
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="customer-admin-sidebar"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-lg p-2 text-brand-midnight outline-none ring-brand-spring/50 hover:bg-brand-mint/35 focus-visible:ring-2"
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <IconMenu open={mobileOpen} />
          </button>
          <span className="text-brand-subhead font-semibold leading-[var(--text-brand-subhead--line-height)] text-brand-midnight">
            Customer Menu
          </span>
        </header>
        {children}
      </div>
    </div>
  );
}
