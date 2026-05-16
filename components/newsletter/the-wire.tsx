import Image from 'next/image'

interface NewsItem {
  image: string
  headline: string
  summary: string
  link: string
}

const newsItems: NewsItem[] = [
  {
    image: '/images/news-apple.jpg',
    headline: 'Apple Unveils On-Device AI That Runs Entirely Offline',
    summary:
      'In a surprise keynote, Apple announced a new suite of AI features that process everything locally on your device — no internet required.',
    link: '#',
  },
  {
    image: '/images/news-coding.jpg',
    headline: 'The Rise of Vibe Coding — Why Devs Are Ditching Frameworks',
    summary:
      'A growing movement of developers is rejecting complex frameworks in favor of vanilla code and AI assistants.',
    link: '#',
  },
]

export function TheWire() {
  return (
    <section className="px-5 py-7 sm:px-8 sm:py-9">
      {/* Section header */}
      <div className="mb-6 flex items-center gap-2.5">
        <span className="h-2 w-2 rounded-full bg-brand-cyan" />
        <h2 className="font-serif text-xl font-medium text-foreground sm:text-2xl">The Wire</h2>
      </div>

      {/* News grid — stacked on mobile, 2-col on sm+ */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-6">
        {newsItems.map((item, index) => (
          <article key={index} className="group flex flex-col">
            {/* Thumbnail */}
            <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.headline}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>

            {/* Content */}
            <h3 className="mb-2 text-base font-medium leading-snug text-foreground sm:text-[15px]">
              {item.headline}
            </h3>
            <p className="mb-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {item.summary}
            </p>
            <a
              href={item.link}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan transition-opacity hover:opacity-75"
            >
              Read more
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
