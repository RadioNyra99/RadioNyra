"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Navigation />

            <main className="py-12 md:py-16">
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
                            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4">
                                Privacy Policy
                            </h2>
                            <p className="mb-4">
                                This Privacy Policy is prepared by Radio Nyra USA and whose registered address is 4819 Emperor Blvd, Durham, NC 27703. (“We”) are committed to protecting and preserving the privacy of our visitors when visiting our site or communicating electronically with us.
                            </p>
                            <p>
                                This policy sets out how we process any personal data we collect from you or that you provide to us through our website and social media sites. We confirm that we will keep your information secure and that we will comply fully with all applicable United States of America Data Protection legislation and regulations. Please read the following carefully to understand what happens to personal data that you choose to provide to us, or that we collect from you when you visit our sites. By submitting information you are accepting and consenting to the practices described in this policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4">
                                Types of information we may collect from you
                            </h2>
                            <p className="mb-4">
                                We may collect, store and use the following kinds of personal information about individuals who visit and use our website and social media sites:
                            </p>
                            <p>
                                <strong>Information you supply to us.</strong> You may supply us with information about you by filling in forms on our website or social media. This includes information you provide when you submit a contact/enquiry form. The information you give us may include, but not limited to, your name, address, e-mail address and phone number.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4">
                                How we may use the information we collect
                            </h2>
                            <p className="mb-4">
                                We use the information in the following ways:
                            </p>
                            <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                                <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-3">Information you supply to us</h3>
                                <p className="mb-4">We will use this information:</p>
                                <ul className="space-y-3 pl-4">
                                    <li className="flex gap-3">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                                        <span>to provide you with information and/or services that you request from us;</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
                                        <span>To contact you to provide the information requested.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4">
                                Disclosure of your information
                            </h2>
                            <p className="mb-4">
                                Any information you provide to us will either be emailed directly to us or may be stored on a secure server.
                            </p>
                            <p className="mb-4">
                                We do not rent, sell or share personal information about you with other people or non-affiliated companies.
                            </p>
                            <p className="mb-4">
                                We will use all reasonable efforts to ensure that your personal data is not disclosed to regional/national institutions and authorities, unless required by law or other regulations.
                            </p>
                            <p className="italic text-sm">
                                Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorized access.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4">
                                Your rights – access to your personal data
                            </h2>
                            <p className="mb-4">
                                You have the right to ensure that your personal data is being processed lawfully (“Subject Access Right”). Your subject access right can be exercised in accordance with data protection laws and regulations. Any subject access request must be made in writing to Ravi Cherukuri. We will provide your personal data to you within the statutory time frames. To enable us to trace any of your personal data that we may be holding, we may need to request further information from you. If you have a complaint about how we have used your information, you have the right to complain to the Information Commissioner’s Office (ICO).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4">
                                Changes to our privacy policy
                            </h2>
                            <p>
                                Any changes we may make to our privacy policy in the future will be posted on this page and, where appropriate, notified to you by email. Please check back frequently to see any updates or changes to our privacy policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground mb-4">
                                Contact
                            </h2>
                            <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg mt-6">
                                <p className="mb-4 font-bold text-foreground">
                                    Questions, comments and requests regarding this privacy policy are welcomed and should be addressed to Radio Nyra Support at <a href="mailto:info@radionyra.com" className="text-primary hover:underline">info@radionyra.com</a>
                                </p>
                            </div>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
