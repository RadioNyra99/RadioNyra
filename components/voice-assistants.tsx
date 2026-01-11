"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function VoiceAssistants() {
    const [isOpen, setIsOpen] = useState(false)

    const assistants = [
        {
            name: "Siri",
            image: "/Siri.jpg",
            action: () => setIsOpen(true),
            link: "#"
        },
        {
            name: "Google",
            image: "/Google Assisstance.jpg",
            action: null,
            link: "https://assistant.google.com/services/a/uid/0000000000000000"
        },
        {
            name: "Alexa",
            image: "/Alexa.jpg",
            action: null,
            link: "https://www.amazon.com/dp/B08KQF9KZJ"
        }
    ]

    return (
        <div className="flex flex-wrap items-center justify-center gap-6 py-4">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                {assistants.map((assistant) => (
                    assistant.action ? (
                        <DialogTrigger key={assistant.name} asChild>
                            <button
                                onClick={assistant.action}
                                className="w-16 h-16 rounded-full overflow-hidden shadow-md hover:scale-110 transition-transform duration-300 bg-white"
                                aria-label={`Listen on ${assistant.name}`}
                            >
                                <img
                                    src={assistant.image}
                                    alt={assistant.name}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        </DialogTrigger>
                    ) : (
                        <a
                            key={assistant.name}
                            href={assistant.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-16 h-16 rounded-full overflow-hidden shadow-md hover:scale-110 transition-transform duration-300 bg-white"
                            aria-label={`Listen on ${assistant.name}`}
                        >
                            <img
                                src={assistant.image}
                                alt={assistant.name}
                                className="w-full h-full object-cover"
                            />
                        </a>
                    )
                ))}

                <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-xl border-none shadow-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-center text-2xl font-black uppercase tracking-tighter text-black">
                            🎙 Voice Commands
                        </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6 py-4">
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                                    <img src="/Siri.jpg" alt="Siri" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Siri</h4>
                                    <p className="text-gray-600 text-lg font-medium italic">"Hey Siri, play Radio Nyra"</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                                    <img src="/Google Assisstance.jpg" alt="Google" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Google Assistant</h4>
                                    <p className="text-gray-600 text-lg font-medium italic">"OK Google, play Radio Nyra"</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                                    <img src="/Alexa.jpg" alt="Alexa" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">Amazon Alexa</h4>
                                    <p className="text-gray-600 text-lg font-medium italic">"Alexa, play Radio Nyra"</p>
                                </div>
                            </div>
                        </div>

                        <Button onClick={() => setIsOpen(false)} className="w-full font-bold uppercase tracking-widest bg-primary text-white hover:bg-primary/90" size="lg">
                            Got it
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
