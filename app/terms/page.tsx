import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Kobook",
  description:
    "The terms that govern your use of Kobook, the shop inventory, sales, and business management app.",
};

export default function TermsOfService() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
      <article className="legal">
        <h1>Terms of Service for Kobook</h1>
        <p className="updated">Last updated: 7 September 2026</p>

        <h2>Introduction</h2>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of Kobook
          (the &ldquo;app&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a shop
          inventory, sales, and business management application for small retail
          shop owners, operated by Olowodarey. By creating a business account,
          signing in, or using the app, you agree to these Terms. If you do not
          agree, do not use the app.
        </p>
        <p>
          If you are using Kobook as staff added by a shop owner, these Terms
          apply to you as well for the parts of the app you use.
        </p>

        <h2>The Service</h2>
        <p>
          Kobook lets a shop owner (&ldquo;Owner&rdquo;) manage one or more
          shops: products, categories, sales, stock, staff, customer credit,
          supplier credit, damaged stock, returns, expenses, and cash
          reconciliation. Day-to-day shop data is stored locally on the
          Owner&apos;s device and works fully offline. A backend service handles
          account creation (via Google Sign-In), multi-shop management, and
          subscription status.
        </p>

        <h2>Accounts</h2>
        <ul>
          <li>
            You must sign in with a valid Google account to create or access a
            business account. You are responsible for keeping your Google account
            secure — we have no separate password to reset.
          </li>
          <li>
            An Owner may operate more than one shop (&ldquo;business&rdquo;) under
            a single account.
          </li>
          <li>
            Staff are identified by name and, optionally, email, added by the
            Owner. Staff log in to the app on the shop&apos;s device using a
            numeric PIN set by the Owner — this PIN is local to the device and is
            not a substitute for account security.
          </li>
          <li>
            You are responsible for all activity that occurs under your account
            and for keeping staff PINs and devices reasonably secure.
          </li>
        </ul>

        <h2>Your Data</h2>
        <ul>
          <li>
            <strong>You own your business data.</strong> Products, sales, stock
            records, customer and supplier credit, expenses, and all other shop
            records you create belong to you.
          </li>
          <li>
            This data is stored locally on your device. If you enable backup, a
            copy is stored in <strong>your own Google Drive</strong>, under your
            control — we do not hold a copy on our servers and cannot access it.
            See the <Link href="/privacy">Privacy Policy</Link> for full detail
            on what we do and don&apos;t access.
          </li>
          <li>
            <strong>You are responsible for backing up your data.</strong> If you
            do not enable Google Drive backup, and your device is lost, damaged,
            factory-reset, or the app is uninstalled, your local shop data may be
            permanently lost. We are not able to recover data that only ever
            existed on your device.
          </li>
          <li>
            Because we do not hold your shop data, we cannot restore it for you if
            it is lost on your end.
          </li>
        </ul>

        <h2>Subscriptions</h2>
        <ul>
          <li>
            Some features or shops may require an active subscription.
            Subscription status is managed on our backend and is currently
            regulated manually by us — there is no automated in-app payment
            processor at this time.
          </li>
          <li>
            We will let you know, through the app or by contacting the email
            associated with your account, if your subscription status changes in a
            way that affects your access.
          </li>
          <li>
            We may introduce paid plans, change pricing, or change what a
            subscription includes in the future. If we do, we&apos;ll make a
            reasonable effort to notify active users before changes take effect.
          </li>
        </ul>

        <h2>Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>
            Use the app for any unlawful purpose, or to record or facilitate
            transactions you know to be fraudulent.
          </li>
          <li>
            Attempt to gain unauthorized access to another business&apos;s
            account, shop data, or backend systems.
          </li>
          <li>
            Interfere with or disrupt the backend service (e.g. attempting to
            overload, scrape, or reverse-engineer it beyond what&apos;s needed for
            your own normal use).
          </li>
          <li>Misrepresent your identity when creating an account or adding staff.</li>
        </ul>
        <p>We may suspend or terminate access for accounts that violate these terms.</p>

        <h2>No Warranty</h2>
        <p>
          Kobook is provided <strong>&ldquo;as is&rdquo;</strong> and{" "}
          <strong>&ldquo;as available.&rdquo;</strong> It is a tool to help you
          track your shop&apos;s inventory and sales — it is not accounting, tax,
          or legal advice, and we do not guarantee it is free of bugs or
          interruptions. You are responsible for verifying figures (profit, stock
          levels, credit balances) that matter for real business or tax decisions
          before relying on them.
        </p>
        <p>
          We do not guarantee uninterrupted or error-free operation of the
          backend service (account sign-in, multi-shop sync, staff identity
          sync). The core day-to-day recording features are designed to keep
          working offline regardless of backend availability.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Olowodarey is not liable for
          any indirect, incidental, or consequential damages arising from your
          use of the app, including but not limited to lost profits, lost data
          (where you have not enabled or maintained a backup), or business
          interruption. Our total liability for any claim relating to the app is
          limited to the amount you paid us, if any, in the 12 months before the
          claim arose.
        </p>
        <p>
          Nothing in these Terms limits liability that cannot be limited under
          applicable law.
        </p>

        <h2>Termination</h2>
        <ul>
          <li>
            You may stop using the app at any time, and may request deletion of
            your account-level data (business name, subscription, staff email
            identities) by contacting us at{" "}
            <a href="mailto:olowodarey@gmail.com">olowodarey@gmail.com</a>.
          </li>
          <li>
            We may suspend or terminate your account if you violate these Terms,
            or if needed to protect the service or other users.
          </li>
          <li>
            Termination does not delete data stored locally on your device or in
            your own Google Drive — that remains under your control.
          </li>
        </ul>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Changes will be posted on
          this page with an updated &ldquo;Last updated&rdquo; date. Continued use
          of the app after changes take effect means you accept the updated
          Terms.
        </p>

        <h2>Contact Us</h2>
        <p>If you have questions about these Terms, contact:</p>
        <p>
          Olowodarey
          <br />
          Email: <a href="mailto:olowodarey@gmail.com">olowodarey@gmail.com</a>
        </p>
      </article>
    </main>
  );
}
