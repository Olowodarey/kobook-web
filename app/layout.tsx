import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kobook — Shop Inventory, Sales & Business Management",
  description:
    "Kobook replaces the paper notebook Nigerian shop owners use to track inventory, sales, and profit. Works fully offline — no data bundle needed to run your shop.",
  icons: {
    icon: "/kobook-logo.png",
    apple: "/kobook-logo.png",
  },
  openGraph: {
    title: "Kobook — Run your shop from your phone",
    description:
      "Track inventory, sales, credit, and profit — fully offline. Built for Nigerian shop owners.",
    type: "website",
  },
};

function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          {/* Plain <img> for the local logo — no next/image config needed. */}
          <img
            src="/kobook-logo.png"
            alt="Kobook logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg"
          />
          <span className="text-lg font-semibold tracking-tight text-brand-dark">
            Kobook
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600">
          <Link href="/#features" className="hidden transition-colors hover:text-brand sm:inline">
            Features
          </Link>
          <Link href="/privacy" className="hidden transition-colors hover:text-brand sm:inline">
            Privacy
          </Link>
          <a
            href="https://play.google.com/store/apps/details?id=com.kobook.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-brand px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-4 w-4">
              <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
            </svg>
            Get it on Google Play
          </a>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-zinc-100 bg-cream">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div className="flex items-center gap-2.5">
          <img
            src="/kobook-logo.png"
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 rounded-md"
          />
          <span>&copy; {new Date().getFullYear()} Kobook</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/privacy" className="transition-colors hover:text-brand">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-brand">
            Terms of Service
          </Link>
          <a
            href="https://wa.me/2348142293610"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand"
          >
            WhatsApp
          </a>
          <a
            href="mailto:olowodarey@gmail.com"
            className="transition-colors hover:text-brand"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
