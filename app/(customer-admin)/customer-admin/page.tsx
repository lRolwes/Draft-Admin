import Image from "next/image";

import { BrandLogo } from "@/components/brand-logo";

const SAINT_MARYS_LOGO = "/images/SMSSCStackedHorznoCampusWhite1.webp";

export default function CustomerAdminPage() {
  return (
    <main className="flex min-h-0 flex-1 items-center justify-center p-8 md:p-12">
      <section className="w-full max-w-5xl rounded-2xl border border-brand-gray-owl/90 bg-brand-white/90 p-8 shadow-sm md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-coastal">Customer Admin Portal</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-[1.15] tracking-tight text-brand-midnight md:text-5xl">
          Saint Mary's Schools Queen of Hearts Raffle
        </h1>
        <p className="mt-5 max-w-2xl text-brand-body font-normal leading-[var(--text-brand-body--line-height)] text-brand-charcoal">
          Welcome to your fundraising admin menu. Use the sidebar to run reports, complete actions, and access
          publishing and compliance resources.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-xl border border-brand-gray-owl/90 bg-brand-white p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-dolphin">Powered by</p>
              <BrandLogo variant="light" className="mt-3 h-auto w-[220px]" priority />
            </div>
          </div>

          <div className="flex items-center justify-center p-2">
            <div className="flex h-40 w-full items-center justify-center rounded-lg bg-brand-midnight/95 p-4">
              <Image
                src={SAINT_MARYS_LOGO}
                alt="Saint Mary's School logo"
                width={500}
                height={220}
                className="h-auto max-h-full w-auto max-w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
