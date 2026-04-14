export type AdminSectionKey =
  | "organizations"
  | "raffles"
  | "automation"
  | "email"
  | "recurrent-purchases"
  | "tickets"
  | "search-and-edit"
  | "buyers"
  | "sellers"
  | "documentation";

export type AdminSublink = {
  label: string;
  slug: string;
};

export type AdminSectionSpec = {
  title: string;
  description: string;
  links: AdminSublink[];
};

export const ADMIN_SECTIONS: Record<AdminSectionKey, AdminSectionSpec> = {
  organizations: {
    title: "Organizations",
    description: "Schools, teams, and groups running campaigns.",
    links: [{ label: "Maintain 501(c) Organizations", slug: "maintain-501c-organizations" }],
  },
  raffles: {
    title: "Raffles",
    description: "Draws, jackpots, mailings, and operational tools for raffle programs.",
    links: [
      { label: "Raffle Details", slug: "raffle-details" },
      { label: "QoH Only Details", slug: "qoh-only-details" },
      { label: "Admins", slug: "admins" },
      { label: "Contacts", slug: "contacts" },
      { label: "Drawing Details", slug: "drawing-details" },
      { label: "Drawing Dashboard", slug: "drawing-dashboard" },
      { label: "Weekly QoH Drawing Report", slug: "weekly-qoh-drawing-report" },
      { label: "Open Slots", slug: "open-slots" },
      { label: "Recent Transactions", slug: "recent-transactions" },
      { label: "Deleted Recurrent Records", slug: "deleted-recurrent-records" },
      { label: "SuperAdmin Drawings", slug: "superadmin-drawings" },
      { label: "Automatic Weekly Emails (first cut)", slug: "automatic-weekly-emails-first-cut" },
      { label: "Six Months Sales", slug: "six-months-sales" },
      { label: "Monthly Sales ( Queen of Hearts )", slug: "monthly-sales-queen-of-hearts" },
      { label: "Drawing Audit", slug: "drawing-audit" },
      { label: "Drawing Report", slug: "drawing-report" },
      { label: "Raffles Wanting Mailing Addresses", slug: "raffles-wanting-mailing-addresses" },
      { label: "Largest Winning Jackpots", slug: "largest-winning-jackpots" },
      { label: "earlybird_test_980", slug: "earlybird-test-980" },
    ],
  },
  automation: {
    title: "Automation",
    description: "Scheduled jobs, wrap-ups, and recurring purchase flows.",
    links: [
      { label: "Automatic Drawings", slug: "automatic-drawings" },
      { label: "Automatic Drawing WrapUp", slug: "automatic-drawing-wrapup" },
      { label: "Automatic Recurrent Purchases", slug: "automatic-recurrent-purchases" },
      { label: "Customers With Automatic Recurrent Tickets", slug: "customers-with-automatic-recurrent-tickets" },
    ],
  },
  email: {
    title: "Email",
    description: "Blasts, queues, deliverability, and subscriber hygiene.",
    links: [
      { label: "E-Mail Blasts", slug: "e-mail-blasts" },
      { label: "Report Blasts For One Email", slug: "report-blasts-for-one-email" },
      { label: "Show Email Queues", slug: "show-email-queues" },
      { label: "Declined Emails -- Failed to Send", slug: "declined-emails-failed-to-send" },
      { label: "Emails Sent by Day and Domain", slug: "emails-sent-by-day-and-domain" },
      { label: "Define fixes for email domains", slug: "define-fixes-for-email-domains" },
      { label: "Mark Buyer Emails as BAD", slug: "mark-buyer-emails-as-bad" },
      { label: "Removed Emails Report", slug: "removed-emails-report" },
      { label: "Unsubscribe Emails", slug: "unsubscribe-emails" },
      { label: "reinstate Audit", slug: "reinstate-audit" },
      { label: "Remove Emails", slug: "remove-emails" },
    ],
  },
  "recurrent-purchases": {
    title: "Recurrent Purchases",
    description: "Subscriptions and repeating supporter contributions.",
    links: [{ label: "Scheduled Recurrents", slug: "scheduled-recurrents" }],
  },
  tickets: {
    title: "Tickets",
    description: "Paid and free tickets, revenue, and invalidation tools.",
    links: [
      { label: "Change A Ticket from Paid to Free", slug: "change-ticket-paid-to-free" },
      { label: "Invalidate A Single Ticket", slug: "invalidate-single-ticket" },
      { label: "Revenue Report", slug: "revenue-report" },
      { label: "Billing Report", slug: "billing-report" },
      { label: "Summaries by Month", slug: "summaries-by-month" },
      { label: "Top Weekly Sellers", slug: "top-weekly-sellers" },
      { label: "Group Names", slug: "group-names" },
      { label: "Invalidate An Entire Transaction", slug: "invalidate-entire-transaction" },
    ],
  },
  "search-and-edit": {
    title: "Search and Edit",
    description: "Look up people and records, then jump straight into edits.",
    links: [{ label: "Find by Name Or Email, then Edit", slug: "find-by-name-or-email-then-edit" }],
  },
  buyers: {
    title: "Buyers",
    description: "Supporter records, contact info, and lookups.",
    links: [
      { label: "Edit Buyer Name and E-Mail", slug: "edit-buyer-name-and-email" },
      { label: "Lookup by E-Mail", slug: "lookup-by-email" },
    ],
  },
  sellers: {
    title: "Sellers",
    description: "Fundraising leads, teams, and seller maintenance.",
    links: [
      { label: "Lookup by E-Mail", slug: "lookup-by-email" },
      { label: "Lookup Seller by Name", slug: "lookup-seller-by-name" },
      { label: "Add A Seller", slug: "add-a-seller" },
      { label: "Edit A Seller", slug: "edit-a-seller" },
      { label: "List Sellers", slug: "list-sellers" },
      { label: "List Excluded Sellers", slug: "list-excluded-sellers" },
      { label: "Sellers On More Than One Team", slug: "sellers-on-more-than-one-team" },
      { label: "Enter a Sale", slug: "enter-a-sale" },
    ],
  },
  documentation: {
    title: "Documentation",
    description: "Runbooks, quirks, and developer references for this admin surface.",
    links: [
      { label: "Change Log", slug: "change-log" },
      { label: "Time Zone Issues", slug: "time-zone-issues" },
      { label: "Donate Ticket(s) Project", slug: "donate-tickets-project" },
      { label: "Removing \"donateamount\" When Invalidating", slug: "removing-donateamount-when-invalidating" },
      { label: "Add Slots to Thank You Page", slug: "add-slots-to-thank-you-page" },
      { label: "MegaRaffle WinnerReport", slug: "megaraffle-winner-report" },
      { label: "GoRaiseDough Automation", slug: "goraisedough-automation" },
      { label: "For Drawing Until the Winning Card is Drawn", slug: "for-drawing-until-winning-card-drawn" },
      { label: "\"How To\"s", slug: "how-tos" },
      { label: "Developer Docs", slug: "developer-docs" },
    ],
  },
};

export function adminSectionBasePath(key: AdminSectionKey): string {
  return `/${key}`;
}

export function getSublink(key: AdminSectionKey, slug: string): AdminSublink | undefined {
  return ADMIN_SECTIONS[key].links.find((l) => l.slug === slug);
}

export function listSublinkSlugs(key: AdminSectionKey): { slug: string }[] {
  return ADMIN_SECTIONS[key].links.map((l) => ({ slug: l.slug }));
}

/** Sidebar href like `/organizations` → section key when that path is a configured hub. */
export function hubKeyFromSidebarHref(href: string): AdminSectionKey | null {
  const path = href.replace(/^\//, "");
  if (path in ADMIN_SECTIONS) return path as AdminSectionKey;
  return null;
}

/** Hubs with exactly one sublink: sidebar parent is shown but must not navigate. */
export function isSingleLinkHubFromSidebarHref(href: string): boolean {
  const key = hubKeyFromSidebarHref(href);
  if (!key) return false;
  return ADMIN_SECTIONS[key].links.length === 1;
}

/** Sidebar entries that keep full hover styling but block navigation (primary click). */
export function isNonNavSidebarHref(href: string): boolean {
  if (href === "/new-server") return true;
  return isSingleLinkHubFromSidebarHref(href);
}
