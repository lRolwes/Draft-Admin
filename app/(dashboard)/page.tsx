import { BrandLogo } from "@/components/brand-logo";

export default function AdminHomePage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        aria-hidden
        style={{
          backgroundImage: `
            radial-gradient(ellipse 85% 55% at 50% -15%, color-mix(in srgb, var(--color-brand-mint) 55%, transparent), transparent),
            radial-gradient(ellipse 50% 40% at 100% 20%, color-mix(in srgb, var(--color-brand-spring) 18%, transparent), transparent),
            radial-gradient(ellipse 45% 35% at 0% 80%, color-mix(in srgb, var(--color-brand-coastal) 12%, transparent), transparent)
          `,
        }}
      />
      <div className="relative flex max-w-2xl flex-col items-center text-center">
        <BrandLogo variant="light" className="mb-10 h-auto w-[min(280px,85vw)]" priority />
        <h1 className="max-w-xl text-brand-headline leading-[var(--text-brand-headline--line-height)] tracking-tight text-brand-midnight">
          <span className="font-extrabold italic">Reimagine</span>{" "}
          <span className="font-semibold">your fundraising</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-brand-body font-normal leading-[var(--text-brand-body--line-height)] text-brand-charcoal">
          Choose a section from the sidebar to manage servers, organizations, raffles, and the rest of your programs.
        </p>
      </div>
    </main>
  );
}
