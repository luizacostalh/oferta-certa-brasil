import { Trophy, TrendingDown } from 'lucide-react';
import { DealCard } from './DealCard';
import type { Deal } from '@/data/mockDeals';

interface Top5SectionProps {
  deals: Deal[];
}

export function Top5Section({ deals }: Top5SectionProps) {
  const top5Deals = deals.filter(d => d.rank).sort((a, b) => (a.rank || 0) - (b.rank || 0));

  return (
    <section id="top5" className="py-12 md:py-16">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <Trophy className="h-4 w-4" />
            <span className="text-sm font-semibold">Melhores oportunidades</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Top 5 Ofertas de Hoje
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Os maiores descontos em eletrônicos e eletrodomésticos, rankeados pelo percentual de economia.
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {top5Deals.map((deal, index) => (
            <div 
              key={deal.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <DealCard deal={deal} featured={deal.rank === 1} />
            </div>
          ))}
        </div>

        {/* Savings Info */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <TrendingDown className="h-4 w-4 text-accent" />
          <span>
            Economia total estimada: <strong className="text-accent">R$ 8.251</strong> comparado aos preços de mercado
          </span>
        </div>
      </div>
    </section>
  );
}
