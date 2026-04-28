import Image from "next/image";

import { CUSTOMER_ADMIN_MENU } from "@/lib/customer-admin-menu";

const SAINT_MARYS_LOGO = "/images/SMSSCStackedHorznoCampusWhite1.webp";
const GRD_DARK_BG_LOGO = "/images/GRDLogoforDarkBG.png";

export default function CustomerAdminPage() {
  return (
    <main className="min-h-[100dvh]">
      <header className="border-b border-white/15 bg-[#003D52] px-5 py-4 md:px-8">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4">
          <Image
            src={GRD_DARK_BG_LOGO}
            alt="Go Raise Dough"
            width={220}
            height={62}
            className="h-auto w-[185px] object-contain"
            priority
          />
          <button
            type="button"
            className="rounded-md border border-white/35 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-spring"
          >
            Contact Us
          </button>
        </div>
      </header>

      <div className="mx-auto w-full max-w-5xl px-5 py-8 md:px-8 md:py-10">
        <section className="rounded-xl border border-brand-gray-owl/80 bg-brand-white p-6 md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-coastal">Customer Admin Portal</p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-brand-midnight md:text-4xl">
              Saint Mary's Schools Queen of Hearts Raffle
            </h1>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <p className="mt-3 text-brand-body font-semibold leading-[var(--text-brand-body--line-height)] text-brand-charcoal">
              Welcome to your fundraising admin menu.
            </p>
            <div className="flex h-20 w-40 items-center justify-center rounded-md bg-brand-midnight/95 p-3">
              <Image
                src={SAINT_MARYS_LOGO}
                alt="Saint Mary's School logo"
                width={320}
                height={130}
                className="h-auto max-h-full w-auto max-w-full object-contain"
                priority
              />
            </div>
          </div>

          <div className="mt-8 space-y-6">
            {CUSTOMER_ADMIN_MENU.map((section) => (
              <section key={section.title} className="rounded-lg border border-brand-gray-owl/70 bg-brand-white p-4 md:p-5">
                <h2 className="text-xl font-bold text-brand-midnight">{section.title}</h2>

                {section.groups ? (
                  <div className="mt-4 space-y-4">
                    {section.groups.map((group) => (
                      <div key={group.title}>
                        <h3 className="text-base font-bold text-brand-coastal">{group.title}</h3>
                        <ul className="mt-2 space-y-1.5 pl-5">
                          {group.items.map((item) => (
                            <li key={item}>
                              <button
                                type="button"
                                className="w-full cursor-pointer rounded-sm px-1 py-0.5 text-left text-brand-body font-semibold leading-[var(--text-brand-body--line-height)] text-brand-charcoal transition-colors hover:bg-brand-mint/20 hover:text-brand-midnight hover:underline"
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
                  <ul className="mt-3 space-y-1.5 pl-5">
                    {section.items?.map((item) => (
                      <li key={item}>
                        <button
                          type="button"
                          className="w-full cursor-pointer rounded-sm px-1 py-0.5 text-left text-brand-body font-semibold leading-[var(--text-brand-body--line-height)] text-brand-charcoal transition-colors hover:bg-brand-mint/20 hover:text-brand-midnight hover:underline"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
