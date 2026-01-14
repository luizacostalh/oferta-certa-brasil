import { useState, useMemo } from 'react';
import { Package } from 'lucide-react';
import { DealCard } from './DealCard';
import { SearchFilters } from './SearchFilters';
import type { Deal } from '@/data/mockDeals';

interface MoreDealsSectionProps {
  deals: Deal[];
}

export function MoreDealsSection({ deals }: MoreDealsSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'discount' | 'price'>('discount');
  const [freeShippingOnly, setFreeShippingOnly] = useState(false);

  const filteredDeals = useMemo(() => {
    let filtered = deals.filter(d => !d.rank); // Exclude Top 5

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(d =>
        d.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(d => d.category === selectedCategory);
    }

    // Free shipping filter
    if (freeShippingOnly) {
      filtered = filtered.filter(d => d.freeShipping);
    }

    // Sort
    if (sortBy === 'discount') {
      filtered.sort((a, b) => b.discountPercent - a.discountPercent);
    } else {
      filtered.sort((a, b) => a.currentPrice - b.currentPrice);
    }

    return filtered;
  }, [deals, searchQuery, selectedCategory, sortBy, freeShippingOnly]);

  return (
    <section id="ofertas" className="py-12 md:py-16 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-4">
            <Package className="h-4 w-4" />
            <span className="text-sm font-semibold">Catálogo completo</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Mais Ofertas
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Outras oportunidades além do Top 5, atualizadas periodicamente.
          </p>
        </div>
      </div>

      {/* Filters */}
      <SearchFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
        freeShippingOnly={freeShippingOnly}
        onFreeShippingChange={setFreeShippingOnly}
      />

      <div className="container mt-8">
        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          {filteredDeals.length} {filteredDeals.length === 1 ? 'oferta encontrada' : 'ofertas encontradas'}
        </p>

        {/* Deals Grid */}
        {filteredDeals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredDeals.map((deal, index) => (
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
            <p className="text-muted-foreground">
              Nenhuma oferta encontrada com esses filtros.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
