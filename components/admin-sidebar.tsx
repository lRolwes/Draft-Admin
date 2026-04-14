"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { isNonNavSidebarHref } from "@/lib/admin-sections";

type NavItem = {
  href: string;
  label: string;
  icon: ReactNode;
};

const iconClass = "size-[18px] shrink-0 opacity-90";

function IconServer() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}

function IconRaffle() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m9 9 5 12 1.8-5.2L21 14Z" />
      <path d="M7.2 2.2 8 5.1" />
      <path d="m5.1 8-2.9-.8" />
      <path d="M14 4.1 12 6" />
      <path d="m6 12-1.9 2" />
    </svg>
  );
}

function IconAutomation() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconRepeat() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function IconTicket() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}

function IconSearchEdit() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m21 21-4.34-4.34" />
      <circle cx="11" cy="11" r="8" />
      <path d="m15 5 4 4" />
      <path d="m12 8 5-5" />
    </svg>
  );
}

function IconBuyer() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function IconSeller() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" />
      <path d="M12 12v4" />
      <path d="M10 14h4" />
    </svg>
  );
}

function IconDocs() {
  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3Z" />
    </svg>
  );
}

type AdminSidebarProps = {
  id?: string;
  onCloseMobile?: () => void;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/new-server", label: "New server", icon: <IconServer /> },
  { href: "/organizations", label: "Organizations", icon: <IconBuilding /> },
  { href: "/raffles", label: "Raffles", icon: <IconRaffle /> },
  { href: "/automation", label: "Automation", icon: <IconAutomation /> },
  { href: "/email", label: "Email", icon: <IconMail /> },
  { href: "/recurrent-purchases", label: "Recurrent purchases", icon: <IconRepeat /> },
  { href: "/tickets", label: "Tickets", icon: <IconTicket /> },
  { href: "/search-and-edit", label: "Search and Edit", icon: <IconSearchEdit /> },
  { href: "/buyers", label: "Buyers", icon: <IconBuyer /> },
  { href: "/sellers", label: "Sellers", icon: <IconSeller /> },
  { href: "/documentation", label: "Documentation", icon: <IconDocs /> },
];

function IconClose() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function AdminSidebar({ id, onCloseMobile }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      id={id}
      className="no-scrollbar flex h-full min-h-0 w-[272px] shrink-0 flex-col overflow-hidden border-r border-black/10 bg-brand-midnight text-brand-white md:min-h-full"
    >
      <div className={`relative border-b border-white/10 px-5 py-6 ${onCloseMobile ? "pr-14 md:pr-5" : ""}`}>
        {onCloseMobile ? (
          <button
            type="button"
            onClick={onCloseMobile}
            className="absolute right-3 top-5 rounded-lg p-2 text-brand-mint outline-none ring-brand-spring/60 hover:bg-white/10 md:hidden"
            aria-label="Close menu"
          >
            <IconClose />
          </button>
        ) : null}
        <Link
          href="/"
          className="group block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-brand-spring focus-visible:ring-offset-2 focus-visible:ring-offset-brand-midnight"
        >
          <BrandLogo
            variant="onDark"
            className="h-11 w-auto opacity-95 transition-opacity group-hover:opacity-100"
            priority
          />
          <span className="mt-3 block text-brand-subhead font-semibold leading-[var(--text-brand-subhead--line-height)] text-brand-mint">
            Admin
          </span>
        </Link>
      </div>

      <nav className="no-scrollbar min-h-0 flex-1 space-y-0.5 overflow-y-auto overflow-x-hidden overscroll-y-contain px-3 py-4" aria-label="Admin">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
          const blockNav = isNonNavSidebarHref(item.href);
          const rowClass = [
            "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all duration-150",
            active
              ? "bg-gradient-to-r from-brand-spring/20 to-transparent text-brand-white shadow-[inset_3px_0_0_0] shadow-brand-spring"
              : "text-brand-gray-owl hover:bg-white/5 hover:text-brand-white",
          ].join(" ");
          const iconClass = active
            ? "text-brand-spring"
            : "text-brand-dolphin transition-colors group-hover:text-brand-mint";

          return (
            <Link
              key={item.href}
              href={item.href}
              prefetch={blockNav ? false : undefined}
              aria-disabled={blockNav}
              onClick={
                blockNav
                  ? (e) => {
                      e.preventDefault();
                    }
                  : undefined
              }
              className={`group ${rowClass}`}
            >
              <span className={iconClass}>{item.icon}</span>
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <p className="text-[0.6875rem] font-normal leading-4 text-brand-dolphin">
          Signed in as <span className="font-semibold text-brand-mint">admin</span>
        </p>
      </div>
    </aside>
  );
}
