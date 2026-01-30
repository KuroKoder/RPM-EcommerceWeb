import { cn } from "@/lib/utils/cn";

export function Section({
  title,
  description,
  className,
  children,
}: {
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("py-10 sm:py-14", className)}>
      <div className="mb-6 sm:mb-8">
        {title ? (
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {title}
          </h2>
        ) : null}
        {description ? (
          <p className="mt-2 max-w-2xl text-sm text-[rgb(var(--muted))]">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
