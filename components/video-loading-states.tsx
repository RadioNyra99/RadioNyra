"use client"

import React from "react";
import { Youtube, AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Video Card Skeleton ─────────────────────────────────────────────
export function VideoCardSkeleton() {
    return (
        <div className="bg-card border border-border/60 rounded-2xl overflow-hidden animate-pulse flex flex-col h-full">
            {/* Thumbnail skeleton */}
            <div className="aspect-video w-full bg-muted/60 relative">
                <div className="absolute top-3 left-3">
                    <div className="w-16 h-4 rounded bg-muted/80" />
                </div>
                <div className="absolute bottom-3 right-3">
                    <div className="w-10 h-4 rounded bg-muted/80" />
                </div>
            </div>
            {/* Content skeleton */}
            <div className="p-5 flex flex-col flex-1 gap-3">
                <div className="flex items-center gap-3">
                    <div className="w-16 h-3 rounded bg-muted/60" />
                    <div className="w-3 h-3 rounded-full bg-muted/40" />
                    <div className="w-14 h-3 rounded bg-muted/60" />
                </div>
                <div className="space-y-2">
                    <div className="w-full h-4 rounded bg-muted/70" />
                    <div className="w-3/4 h-4 rounded bg-muted/50" />
                </div>
                <div className="w-full h-3 rounded bg-muted/40 mt-1" />
                <div className="w-2/3 h-3 rounded bg-muted/30" />
                {/* Button skeleton */}
                <div className="flex items-center gap-2 pt-3 border-t border-border/40 mt-auto">
                    <div className="flex-1 h-10 rounded-xl bg-muted/50" />
                    <div className="w-10 h-10 rounded-xl bg-muted/40" />
                </div>
            </div>
        </div>
    );
}

// ─── Video Grid Skeleton ─────────────────────────────────────────────
export function VideoGridSkeleton({ count = 4, columns = "lg:grid-cols-4" }: { count?: number; columns?: string }) {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${columns} gap-6`}>
            {Array.from({ length: count }).map((_, i) => (
                <VideoCardSkeleton key={i} />
            ))}
        </div>
    );
}

// ─── Sidebar Item Skeleton ───────────────────────────────────────────
export function SidebarVideoSkeleton() {
    return (
        <div className="flex items-center gap-3 p-2 rounded-xl bg-muted/20 animate-pulse">
            <div className="w-14 h-14 rounded-lg bg-muted/40 shrink-0" />
            <div className="flex-1 space-y-2">
                <div className="w-full h-3 rounded bg-muted/50" />
                <div className="w-2/3 h-3 rounded bg-muted/30" />
                <div className="w-1/3 h-2 rounded bg-muted/20" />
            </div>
        </div>
    );
}

// ─── Empty State ─────────────────────────────────────────────────────
interface EmptyStateProps {
    title?: string;
    description?: string;
    onRetry?: () => void;
    showSubscribe?: boolean;
}

export function VideoEmptyState({
    title = "No Videos Available",
    description = "We couldn't load videos right now. Please check back later or visit our YouTube channel directly.",
    onRetry,
    showSubscribe = true,
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <div className="w-20 h-20 rounded-full bg-muted/30 flex items-center justify-center mb-6">
                <Youtube className="w-10 h-10 text-muted-foreground/50" />
            </div>
            <h3 className="text-lg font-black uppercase tracking-tight text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground font-medium max-w-md mb-6">{description}</p>
            <div className="flex items-center gap-3">
                {onRetry && (
                    <Button
                        onClick={onRetry}
                        variant="outline"
                        className="rounded-xl text-xs font-black uppercase tracking-wider px-6 py-5 cursor-pointer"
                    >
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Retry
                    </Button>
                )}
                {showSubscribe && (
                    <Button
                        onClick={() => window.open("https://www.youtube.com/@RadioNyraUSA?sub_confirmation=1", "_blank")}
                        className="bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider px-6 py-5 cursor-pointer"
                    >
                        <Youtube className="w-4 h-4 mr-2 fill-white" />
                        Visit @RadioNyraUSA
                    </Button>
                )}
            </div>
        </div>
    );
}

// ─── Error State ─────────────────────────────────────────────────────
interface ErrorStateProps {
    error: string;
    onRetry?: () => void;
}

export function VideoErrorState({ error, onRetry }: ErrorStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-950 flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Something Went Wrong</h3>
            <p className="text-sm text-muted-foreground font-medium max-w-md mb-4">{error}</p>
            {onRetry && (
                <Button
                    onClick={onRetry}
                    variant="outline"
                    className="rounded-xl text-xs font-bold px-5 cursor-pointer"
                >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                </Button>
            )}
        </div>
    );
}
