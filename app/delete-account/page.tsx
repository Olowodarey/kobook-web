import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Account — Kobook",
  description:
    "How to request deletion of your Kobook account and associated data.",
};

export default function DeleteAccount() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
      <article className="legal">
        <h1>Delete Your Kobook Account and Data</h1>
        <p className="updated">Last updated: 14 September 2026</p>

        <p>
          This page explains how to request deletion of your{" "}
          <strong>Kobook</strong> account and the data associated with it. Kobook
          is a shop inventory, sales, and business management app operated by
          Olowodarey.
        </p>

        <h2>How to request deletion</h2>
        <p>
          To request that your account and its associated data be deleted, send
          a request using either of the following, from the email address you
          used to sign in to Kobook:
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:olowodarey@gmail.com?subject=Kobook%20account%20deletion%20request">
              olowodarey@gmail.com
            </a>{" "}
            with the subject <em>&ldquo;Account deletion request&rdquo;</em>.
          </li>
          <li>
            WhatsApp:{" "}
            <a href="https://wa.me/2348142293610">+234 814 229 3610</a>.
          </li>
        </ul>
        <p>
          Please include the Google email address associated with your account
          so we can locate and verify it. We will confirm and complete the
          deletion within <strong>30 days</strong> of a verified request.
        </p>

        <h2>What gets deleted</h2>
        <p>
          On a verified request, we permanently delete the account-level data we
          hold on our servers, including:
        </p>
        <ul>
          <li>
            Your account identity — your <strong>name</strong>,{" "}
            <strong>email address</strong>, and <strong>Google account ID</strong>.
          </li>
          <li>
            Your <strong>business(es)/shop(s)</strong> records and{" "}
            <strong>subscription</strong> status held on our servers.
          </li>
          <li>
            Any <strong>staff email identities</strong> you added, and the
            server-side <strong>sync records</strong> for your shops.
          </li>
        </ul>

        <h2>Data stored on your own device</h2>
        <p>
          Your day-to-day shop records (products, sales, stock levels, staff,
          customer credit, expenses) are stored{" "}
          <strong>locally on your own device</strong>, not on our servers. This
          data is removed when you <strong>uninstall the app</strong> or use{" "}
          <em>More → Clear Data</em> inside the app. Any backup you created on{" "}
          <strong>your own Google Drive</strong> remains under your control — you
          can delete it directly from your Google Drive at any time.
        </p>

        <h2>Data we may retain</h2>
        <p>
          We may retain a limited amount of information where required for legal,
          accounting, fraud-prevention, or dispute-resolution purposes, for only
          as long as necessary and in accordance with applicable law. This does
          not include your day-to-day shop records.
        </p>

        <h2>Contact</h2>
        <p>
          Olowodarey
          <br />
          Email: <a href="mailto:olowodarey@gmail.com">olowodarey@gmail.com</a>
          <br />
          WhatsApp: <a href="https://wa.me/2348142293610">+234 814 229 3610</a>
        </p>
      </article>
    </main>
  );
}
