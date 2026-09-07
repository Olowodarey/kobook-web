const FEATURES = [
  {
    title: "Works fully offline",
    description:
      "Log sales, adjust stock, and run the shop with zero data bundle. Nothing about daily operation waits for a network connection.",
  },
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
      "Give staff their own PIN login at the counter, with owner-only controls kept separate — no shared passwords, no guesswork.",
  },
  {
    title: "Profit & loss reports",
    description:
      "See real profit, not guesses — gross and net profit, expenses, and damage loss, all in one report you can trust.",
  },
  {
    title: "Multiple shops, one account",
    description:
      "Run more than one shop from a single account and switch between them in seconds, each with its own data.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6 sm:px-10">
        <span className="text-lg font-semibold tracking-tight">Kobook</span>
        <a
          href="mailto:olowodarey@gmail.com"
          className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
        >
          Contact
        </a>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto w-full max-w-5xl px-6 pt-16 pb-20 sm:px-10 sm:pt-24 sm:pb-28">
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            For shop owners &amp; attendants
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Replace the notebook. Run your shop from your phone.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Kobook is a mobile app for Nigerian shop owners to track
            inventory, sales, and business finances — fully offline, so you
            never need a data bundle just to get through the day.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="mailto:olowodarey@gmail.com?subject=Kobook%20early%20access"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Get early access
            </a>
            <span className="text-sm text-zinc-500 dark:text-zinc-500">
              Coming soon to Google Play — currently in active development.
            </span>
          </div>
        </section>

        {/* Problem */}
        <section className="border-t border-zinc-100 bg-zinc-50 dark:border-zinc-900 dark:bg-zinc-900/40">
          <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10">
            <h2 className="text-2xl font-semibold tracking-tight">
              The paper notebook is costing you more than you think
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
              Tracking stock and sales on paper leads to stockouts, undetected
              theft and shrinkage, and no real visibility into profit. Kobook
              gives you the same speed and simplicity your staff already
              know, with none of the blind spots.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
          <h2 className="text-2xl font-semibold tracking-tight">
            Everything the shop needs, nothing it doesn&apos;t
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title}>
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-zinc-100 dark:border-zinc-900">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-6 px-6 py-16 sm:px-10 sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight">
              Want to be first to try it?
            </h2>
            <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
              Kobook is in active development. Email us and we&apos;ll reach
              out when early access opens up.
            </p>
            <a
              href="mailto:olowodarey@gmail.com?subject=Kobook%20early%20access"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              olowodarey@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 dark:text-zinc-500">
          <span>&copy; {new Date().getFullYear()} Kobook</span>
          <div className="flex gap-6">
            <a
              href="https://olowodarey.github.io/kobook-privacy/"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Privacy Policy
            </a>
            <a
              href="https://olowodarey.github.io/kobook-privacy/terms.html"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Terms of Service
            </a>
            <a
              href="mailto:olowodarey@gmail.com"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
