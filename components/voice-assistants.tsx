"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function VoiceAssistants() {
    const [openAssistant, setOpenAssistant] = useState<string | null>(null)

    const assistants = [
        {
            name: "Alexa",
            displayName: "Alexa",
            image: "/Alexa.jpg",
            command: "Alexa, play Radio Nyra",
            popupTitle: "Listen on Alexa"
        },
        {
            name: "Google",
            displayName: "Google Assistant",
            image: "/Google Assisstance.jpg",
            command: "OK Google, play Radio Nyra",
            popupTitle: "Listen on Google Assistant"
        },
        {
            name: "Siri",
            displayName: "Siri",
            image: "/Siri.jpg",
            command: "Hey Siri, play Radio Nyra",
            popupTitle: "Listen using Siri"
        }
    ]

    return (
        <div className="flex flex-wrap items-center justify-center gap-6 py-4">
            {assistants.map((assistant) => (
                <Dialog key={assistant.name} open={openAssistant === assistant.name} onOpenChange={(open) => setOpenAssistant(open ? assistant.name : null)}>
                    <DialogTrigger asChild>
                        <button
                            className="w-16 h-16 rounded-full overflow-hidden shadow-md hover:scale-110 transition-transform duration-300 bg-white"
                            aria-label={assistant.popupTitle}
                        >
                            <img
                                src={assistant.image}
                                alt={assistant.name}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-xl border-none shadow-2xl">
                        <DialogHeader>
                            <DialogTitle className="text-center text-2xl font-black uppercase tracking-tighter text-black">
                                {assistant.popupTitle}
                            </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6 py-4">
                            <div className="space-y-4">
                                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center gap-4">
                                    <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg">
                                        <img src={assistant.image} alt={assistant.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-xl">{assistant.displayName}</h4>
                                        <p className="text-primary text-2xl font-black italic mt-2">"{assistant.command}"</p>
                                    </div>
                                </div>
                            </div>

                            <Button onClick={() => setOpenAssistant(null)} className="w-full font-bold uppercase tracking-widest bg-primary text-white hover:bg-primary/90" size="lg">
                                Got it
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    )
}
