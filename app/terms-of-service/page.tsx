import type { Metadata } from "next"
import Link from "next/link"

const effectiveDate = "June 8, 2025"
const contactEmail = "legal@vaultproductions.ai"

export const metadata: Metadata = {
  metadataBase: new URL("https://vaultgamesstudio.com"),
  title: {
    absolute: "Terms of Service | Vault Productions",
  },
  description:
    "Terms of Service for Vault Productions games, applications, websites, AI creative tools, and related services.",
  authors: [{ name: "Vault Productions" }],
  creator: "Vault Productions",
  publisher: "Vault Productions",
  keywords: ["Vault Productions", "Vault Games Studio", "terms of service", "games", "AI creative studio"],
  alternates: {
    canonical: "https://vaultgamesstudio.com/terms-of-service/",
  },
  openGraph: {
    type: "website",
    url: "https://vaultgamesstudio.com/terms-of-service/",
    siteName: "Vault Productions",
    title: "Terms of Service | Vault Productions",
    description:
      "Terms of Service for Vault Productions games, applications, websites, AI creative tools, and related services.",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service | Vault Productions",
    description:
      "Terms of Service for Vault Productions games, applications, websites, AI creative tools, and related services.",
  },
}

const accountRequirements = [
  "Provide accurate, current, and complete information during registration",
  "Maintain and promptly update your account information",
  "Keep your password confidential and not share your account with others",
  "Notify us immediately of any unauthorized access or security breach",
  "Accept responsibility for all activities that occur under your account",
]

const licenseRestrictions = [
  "Use the Services for any commercial purpose without our prior written consent",
  "Copy, reproduce, distribute, or create derivative works from our Services or content without authorization",
  "Use cheats, exploits, automation software, bots, hacks, mods, or unauthorized third-party software to modify or interfere with the Services",
  "Attempt to gain unauthorized access to our systems, networks, or other users' accounts",
  "Reverse engineer, decompile, disassemble, or otherwise attempt to derive source code from our Services",
  "Disrupt, overburden, or impair servers or networks connected to the Services",
  "Post or transmit content that is abusive, defamatory, obscene, threatening, or otherwise objectionable",
  "Infringe upon the intellectual property rights or privacy rights of Vault Productions or any third party",
  "Solicit or collect personal information from other users",
  "Use the Services in any way that violates applicable laws or regulations",
]

const virtualItems = [
  "You have no ownership or property interest in any virtual items or game assets",
  "Virtual items have no monetary value and cannot be transferred, exchanged, or redeemed for real currency",
  "Vault Productions may modify, manage, or eliminate virtual items at any time without liability",
]

