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
            aria-label="Get Kobook on Google Play"
            className="inline-block transition-opacity hover:opacity-90"
          >
            {/* Official Google Play badge (includes its own clear-space padding). */}
            <img
              src="/google-play-badge.png"
              alt="Get it on Google Play"
              className="h-10 w-auto"
            />
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
