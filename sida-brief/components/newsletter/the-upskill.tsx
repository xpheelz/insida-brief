import Image from 'next/image'

export function TheUpskill() {
  return (
    <section className="px-5 py-7 sm:px-8 sm:py-9">
      {/* Section header */}
      <div className="mb-6 flex items-center gap-2.5">
        <span className="h-2 w-2 rounded-full bg-brand-emerald" />
        <h2 className="font-serif text-xl font-medium text-foreground sm:text-2xl">The Upskill</h2>
      </div>

      {/* Course card — stacked on mobile, side-by-side on sm+ */}
      <div className="overflow-hidden rounded-2xl border border-border/50 bg-card">
        <div className="flex flex-col sm:flex-row">
          {/* Thumbnail */}
          <div className="relative w-full shrink-0 sm:w-2/5">
            <div className="aspect-video w-full sm:aspect-[4/3] sm:h-full">
              <Image
                src="/images/course-ai.jpg"
                alt="AI coding course"
                fill
                className="object-cover"
              />
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/20">
                  <svg className="h-5 w-5 translate-x-0.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <span className="absolute bottom-2.5 right-2.5 rounded-md bg-black/60 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                42 min
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-1 flex-col justify-center gap-3 p-5 sm:p-6">
            <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
              Build Your First AI Agent with LangChain &amp; GPT-4
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Learn how to create autonomous AI agents that can browse the web, analyze data, and execute tasks — no ML background required.
            </p>
            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-brand-emerald px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Start Learning
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
