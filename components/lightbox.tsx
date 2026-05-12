"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface LightboxProps {
    isOpen: boolean
    onClose: () => void
    images: string[]
    currentIndex: number
    onNavigate: (index: number) => void
}

export function Lightbox({ isOpen, onClose, images, currentIndex, onNavigate }: LightboxProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    if (!isOpen) return null

    const handlePrevious = () => {
        onNavigate((currentIndex - 1 + images.length) % images.length)
    }

    const handleNext = () => {
        onNavigate((currentIndex + 1) % images.length)
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 transition-all duration-300">
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
                <X className="w-8 h-8" />
            </button>

            <button
                onClick={handlePrevious}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors hidden md:block"
            >
                <ChevronLeft className="w-12 h-12" />
            </button>

            <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center">
                <img
                    src={images[currentIndex]}
                    alt={`Gallery image ${currentIndex + 1}`}
                    className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm"
                />
                <div className="mt-4 text-white/70 font-bold uppercase tracking-widest text-[10px]">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            <button
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors hidden md:block"
            >
                <ChevronRight className="w-12 h-12" />
            </button>

            {/* Mobile Navigation */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-12 md:hidden">
                <button
                    onClick={handlePrevious}
                    className="text-white/70 hover:text-white transition-colors"
                >
                    <ChevronLeft className="w-10 h-10" />
                </button>
                <button
                    onClick={handleNext}
                    className="text-white/70 hover:text-white transition-colors"
                >
                    <ChevronRight className="w-10 h-10" />
                </button>
            </div>
        </div>
    )
}
