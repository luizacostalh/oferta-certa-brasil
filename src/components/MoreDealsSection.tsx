import { Package } from 'lucide-react';
import { DealCard } from './DealCard';
import type { Deal } from '@/data/mockDeals';

interface MoreDealsSectionProps {
  deals: Deal[];
}

export function MoreDealsSection({ deals }: MoreDealsSectionProps) {
  return (
    <section id="ofertas" className="py-12 md:py-16 bg-muted/30 scroll-mt-24">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Continue economizando
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Descubra mais ofertas com preços monitorados e atualizados para você pagar menos.
          </p>
        </div>
      </div>

      <div className="container mt-8">
        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          {deals.length} {deals.length === 1 ? 'oferta encontrada' : 'ofertas encontradas'}
        </p>

        {/* Deals Grid */}
        {deals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {deals.map((deal, index) => (
              <div
                key={deal.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <DealCard deal={deal} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Package className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">Nenhuma oferta encontrada com esses filtros.</p>
          </div>
        )}
      </div>
    </section>
  );
}
