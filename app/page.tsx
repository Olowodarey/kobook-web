const PROMISES = [
  {
    title: "Works 100% offline",
    description:
      "Log sales, adjust stock, record credit — all with zero data bundle. The shop never waits for a network.",
  },
  {
    title: "Your data stays yours",
    description:
      "Records live on your own phone. Backups go to your own Google Drive — we never hold a copy of your sales.",
  },
  {
    title: "See your real profit",
    description:
      "Not guesses. Gross and net profit, expenses, and losses — in ₦, in one report you can actually trust.",
  },
];

// Contact channels. wa.me needs the number in international format with no
// "+" or leading 0 — 08142293610 → 2348142293610 (Nigeria +234).
const WHATSAPP =
  "https://wa.me/2348142293610?text=Hello%2C%20I%20want%20early%20access%20to%20Kobook";
const EMAIL = "mailto:olowodarey@gmail.com?subject=Kobook%20early%20access";

// Rows for the hand-built "shop record book" in the hero. They're meant to
// read like a page from the paper ledger Kobook replaces — a mix of cash
// sales, a credit entry, and a restock — so the visual itself explains the app.
const LEDGER = [
  { item: "Rice 25kg", meta: "×2 · Cash sale", amount: "₦18,000", tone: "sale" },
  { item: "Peak Milk", meta: "×12 · Cash sale", amount: "₦9,600", tone: "sale" },
  { item: "Sugar 1kg", meta: "×3 · Cash sale", amount: "₦4,200", tone: "sale" },
  { item: "Musa Ibrahim", meta: "Credit · due Fri", amount: "₦6,500", tone: "credit" },
  { item: "Indomie carton", meta: "×40 · Restock", amount: "Stock in", tone: "stock" },
] as const;

const TONE_DOT: Record<string, string> = {
  sale: "bg-brand",
  credit: "bg-amber-500",
  stock: "bg-sky-500",
};

const FEATURES = [
  {
    title: "Inventory & stock",
    description:
      "Track products, categories, and stock levels in real time, with a full movement history behind every change.",
  },
  {
    title: "Sales & credit",
    description:
      "Log cash and credit sales at the counter, and keep a running ledger of exactly who owes what — and who gave it out.",
  },
  {
    title: "Staff accounts",
    description:
      "Give each staff their own PIN login, with owner-only controls kept separate. No shared passwords, no guesswork.",
  },
  {
    title: "Profit & loss reports",
    description:
      "Gross and net profit, expense breakdown, and damage loss — a clear picture of how the shop is really doing.",
  },
  {
    title: "Expenses & cash count",
    description:
      "Record daily expenses and reconcile the cash drawer — expected vs. actual — so shortfalls never hide.",
  },
  {
    title: "Multiple shops, one account",
    description:
      "Run more than one shop from a single account and switch between them in seconds, each with its own data.",
  },
];

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-tint/60 to-white">
        <div className="mx-auto grid w-full max-w-5xl items-center gap-12 px-6 pt-16 pb-20 sm:px-10 sm:pt-24 sm:pb-28 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center rounded-full bg-brand-tint px-3 py-1 text-sm font-medium text-brand">
              For Nigerian shop owners &amp; attendants
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-brand-dark sm:text-5xl">
              Replace the notebook. Run your shop from your phone.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
              Kobook tracks your inventory, sales, credit, and profit — fully
              offline, so you never need a data bundle just to get through the
              day. Simple enough for the boy at the counter, clear enough for
              the owner.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-7 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
              >
                Chat on WhatsApp
              </a>
              <a
                href={EMAIL}
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-7 text-sm font-semibold text-brand-dark transition-colors hover:border-brand hover:text-brand"
              >
                Email us
              </a>
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Coming soon to Google Play — in active development.
            </p>
          </div>

          {/* Hand-designed "shop record book" — a ledger page of sales, credit,
              and stock, totalled in ₦. The visual carries the pitch on its own. */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-5 rounded-[2rem] bg-brand/10 blur-2xl" />

              {/* Spiral binding across the top, echoing the notebook in the logo */}
              <div className="relative mx-auto flex w-[88%] justify-between px-6">
                {Array.from({ length: 7 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-3 w-3 translate-y-1.5 rounded-full border-2 border-brand/40 bg-white"
                  />
                ))}
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl">
                {/* Book cover strip / header */}
                <div className="flex items-center justify-between bg-brand px-5 py-4 text-white">
                  <div>
                    <p className="text-sm font-semibold">Mama Nkechi Stores</p>
                    <p className="text-xs text-white/70">Today · 12 records</p>
                  </div>
                  <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium">
                    Sales book
                  </span>
                </div>

                {/* Ledger rows */}
                <div className="divide-y divide-zinc-100 px-5">
                  {LEDGER.map((row) => (
                    <div
                      key={row.item}
                      className="flex items-center gap-3 py-3"
                    >
                      <span
                        className={`h-2.5 w-2.5 shrink-0 rounded-full ${TONE_DOT[row.tone]}`}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-ink">
                          {row.item}
                        </p>
                        <p className="truncate text-xs text-zinc-500">
                          {row.meta}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 text-sm font-semibold ${
                          row.tone === "credit"
                            ? "text-amber-600"
                            : row.tone === "stock"
                              ? "text-sky-600"
                              : "text-brand-dark"
                        }`}
                      >
                        {row.amount}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Running total */}
                <div className="flex items-center justify-between border-t border-zinc-100 bg-cream px-5 py-4">
                  <div>
                    <p className="text-xs text-zinc-500">Today&apos;s sales</p>
                    <p className="text-lg font-semibold text-brand-dark">
                      ₦31,800
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-tint px-3 py-1.5 text-sm font-semibold text-brand">
                    <span aria-hidden>▲</span> Profit ₦8,450
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promises strip */}
      <section className="border-y border-zinc-100 bg-white">
        <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-14 sm:grid-cols-3 sm:px-10">
          {PROMISES.map((p) => (
            <div key={p.title}>
              <h3 className="text-base font-semibold text-brand-dark">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-brand-dark sm:text-3xl">
            The paper notebook is costing you more than you think
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            Tracking stock and sales on paper leads to stockouts, undetected
            theft and shrinkage, and no real view of profit. Kobook gives you
            the same speed and simplicity your staff already know — with none of
            the blind spots.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-20">
        <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-dark sm:text-3xl">
            Everything the shop needs, nothing it doesn&apos;t
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-100 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="text-base font-semibold text-brand-dark">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / data ownership */}
      <section className="bg-brand text-white">
        <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Your shop&apos;s data belongs to you
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Your products, sales, and every customer&apos;s credit balance stay
            on your device. If you turn on backup, a copy goes to your own
            Google Drive — under your Google account, controlled by you. We
            can&apos;t read it, and we never sell your data.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            <a href="/privacy" className="underline underline-offset-2 hover:text-white">
              Read our Privacy Policy
            </a>
            <a href="/terms" className="underline underline-offset-2 hover:text-white">
              Read our Terms of Service
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-6 py-16 sm:px-10 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-dark sm:text-3xl">
            Want to be first to try it?
          </h2>
          <p className="max-w-xl text-lg text-zinc-600">
            Kobook is in active development. Message us on WhatsApp or send an
            email, and we&apos;ll reach out when early access opens up.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-7 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
            >
              WhatsApp 0814 229 3610
            </a>
            <a
              href={EMAIL}
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-7 text-sm font-semibold text-brand-dark transition-colors hover:border-brand hover:text-brand"
            >
              olowodarey@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
