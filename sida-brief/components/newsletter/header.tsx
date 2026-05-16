import Image from 'next/image'

export function NewsletterHeader() {
  return (
    <div className="px-5 pt-8 pb-6 sm:px-8 sm:pt-10 sm:pb-8">
      {/* Hero image */}
      <div className="relative mb-6 aspect-[2.5/1] w-full overflow-hidden rounded-xl sm:mb-7 sm:rounded-2xl">
        <Image
          src="/images/hero-tech.jpg"
          alt="Tech visualization"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Title block */}
      <div className="flex flex-col items-center text-center">
        <h1 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          The Insida Brief
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
          <span>Issue #001</span>
          <span className="h-1 w-1 rounded-full bg-brand-cyan" />
          <span>4 min read</span>
          <span className="h-1 w-1 rounded-full bg-brand-cyan" />
          <span>May 2026</span>
        </div>
      </div>
    </div>
  )
}
