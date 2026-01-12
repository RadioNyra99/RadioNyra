"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Header */}
                    <div className="mb-12 border-b border-border/40 pb-8">
                        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Legal</p>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground mb-4">Privacy Policy</h1>
                        <p className="text-muted-foreground text-sm font-mono uppercase tracking-wider">Last Updated: {new Date().toLocaleDateString()}</p>
                    </div>

                    {/* Content */}
                    <div className="space-y-12 text-lg text-muted-foreground leading-relaxed">

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                                <span className="text-primary">01.</span> Introduction
                            </h2>
                            <p className="mb-4">
                                Welcome to Radio Nyra ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at <a href="mailto:info@radionyra.com" className="text-primary hover:underline">info@radionyra.com</a>.
                            </p>
                            <p>
                                When you visit our website <strong>radionyra.com</strong> (the "Website"), use our mobile application (the "App"), and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                                <span className="text-primary">02.</span> Information We Collect
                            </h2>
                            <p className="mb-4">
                                We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Website or App or otherwise contacting us.
                            </p>

                            <div className="bg-muted/30 p-6 rounded-lg border border-border/50 mt-6">
                                <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-3">Mobile Application Data</h3>
                                <p className="mb-4 text-sm">When you use our App, we may also process the following information if you grant us access or permission:</p>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                                        <span><strong>Mobile Device Access:</strong> We may request access or permission to certain features from your mobile device, including bluetooth, and other features. If you wish to change our access or permissions, you may do so in your device's settings.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                                        <span><strong>Push Notifications:</strong> We may request to send you push notifications regarding your account or certain features of the App. If you wish to opt-out from receiving these types of communications, you may turn them off in your device's settings.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                                <span className="text-primary">03.</span> How We Use Your Information
                            </h2>
                            <p className="mb-6">
                                We use personal information collected via our Website/App for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-3 text-sm">
                                {[
                                    "Facilitate account creation and logon process",
                                    "Send marketing and promotional communications",
                                    "Send administrative information",
                                    "Fulfill and manage orders",
                                    "Deliver targeted advertising",
                                    "Administer surveys and prize draws",
                                    "Enable user-to-user communications",
                                    "Enforce terms, conditions and policies"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-foreground/80 font-medium">
                                        <span className="text-primary text-xs">●</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                                <span className="text-primary">04.</span> Sharing Your Information
                            </h2>
                            <p>
                                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                                <span className="text-primary">05.</span> Third-Party Websites
                            </h2>
                            <p>
                                The Website and App may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services or mobile applications. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy policy. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services or applications that may be linked to or from the Website or App. You should review the policies of such third parties and contact them directly to respond to your questions.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4 flex items-center gap-2">
                                <span className="text-primary">06.</span> Contact Us
                            </h2>
                            <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg mt-6">
                                <p className="mb-4 font-bold text-foreground">
                                    If you have questions or comments about this policy, you may email us at <a href="mailto:info@radionyra.com" className="text-primary hover:underline">info@radionyra.com</a> or by post to:
                                </p>
                                <address className="not-italic text-foreground font-mono uppercase tracking-widest text-sm">
                                    Radio Nyra<br />
                                    Raleigh - Durham<br />
                                    NC, USA
                                </address>
                            </div>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