const terminationEffects = [
  "Your license to use the Services immediately ends",
  "You may lose access to your account, progress, and any associated content",
  "We are under no obligation to provide refunds or compensation",
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

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        <header className="border-b border-border pb-8">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest text-primary">
            Vault Productions
          </Link>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Effective Date: {effectiveDate}
          </p>
        </header>

        <div className="space-y-10 py-10 leading-7 text-muted-foreground">
          <section>
            <p>
              These Terms of Service ("Terms") govern your relationship with Vault Productions ("Vault Productions," "we," "us," or "our") and your access to and use of our games, applications, websites, AI creative tools, and related services (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
            </p>
            <p className="mt-4 font-semibold uppercase text-foreground">
              Please read these Terms carefully before using our Services. If you do not agree to these Terms, do not install, access, or use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">1. Eligibility and Account Registration</h2>
            <h3 className="mt-6 text-lg font-bold text-foreground">1.1 Age Requirements</h3>
            <p className="mt-3">
              You must be at least 13 years old to use our Services. If you are between 13 and 17 years old, your parent or legal guardian must review and agree to these Terms on your behalf. By using the Services, you represent that you meet the applicable age requirements.
            </p>
            <h3 className="mt-6 text-lg font-bold text-foreground">1.2 Account Creation</h3>
            <p className="mt-3">To access certain features, you may be required to create an account. You agree to:</p>
            <BulletList items={accountRequirements} />
            <p className="mt-4">
              Vault Productions reserves the right to refuse registration, terminate accounts, or remove usernames at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">2. License to Use the Services</h2>
            <h3 className="mt-6 text-lg font-bold text-foreground">2.1 Grant of License</h3>
            <p className="mt-3">
              Subject to your compliance with these Terms, Vault Productions grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Services for personal, non-commercial entertainment and creative purposes only.
            </p>
            <h3 className="mt-6 text-lg font-bold text-foreground">2.2 License Restrictions</h3>
            <p className="mt-3">You agree that you will not:</p>
            <BulletList items={licenseRestrictions} />
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">3. Ownership and Intellectual Property</h2>
            <h3 className="mt-6 text-lg font-bold text-foreground">3.1 Vault Productions' Content</h3>
            <p className="mt-3">
              All rights, title, and interest in and to the Services, including games, software, code, themes, characters, stories, artwork, animations, audio, and all associated intellectual property, are owned by Vault Productions. We reserve all rights not expressly granted in these Terms. Nothing in these Terms transfers ownership of any Vault Productions content to you.
            </p>
            <h3 className="mt-6 text-lg font-bold text-foreground">3.2 Virtual Items and In-Game Assets</h3>
            <p className="mt-3">If our Services include virtual currency, in-game items, or other digital assets, you acknowledge that:</p>
            <BulletList items={virtualItems} />
            <h3 className="mt-6 text-lg font-bold text-foreground">3.3 User-Generated Content</h3>
            <p className="mt-3">
              If you create, upload, or share content through our Services ("User Content"), you retain ownership of your original content. By submitting User Content, you grant Vault Productions a worldwide, irrevocable, perpetual, royalty-free license to use, reproduce, modify, publish, distribute, and display such content in connection with our Services and business operations.
            </p>
            <p className="mt-4">
              You represent and warrant that your User Content does not violate any law, infringe any third-party rights, or contain harmful or malicious material.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">4. Purchases and Payments</h2>
            <h3 className="mt-6 text-lg font-bold text-foreground">4.1 In-App Purchases</h3>
            <p className="mt-3">
              Our Services may offer purchases of virtual currency, in-game items, premium features, or other digital goods. All purchases are subject to applicable platform terms, such as Apple App Store or Google Play Store terms, and these Terms.
            </p>
            <h3 className="mt-6 text-lg font-bold text-foreground">4.2 No Refunds</h3>
            <p className="mt-3 font-semibold uppercase text-foreground">
              All purchases are final and non-refundable, except as required by applicable law or platform policies. Vault Productions is not required to provide refunds or compensation for virtual items or Services that are discontinued, modified, or terminated.
            </p>
            <h3 className="mt-6 text-lg font-bold text-foreground">4.3 Pricing</h3>
            <p className="mt-3">
              We reserve the right to change pricing for goods and services at any time. Any price changes will not affect purchases already completed.
            </p>
          </section>

          {[
            ["5. Updates and Changes to the Services", "Vault Productions may update, modify, suspend, or discontinue the Services or any part thereof at any time, with or without notice. We may require you to update our applications to continue using the Services. We are not liable to you or any third party for any modification, suspension, or discontinuation of the Services."],
            ["6. Third-Party Services and Links", "Our Services may integrate with or contain links to third-party services, platforms, or content. Vault Productions is not responsible for the availability, accuracy, or practices of any third-party service. Your use of third-party services is at your own risk and subject to their respective terms and policies."],
          ].map(([title, body]) => (
            <section key={title}>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
              <p className="mt-3">{body}</p>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">7. Termination and Suspension</h2>
            <p className="mt-3">
              Vault Productions reserves the right to suspend or terminate your account and access to the Services at any time, with or without cause, including for violation of these Terms. Upon termination:
            </p>
            <BulletList items={terminationEffects} />
            <p className="mt-4">You may terminate your account at any time by contacting us at {contactEmail}.</p>
          </section>

          {[
            ["8. Disclaimer of Warranties", "The Services are provided on an as-is and as-available basis without warranties of any kind, either express or implied, including warranties of merchantability, fitness for a particular purpose, title, and non-infringement. Vault Productions does not warrant that the Services will be uninterrupted, error-free, secure, or free of harmful components."],
            ["9. Limitation of Liability", "To the fullest extent permitted by applicable law, Vault Productions shall not be liable for any indirect, incidental, consequential, special, punitive, or exemplary damages, including loss of revenue, profits, data, or business interruption, arising from or related to your use of or inability to use the Services. To the extent Vault Productions is found liable, our total liability to you shall not exceed the greater of the amount you paid to Vault Productions in the six months preceding the claim or one hundred U.S. dollars (USD $100)."],
            ["10. Indemnification", "You agree to indemnify, defend, and hold harmless Vault Productions and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising from your use of the Services, your User Content, or your violation of these Terms."],
            ["11. Governing Law and Dispute Resolution", "These Terms are governed by the laws of the State of North Carolina, United States, without regard to conflict of law principles. You agree that any dispute arising from or related to these Terms or the Services shall be resolved exclusively in the courts located in Wake County, North Carolina, USA. If a dispute arises, we encourage you to first contact us directly at legal@vaultproductions.ai to seek an informal resolution."],
            ["12. Severability", "If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it enforceable, and the remaining provisions of these Terms shall remain in full force and effect."],
            ["13. Entire Agreement", "These Terms, together with our Privacy Policy and any supplemental policies or guidelines we publish, constitute the entire agreement between you and Vault Productions with respect to the Services and supersede all prior agreements, representations, and understandings."],
            ["14. Changes to These Terms", "We may update these Terms from time to time. We will notify you of material changes by posting the revised Terms within the Services or on our website and updating the effective date. Your continued use of the Services after changes are posted constitutes your acceptance of the revised Terms."],
          ].map(([title, body]) => (
            <section key={title}>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
              <p className="mt-3">{body}</p>
            </section>
          ))}

          <section className="rounded-lg border border-primary/25 bg-primary/5 p-6">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">15. Contact Us</h2>
            <p className="mt-4">If you have any questions about these Terms of Service, please contact us at:</p>
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
            <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </main>
  )
}
