import type { Metadata } from "next"
import Link from "next/link"

const effectiveDate = "June 8, 2025"
const contactEmail = "legal@vaultproductions.ai"

export const metadata: Metadata = {
  metadataBase: new URL("https://vaultgamesstudio.com"),
  title: {
    absolute: "Privacy Policy | Vault Productions",
  },
  description:
    "Privacy Policy for Vault Productions games, applications, websites, AI creative tools, and related services.",
  authors: [{ name: "Vault Productions" }],
  creator: "Vault Productions",
  publisher: "Vault Productions",
  keywords: ["Vault Productions", "Vault Games Studio", "privacy policy", "games", "AI creative studio"],
  alternates: {
    canonical: "https://vaultgamesstudio.com/privacy-policy/",
  },
  openGraph: {
    type: "website",
    url: "https://vaultgamesstudio.com/privacy-policy/",
    siteName: "Vault Productions",
    title: "Privacy Policy | Vault Productions",
    description:
      "Privacy Policy for Vault Productions games, applications, websites, AI creative tools, and related services.",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Vault Productions",
    description:
      "Privacy Policy for Vault Productions games, applications, websites, AI creative tools, and related services.",
  },
}

const providedDirectly = [
  "Account registration details, including name, email address, username, and password",
  "Profile information and preferences",
  "Communications you send us, including support requests and feedback",
  "Payment and billing information when you make purchases",
  "Any content you create, upload, or share through our Services",
]

const collectedAutomatically = [
  "Device identifiers and technical information, including device type, operating system, and browser type",
  "Usage data, including gameplay statistics, session duration, features accessed, and in-app actions",
  "Log data, including IP address, access times, pages viewed, and errors",
  "Cookies and similar tracking technologies",
  "Analytics data to understand how users interact with our Services",
]

const thirdPartySources = [
  "Social networking platforms, such as Google, Apple, or Facebook, if you choose to connect them",
  "App stores and platform providers",
  "Third-party analytics and advertising partners",
  "Other users who interact with you through our Services",
]

