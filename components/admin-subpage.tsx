export function AdminSubpage({ title, description }: { title: string; description?: string }) {
  return (
    <main className="flex flex-1 flex-col px-8 py-10">
      <header className="max-w-2xl">
        <h1 className="text-[1.875rem] font-extrabold leading-9 tracking-tight text-brand-midnight">{title}</h1>
        {description ? (
          <p className="mt-3 text-brand-body font-normal leading-[var(--text-brand-body--line-height)] text-brand-charcoal">
            {description}
          </p>
        ) : null}
      </header>
    </main>
  );
}
