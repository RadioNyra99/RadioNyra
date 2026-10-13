import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Shared section shell used by the homepage and every public page so that
 * spacing, headings and hierarchy stay identical across the whole site.
 */
export function Section({
  id,
  children,
  className,
  variant = "default",
  container = true,
}: {
  id?: string
  children: ReactNode
  className?: string
  variant?: "default" | "alt" | "tight"
  container?: boolean
}) {
  const variantClass =
    variant === "alt" ? "section section-alt" : variant === "tight" ? "section-tight" : "section"

  return (
    <section
      id={id}
      className={cn(variantClass, className)}
      style={container ? undefined : { paddingBlock: undefined }}
    >
      {container ? <div className="container mx-auto px-4 sm:px-6">{children}</div> : children}
    </section>
  )
}

/**
 * Compact section heading: optional eyebrow, one headline, one short line and
 * an optional "see all" link. Replaces the long promotional headers that used
 * to sit above each homepage block.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  align = "start",
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  href?: string
  linkLabel?: string
  align?: "start" | "center"
  className?: string
}) {
  return (
    <div className={cn("section-head", align === "center" && "flex-col items-center text-center", className)}>
      <div className={cn(align === "center" && "text-center")}>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h2 className="section-title">{title}</h2>
        {description ? <p className="lede mt-1.5">{description}</p> : null}
      </div>

      {href && linkLabel ? (
        <Link
          href={href}
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {linkLabel}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : null}
    </div>
  )
}
