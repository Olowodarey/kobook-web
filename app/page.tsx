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

// Live on the Play Store (package com.kobook.app) — this is the primary way
// people install Kobook now. The /beta direct-APK redirect still exists as a
// fallback but is no longer featured.
const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.kobook.app";

// Real in-app screenshots (1080×2400 originals, downscaled into /public) shown
// in the "See it in action" gallery.
const SHOTS = [
  {
    src: "/screenshots/sales.jpg",
    title: "Log a sale in seconds",
    description:
      "Cash, transfer, POS, or credit — recorded at the counter, even with no network.",
  },
  {
    src: "/screenshots/customercredit.jpg",
    title: "Know exactly who owes you",
    description:
      "A running credit ledger with balances, due dates, and who gave it out.",
  },
  {
    src: "/screenshots/finance.jpg",
    title: "All your money in one place",
    description:
      "Expenses, cash count, supplier debt, and profit — managed from one screen.",
  },
];

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

// A phone-frame wrapper for the real app screenshots: a dark bezel with rounded
// corners and a soft shadow, clipping the screenshot inside.
function PhoneMockup({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[2.2rem] border-[7px] border-zinc-900 bg-zinc-900 shadow-2xl shadow-brand/15 ${className}`}
    >
      <img src={src} alt={alt} loading="lazy" className="block w-full" />
    </div>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <circle cx="12" cy="12" r="11" className="fill-brand-tint" />
      <path
        d="M7 12.5l3.2 3.2L17 9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={PLAY_STORE}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Kobook on Google Play"
      className="inline-block transition-opacity hover:opacity-90"
    >
      {/* Official Google Play badge (has its own clear-space padding). */}
      <img
        src="/google-play-badge.png"
        alt="Get it on Google Play"
        className={className}
      />
    </a>
  );
}

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-tint/60 to-white">
        {/* Decorative colour blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-48 h-80 w-80 rounded-full bg-sky-tint/80 blur-3xl"
        />

        <div className="relative mx-auto grid w-full max-w-5xl items-center gap-12 px-6 pt-16 pb-20 sm:px-10 sm:pt-24 sm:pb-28 lg:grid-cols-2">
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
              <PlayBadge className="h-14 w-auto" />
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-7 text-sm font-semibold text-brand-dark transition-colors hover:border-brand hover:text-brand"
              >
                Chat on WhatsApp
              </a>
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Free on Google Play — works on any Android phone, online or off.
            </p>
          </div>

          {/* Real app dashboard in a phone frame, with floating accent chips. */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              aria-hidden
              className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-brand/10 blur-3xl"
            />
            <div className="relative w-[240px] sm:w-[262px]">
              <PhoneMockup
                src="/screenshots/dashboard.jpg"
                alt="Kobook dashboard showing today's sales, profit, and stock"
                className="animate-float"
              />

              {/* Floating chips for a bit of life */}
              <div className="absolute -left-6 bottom-24 rounded-2xl border border-zinc-100 bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur sm:-left-10">
                <p className="text-[11px] font-medium text-zinc-500">
                  Today&apos;s profit
                </p>
                <p className="flex items-center gap-1 text-sm font-bold text-brand-dark">
                  <span aria-hidden className="text-brand">
                    ▲
                  </span>
                  ₦8,450
                </p>
              </div>

              <div className="absolute -right-4 top-16 flex items-center gap-1.5 rounded-full border border-zinc-100 bg-white/95 px-3 py-1.5 text-xs font-semibold text-brand-dark shadow-lg backdrop-blur sm:-right-6">
                <span
                  aria-hidden
                  className="h-2 w-2 rounded-full bg-brand"
                />
                Works offline
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promises strip */}
      <section className="border-y border-zinc-100 bg-white">
        <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-14 sm:grid-cols-3 sm:px-10">
          {PROMISES.map((p) => (
            <div key={p.title} className="flex gap-3.5">
              <CheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-brand" />
              <div>
                <h3 className="text-base font-semibold text-brand-dark">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-zinc-600">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* See it in action — real screenshots */}
      <section className="bg-cream">
        <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center rounded-full bg-brand-tint px-3 py-1 text-sm font-medium text-brand">
              A quick look
            </p>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-brand-dark sm:text-3xl">
              See Kobook in action
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-600">
              The same speed your staff already know from the notebook — with
              none of the blind spots.
            </p>
          </div>

          <div className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-8">
            {SHOTS.map((shot, i) => (
              <div
                key={shot.title}
                className="flex flex-col items-center text-center"
              >
                <PhoneMockup
                  src={shot.src}
                  alt={shot.title}
                  className={`w-[210px] ${
                    i === 1 ? "sm:-translate-y-6" : ""
                  }`}
                />
                <h3 className="mt-7 text-base font-semibold text-brand-dark">
                  {shot.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-600">
                  {shot.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-white">
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
      <section id="features" className="scroll-mt-20 bg-cream">
        <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
          <h2 className="text-2xl font-semibold tracking-tight text-brand-dark sm:text-3xl">
            Everything the shop needs, nothing it doesn&apos;t
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-zinc-100 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-tint text-sm font-bold text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-semibold text-brand-dark">
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
      <section className="relative overflow-hidden bg-brand text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl"
        />
        <div className="relative mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-20">
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
            <a
              href="/privacy"
              className="underline underline-offset-2 hover:text-white"
            >
              Read our Privacy Policy
            </a>
            <a
              href="/terms"
              className="underline underline-offset-2 hover:text-white"
            >
              Read our Terms of Service
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-tint/70 via-white to-brand-tint px-8 py-14 sm:px-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-brand/10 blur-3xl"
            />
            <div className="relative flex flex-col items-start gap-6">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-dark sm:text-3xl">
                Get Kobook on your phone today
              </h2>
              <p className="max-w-xl text-lg text-zinc-600">
                Kobook is live on Google Play. Download it free, or message us
                on WhatsApp with any questions or feedback.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <PlayBadge className="h-14 w-auto" />
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-7 text-sm font-semibold text-brand-dark transition-colors hover:border-brand hover:text-brand"
                >
                  WhatsApp {"0814 229 3610"}
                </a>
                <a
                  href={EMAIL}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-7 text-sm font-semibold text-brand-dark transition-colors hover:border-brand hover:text-brand"
                >
                  olowodarey@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
