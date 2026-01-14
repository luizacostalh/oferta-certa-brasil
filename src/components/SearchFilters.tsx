import { Search, SlidersHorizontal, X, Store } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { categories, stores } from '@/data/mockDeals';
import { cn } from '@/lib/utils';

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  selectedStore: string | null;
  onStoreChange: (store: string | null) => void;
  sortBy: 'discount' | 'price';
  onSortChange: (sort: 'discount' | 'price') => void;
  freeShippingOnly: boolean;
  onFreeShippingChange: (value: boolean) => void;
}

export function SearchFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedStore,
  onStoreChange,
  sortBy,
  onSortChange,
  freeShippingOnly,
  onFreeShippingChange,
}: SearchFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-card border-y border-border sticky top-16 z-40">
      <div className="container py-4">
        {/* Search Bar */}
        <div className="flex gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar produto..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full h-10 pl-10 pr-4 rounded-lg border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <Button
            variant="outline"
            size="default"
            onClick={() => setShowFilters(!showFilters)}
            className={cn(showFilters && 'bg-muted')}
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span className="hidden sm:inline ml-2">Filtros</span>
          </Button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          <button
            onClick={() => onCategoryChange(null)}
            className={cn(
              'shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-colors',
              selectedCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:text-foreground'
            )}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={cn(
                'shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5',
                selectedCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              )}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Extended Filters */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-border space-y-4 animate-fade-in">
            {/* Store Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 mr-2">
                <Store className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Loja:</span>
              </div>
              <button
                onClick={() => onStoreChange(null)}
                className={cn(
                  'px-3 py-1 rounded-md text-sm font-medium transition-colors',
                  selectedStore === null
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:text-foreground'
                )}
              >
                Todas
              </button>
              {stores.map((store) => (
                <button
                  key={store.id}
                  onClick={() => onStoreChange(store.id)}
                  className={cn(
                    'px-3 py-1 rounded-md text-sm font-medium transition-colors',
                    selectedStore === store.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:text-foreground'
                  )}
                >
                  {store.label}
                </button>
              ))}
            </div>

            {/* Sort and Free Shipping */}
            <div className="flex flex-wrap gap-4">
              {/* Sort */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Ordenar:</span>
                <div className="flex gap-1">
                  <button
                    onClick={() => onSortChange('discount')}
                    className={cn(
                      'px-3 py-1 rounded-md text-sm font-medium transition-colors',
                      sortBy === 'discount'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                    )}
                  >
                    Maior desconto
                  </button>
                  <button
                    onClick={() => onSortChange('price')}
                    className={cn(
                      'px-3 py-1 rounded-md text-sm font-medium transition-colors',
                      sortBy === 'price'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:text-foreground'
                    )}
                  >
                    Menor preço
                  </button>
                </div>
              </div>

              {/* Free Shipping Toggle */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={freeShippingOnly}
                  onChange={(e) => onFreeShippingChange(e.target.checked)}
                  className="h-4 w-4 rounded border-input text-primary focus:ring-ring"
                />
                <span className="text-sm text-muted-foreground">Frete grátis</span>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
