import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Consistent page header for every public route: small eyebrow, one clear
 * headline, one short sentence. Keeps long introductory copy off the pages
 * while preserving the H1 and metadata each page needs for SEO.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
  align = "start",
}: {
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
  className?: string
  align?: "start" | "center"
}) {
  return (
    <header
      className={cn(
        "border-b border-border bg-paper",
        align === "center" ? "py-12 text-center md:py-16" : "py-10 md:py-14",
        className,
      )}
    >
      <div
        className={cn(
          "container mx-auto px-4 sm:px-6",
          align === "center" && "flex flex-col items-center",
        )}
      >
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1
          className={cn(
            "max-w-3xl text-3xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl",
            align === "center" && "mx-auto text-center",
          )}
        >
          {title}
        </h1>
        {description ? (
          <p
            className={cn(
              "mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base",
              align === "center" && "mx-auto text-center",
            )}
          >
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-6 flex flex-wrap items-center gap-3">{children}</div> : null}
      </div>
    </header>
  )
}
