import { useMemo, useState } from 'react';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Top5Section } from '@/components/Top5Section';
import { MoreDealsSection } from '@/components/MoreDealsSection';
import { SearchFilters } from '@/components/SearchFilters';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

import { mockDeals } from '@/data/mockDeals';
import type { Deal } from '@/data/mockDeals';

const Index = () => {
  // 🔎 estados dos filtros (agora ficam no topo)
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'discount' | 'price'>('discount');
  const [freeShippingOnly, setFreeShippingOnly] = useState(false);

  // 🔥 deals filtrados (serve para TODAS as seções)
  const filteredDeals = useMemo(() => {
    let filtered: Deal[] = [...mockDeals];

    if (searchQuery) {
      filtered = filtered.filter(d =>
        d.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(d => d.category === selectedCategory);
    }

    if (selectedStore) {
      filtered = filtered.filter(d => d.store === selectedStore);
    }

    if (freeShippingOnly) {
      filtered = filtered.filter(d => d.freeShipping);
    }

    if (sortBy === 'discount') {
      filtered.sort((a, b) => b.discountPercent - a.discountPercent);
    } else {
      filtered.sort((a, b) => a.currentPrice - b.currentPrice);
    }

    return filtered;
  }, [
    searchQuery,
    selectedCategory,
    selectedStore,
    sortBy,
    freeShippingOnly,
  ]);

  // separa Top 5 e demais ofertas
  const top5Deals = filteredDeals.filter(d => d.rank);
  const moreDeals = filteredDeals.filter(d => !d.rank);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <Hero />

        {/* 🔽 FILTROS LOGO ABAIXO DA HEADLINE */}
        <div className="container mt-6 md:mt-8">
          <SearchFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedStore={selectedStore}
            onStoreChange={setSelectedStore}
            sortBy={sortBy}
            onSortChange={setSortBy}
            freeShippingOnly={freeShippingOnly}
            onFreeShippingChange={setFreeShippingOnly}
          />
        </div>

        {/* 🏆 Melhores ofertas de hoje */}
        <Top5Section deals={top5Deals} />

        {/* 💰 Mais ofertas */}
        <MoreDealsSection deals={moreDeals} />

        <FAQ />
      
      </main>

      <Footer />
    </div>
  );
};

export default Index;
