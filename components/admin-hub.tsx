import { ADMIN_SECTIONS, type AdminSectionKey } from "@/lib/admin-sections";

export function AdminHub({ sectionKey }: { sectionKey: AdminSectionKey }) {
  const section = ADMIN_SECTIONS[sectionKey];

  return (
    <main className="flex flex-1 flex-col px-8 py-10">
      <header className="mb-10 max-w-3xl">
        <h1 className="text-[1.875rem] font-extrabold leading-9 tracking-tight text-brand-midnight">{section.title}</h1>
        <p className="mt-3 text-brand-body font-normal leading-[var(--text-brand-body--line-height)] text-brand-charcoal">
          {section.description}
        </p>
      </header>

      <ul className="grid max-w-6xl gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {section.links.map((item, index) => (
          <li key={item.slug}>
            <div
              aria-disabled="true"
              className="flex h-full min-h-[5.5rem] cursor-default flex-col justify-between rounded-xl border border-brand-gray-owl/90 bg-brand-white/90 p-5 opacity-90 shadow-sm select-none"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-brand-dolphin tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <span className="mt-2 text-brand-subhead font-semibold leading-snug text-brand-midnight">{item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
