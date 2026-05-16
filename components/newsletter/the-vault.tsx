interface Deal {
  brand: string
  discount: string
  description: string
  code: string
}

const deals: Deal[] = [
  {
    brand: 'Raycast Pro',
    discount: '50% OFF',
    description: 'The ultimate productivity launcher for Mac.',
    code: 'INSIDA50',
  },
  {
    brand: 'Notion AI',
    discount: '3 Months Free',
    description: 'AI-powered writing and analysis for your workspace.',
    code: 'BRIEF3M',
  },
  {
    brand: 'Linear',
    discount: '40% OFF',
    description: 'Issue tracking built for modern dev teams.',
    code: 'INSIDAVIP',
  },
]

export function TheVault() {
  return (
    <section className="px-5 py-7 sm:px-8 sm:py-9">
      {/* Section header */}
      <div className="mb-6 flex items-center gap-2.5">
        <span className="h-2 w-2 rounded-full bg-brand-amber" />
        <h2 className="font-serif text-xl font-medium text-foreground sm:text-2xl">The Vault</h2>
        <span className="rounded bg-brand-amber/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-amber">
          Exclusive
        </span>
      </div>

      {/* Deal cards — 2-col on mobile (compact), 3-col on sm+ */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {deals.map((deal, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl border border-border/50 bg-card p-4"
          >
            <div className="mb-2 flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="text-sm font-semibold text-foreground">{deal.brand}</h3>
              <span className="w-fit rounded bg-brand-amber/15 px-2 py-0.5 text-[10px] font-bold text-brand-amber">
                {deal.discount}
              </span>
            </div>
            <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground">
              {deal.description}
            </p>
            <button className="w-full rounded-lg border border-border/60 bg-secondary/60 px-3 py-2 font-mono text-xs font-semibold tracking-wider text-foreground transition-colors hover:bg-secondary">
              {deal.code}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
