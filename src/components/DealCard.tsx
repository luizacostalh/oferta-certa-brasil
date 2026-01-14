import { ExternalLink, Truck, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { StoreBadge } from './StoreBadge';
import type { Deal } from '@/data/mockDeals';
import { cn } from '@/lib/utils';

interface DealCardProps {
  deal: Deal;
  featured?: boolean;
}

export function DealCard({ deal, featured = false }: DealCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <article
      className={cn(
        'group relative bg-card rounded-xl border border-border shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 overflow-hidden',
        featured && 'ring-2 ring-accent/30'
      )}
    >
      {/* Rank Badge */}
      {deal.rank && (
        <div className="absolute top-3 left-3 z-10 flex h-8 w-8 items-center justify-center rounded-full gradient-discount font-bold text-discount-foreground text-sm shadow-lg">
          #{deal.rank}
        </div>
      )}

      {/* Discount Badge */}
      <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-lg gradient-discount text-discount-foreground font-bold text-sm shadow-lg">
        -{deal.discountPercent}%
      </div>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted/50">
        <img
          src={deal.image}
          alt={deal.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Store Badge */}
        <div className="mb-3">
          <StoreBadge store={deal.store} size="sm" />
        </div>

        {/* Title */}
        <h3 className="font-semibold text-card-foreground line-clamp-2 mb-3 min-h-[2.5rem] text-sm md:text-base">
          {deal.title}
        </h3>

        {/* Prices */}
        <div className="mb-3">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-2xl font-bold text-foreground">
              {formatPrice(deal.currentPrice)}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(deal.marketPrice)}
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Preço de mercado: {formatPrice(deal.marketPrice)}
          </p>
        </div>

        {/* Shipping */}
        <div className="flex items-center gap-1.5 text-xs mb-4">
          <Truck className="h-3.5 w-3.5" />
          {deal.freeShipping ? (
            <span className="text-accent font-medium">Frete grátis</span>
          ) : (
            <span className="text-muted-foreground">Frete: {deal.shipping}</span>
          )}
        </div>

        {/* CTA Button */}
        <Button variant="cta" className="w-full" asChild>
          <a href={deal.affiliateUrl} target="_blank" rel="noopener noreferrer">
            Ver promoção
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </Button>

        {/* Last Updated */}
        <div className="flex items-center justify-center gap-1.5 mt-3 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>Atualizado: {formatDate(deal.lastUpdated)}</span>
        </div>
      </div>
    </article>
  );
}
