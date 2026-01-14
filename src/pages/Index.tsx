import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AffiliateDisclosure } from '@/components/AffiliateDisclosure';
import { Top5Section } from '@/components/Top5Section';
import { MoreDealsSection } from '@/components/MoreDealsSection';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { mockDeals } from '@/data/mockDeals';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AffiliateDisclosure />
        <Top5Section deals={mockDeals} />
        <MoreDealsSection deals={mockDeals} />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