const uses = [
  "Provide, operate, and improve our Services and games",
  "Create and manage your account",
  "Process transactions and send related information",
  "Send service-related communications, including updates, security alerts, and support messages",
  "Personalize your experience and deliver relevant content",
  "Analyze usage patterns to enhance gameplay and user experience",
  "Detect, prevent, and respond to fraud, abuse, and security incidents",
  "Comply with legal obligations and enforce our terms",
  "Develop new features, products, and services",
]

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 pl-5 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="list-disc leading-7">
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        <header className="border-b border-border pb-8">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest text-primary">
            Vault Productions
          </Link>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Effective Date: {effectiveDate}
          </p>
        </header>

        <div className="space-y-10 py-10 leading-7 text-muted-foreground">
          <section>
            <p>
              This Privacy Policy describes how Vault Productions ("Vault Productions," "we," "us," or "our") collects, uses, and shares information about you when you use our games, applications, websites, and related services (collectively, the "Services"). By accessing or using our Services, you agree to the practices described in this Privacy Policy.
            </p>
            <p className="mt-4">
              Vault Productions is an AI creative studio and game development company headquartered in Cary, North Carolina, USA. Our Services include mobile and PC games, AI-powered creative tools, interactive experiences, and any associated online platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">1. Information We Collect</h2>
            <h3 className="mt-6 text-lg font-bold text-foreground">1.1 Information You Provide Directly</h3>
            <p className="mt-3">We collect information you voluntarily provide, including:</p>
            <BulletList items={providedDirectly} />

            <h3 className="mt-6 text-lg font-bold text-foreground">1.2 Information Collected Automatically</h3>
            <p className="mt-3">When you use our Services, we automatically collect:</p>
            <BulletList items={collectedAutomatically} />

            <h3 className="mt-6 text-lg font-bold text-foreground">1.3 Information from Third Parties</h3>
            <p className="mt-3">We may receive information about you from:</p>
            <BulletList items={thirdPartySources} />
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">2. How We Use Your Information</h2>
            <p className="mt-3">We use the information we collect to:</p>
            <BulletList items={uses} />
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">3. How We Share Your Information</h2>
            <p className="mt-3">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <h3 className="mt-6 text-lg font-bold text-foreground">3.1 Service Providers</h3>
            <p className="mt-3">
              We share information with trusted third-party vendors who assist us in operating our Services, including cloud hosting providers, analytics services, customer support platforms, payment processors, and advertising networks. These parties are contractually obligated to protect your information and may only use it to provide services to us.
            </p>
            <h3 className="mt-6 text-lg font-bold text-foreground">3.2 Platform Partners</h3>
            <p className="mt-3">
              Our games and applications may integrate with third-party platforms such as app stores, social networks, and streaming services. Please review their privacy policies, as we are not responsible for their data practices.
            </p>
            <h3 className="mt-6 text-lg font-bold text-foreground">3.3 Legal Requirements</h3>
            <p className="mt-3">
              We may disclose your information if required by law, regulation, legal process, or governmental request, or when we believe disclosure is necessary to protect the rights, property, or safety of Vault Productions, our users, or others.
            </p>
            <h3 className="mt-6 text-lg font-bold text-foreground">3.4 Business Transfers</h3>
            <p className="mt-3">
              In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have.
            </p>
            <h3 className="mt-6 text-lg font-bold text-foreground">3.5 With Your Consent</h3>
            <p className="mt-3">We may share your information for other purposes with your explicit consent.</p>
          </section>

          {[
            ["4. Data Retention", "We retain your information for as long as necessary to provide our Services, comply with legal obligations, resolve disputes, and enforce our agreements. When you delete your account, we will delete or anonymize your personal information within a reasonable period, except where retention is required by law."],
          ].map(([title, body]) => (
            <section key={title}>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
              <p className="mt-3">{body}</p>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">5. Your Rights and Choices</h2>
            <h3 className="mt-6 text-lg font-bold text-foreground">5.1 Account Information</h3>
            <p className="mt-3">
              You may access, update, or correct your account information at any time through your account settings. You may request deletion of your account by contacting us at the details below.
            </p>
            <h3 className="mt-6 text-lg font-bold text-foreground">5.2 Communications</h3>
            <p className="mt-3">
              You may opt out of marketing communications at any time by following the unsubscribe instructions in any email or by contacting us. You will still receive essential service-related communications.
            </p>
            <h3 className="mt-6 text-lg font-bold text-foreground">5.3 Cookies</h3>
            <p className="mt-3">
              You may control cookie preferences through your browser settings. Note that disabling cookies may affect some features of our Services.
            </p>
            <h3 className="mt-6 text-lg font-bold text-foreground">5.4 California Residents</h3>
            <p className="mt-3">
              If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know, delete, and opt out of the sale of personal information. We do not sell personal information. To exercise your rights, contact us at the information below.
            </p>
            <h3 className="mt-6 text-lg font-bold text-foreground">5.5 EU/EEA Residents</h3>
            <p className="mt-3">
              If you are located in the European Union or European Economic Area, you may have rights under the General Data Protection Regulation (GDPR), including rights of access, rectification, erasure, restriction of processing, data portability, and objection. Contact us to exercise these rights.
            </p>
          </section>

          {[
            ["6. Children's Privacy", "Our Services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child under 13, please contact us immediately and we will take steps to delete such information. If you are between 13 and 17, you represent that your parent or legal guardian has reviewed and agreed to this Privacy Policy."],
            ["7. Data Security", "We implement reasonable technical, administrative, and physical security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security."],
            ["8. International Data Transfers", "Vault Productions operates from the United States. If you are located outside the United States, your information will be transferred to and processed in the United States, which may have different data protection laws than your jurisdiction. By using our Services, you consent to this transfer."],
            ["9. Third-Party Links and Services", "Our Services may contain links to third-party websites, applications, or services. We are not responsible for the privacy practices of these third parties, and we encourage you to review their privacy policies before providing any information to them."],
            ["10. Changes to This Privacy Policy", "We may update this Privacy Policy from time to time. We will notify you of material changes by posting the revised policy on our website or within our Services, and updating the effective date. Your continued use of the Services after any changes constitutes your acceptance of the updated policy."],
          ].map(([title, body]) => (
            <section key={title}>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
              <p className="mt-3">{body}</p>
            </section>
          ))}

          <section className="rounded-lg border border-primary/25 bg-primary/5 p-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">11. Contact Us</h2>
            <p className="mt-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <address className="mt-4 not-italic text-foreground">
              Vault Productions
              <br />
              Cary, North Carolina, USA
              <br />
              Email:{" "}
              <a className="font-semibold text-primary underline-offset-4 hover:underline" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              <br />
              Website: www.vaultproductions.ai
            </address>
          </section>

          <nav className="flex flex-wrap gap-4 border-t border-border pt-8 text-sm font-semibold">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </main>
  )
}
