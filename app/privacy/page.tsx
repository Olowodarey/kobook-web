import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Kobook",
  description:
    "How Kobook accesses and protects your information. Your shop's business data belongs to you and stays with you.",
};

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
      <article className="legal">
        <h1>Privacy Policy for Kobook</h1>
        <p className="updated">Last updated: 6 September 2026</p>

        <h2>Introduction</h2>
        <p>
          Kobook (&ldquo;the app&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a
          shop inventory, sales, and business management application for small
          retail shop owners. This Privacy Policy explains what information the
          app accesses, how it is used, and the choices you have. It applies to
          the Kobook mobile application operated by Olowodarey.
        </p>
        <p>
          The guiding principle of Kobook is that{" "}
          <strong>
            your shop&apos;s business data belongs to you and stays with you.
          </strong>{" "}
          The day-to-day records you create (products, sales, stock levels,
          staff, customer credit, expenses) are stored on your own device and,
          when you choose, backed up to <strong>your own Google Drive</strong> —
          not to us.
        </p>

        <h2>Information We Access and Why</h2>

        <h3>1. Google Account information (via Google Sign-In)</h3>
        <p>
          When you set up a business account or join a shop as staff, you sign in
          with Google. We receive, from Google:
        </p>
        <ul>
          <li>Your <strong>name</strong></li>
          <li>Your <strong>email address</strong></li>
          <li>Your <strong>Google account ID</strong> (a stable identifier)</li>
        </ul>
        <p>
          <strong>How we use it:</strong> solely to create and identify your
          account — to know which business(es) you own or which shop you are
          staff at, and to manage your subscription status. We do{" "}
          <strong>not</strong> use it for advertising and we do{" "}
          <strong>not</strong> sell it.
        </p>

        <h3>2. Google Drive access (drive.file scope)</h3>
        <p>
          If you enable backup, the app requests the <strong>drive.file</strong>{" "}
          permission. This is the most limited Google Drive permission
          available: it allows the app to see and manage{" "}
          <strong>only the files the app itself creates</strong> in your Drive.
          It does <strong>not</strong> allow the app to see, read, or access any
          of your other Google Drive files, folders, photos, or documents.
        </p>
        <p>
          <strong>How we use it:</strong> to create and update a single backup
          file of your shop&apos;s data inside a folder named{" "}
          <strong>&ldquo;Kobook Backups&rdquo;</strong> in <em>your own</em>{" "}
          Google Drive. This backup exists so that if your device is lost,
          damaged, or replaced, you can restore your business records. The backup
          is stored in your Drive, under your Google account, controlled by you.
          Olowodarey has <strong>no access</strong> to this backup and cannot
          read your shop data through it.
        </p>

        <h3>3. Business and shop data</h3>
        <p>
          The core records you create in the app — products, categories, sales,
          stock movements, staff members and their PINs, customer credit,
          supplier credit, damaged stock, returns, expenses, and cash
          reconciliation — are stored <strong>locally on your device</strong> in
          the app&apos;s own database. Daily operation works fully offline and
          does not send this data to us.
        </p>
        <p>
          Limited account-level information is stored on our servers to run the
          service: your business name(s), subscription status, and — if you
          choose to add a staff member&apos;s email — that staff member&apos;s
          name and email, so the same person can be recognized across your shops.
          We do <strong>not</strong> store your products, sales, inventory,
          customers, or financial records on our servers.
        </p>

        <h3>4. Staff PINs</h3>
        <p>
          Staff log in to the app on the shop&apos;s device using a numeric PIN.
          PINs are stored <strong>only on the device</strong>, in a hashed and
          salted form — never in plain text, and never transmitted to our servers
          or to Google.
        </p>

        <h2>How Your Information Is Stored and Protected</h2>
        <ul>
          <li>
            <strong>On your device:</strong> business data is stored in the
            app&apos;s local database. Your backend login token is stored in your
            device&apos;s encrypted secure storage (Keychain/Keystore).
          </li>
          <li>
            <strong>On our servers:</strong> account and subscription data is
            stored on our hosted backend (Railway/PostgreSQL). Access is
            restricted and protected by authentication.
          </li>
          <li>
            <strong>In your Google Drive:</strong> backups are stored under your
            own Google account, protected by Google&apos;s security and your
            Google credentials.
          </li>
        </ul>
        <p>
          We take reasonable measures to protect information, but no method of
          electronic storage is completely secure.
        </p>

        <h2>Data Sharing</h2>
        <p>
          We do <strong>not</strong> sell, rent, or trade your personal
          information or your business data. We do not share it with third
          parties for their own marketing.
        </p>
        <p>The only third parties involved are:</p>
        <ul>
          <li>
            <strong>Google</strong> — for sign-in and, if you enable it, Drive
            backup, under{" "}
            <a href="https://policies.google.com/privacy">
              Google&apos;s Privacy Policy
            </a>
            .
          </li>
          <li>
            <strong>Our hosting provider</strong> — which stores the
            account-level data described above on our behalf.
          </li>
        </ul>

        <h2>Your Choices and Rights</h2>
        <ul>
          <li>
            <strong>Backup is optional.</strong> You can use the app without ever
            granting Google Drive access; you simply won&apos;t have an automatic
            cloud backup.
          </li>
          <li>
            <strong>You can revoke Google Drive access</strong> at any time from
            your Google Account settings (myaccount.google.com → Security →
            Third-party access), or by deleting the &ldquo;Kobook Backups&rdquo;
            folder in your Drive.
          </li>
          <li>
            <strong>You can request deletion</strong> of your account and the
            account-level data we hold (business name, subscription, staff email
            identities) by contacting us at{" "}
            <a href="mailto:olowodarey@gmail.com">olowodarey@gmail.com</a>.
          </li>
          <li>
            <strong>Your local data</strong> is removed when you uninstall the
            app or use the app&apos;s &ldquo;clear data&rdquo; function (this does
            not delete your Drive backup, which remains under your control).
          </li>
        </ul>

        <h2>Google API Services — Limited Use Disclosure</h2>
        <p>
          Kobook&apos;s use of information received from Google APIs adheres to
          the{" "}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </a>
          , including the <strong>Limited Use</strong> requirements.
          Specifically, information obtained through Google Drive (drive.file) is
          used <strong>only</strong> to provide and improve the backup feature
          described above; it is <strong>not</strong> transferred to others
          except as necessary to provide that feature, is <strong>not</strong>{" "}
          used for advertising, and is <strong>not</strong> read by humans except
          with your explicit permission or as required for security or legal
          reasons.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          Kobook is a business tool intended for use by adults operating a shop.
          It is not directed at children under 13, and we do not knowingly
          collect information from them.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated &ldquo;Last updated&rdquo; date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or your data, contact:
        </p>
        <p>
          Olowodarey
          <br />
          Email: <a href="mailto:olowodarey@gmail.com">olowodarey@gmail.com</a>
        </p>
      </article>
    </main>
  );
}
