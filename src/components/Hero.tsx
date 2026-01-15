import { ArrowDown, Sparkles, TrendingDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToTop5 = () => {
    document.getElementById('top5')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden gradient-hero py-16 md:py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Atualizado automaticamente
            </span>
          </div>

          {/* Headline */}
<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground leading-tight animate-fade-in">
  Price<span className="text-accent">Up</span>
</h1>


{/* Slogan */}
<p className="mt-4 md:mt-6 text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground/90 animate-fade-in leading-snug">
  Compare preços e{" "}
  <span className="relative inline-block text-primary-foreground">
    compre pelo menor valor
    <svg
      className="absolute -bottom-3 left-0 w-full"
      viewBox="0 0 360 8"
      fill="none"
    >
      <path
        d="M2 6C90 2 270 2 358 6"
        stroke="hsl(var(--accent))"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  </span>
</p>





          {/* Subheadline */}
          <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            Comparamos preços nas principais lojas e destacamos as melhores oportunidades.{' '}
            <span className="font-semibold text-primary-foreground">Você compra no site oficial.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button variant="hero" size="xl" onClick={scrollToTop5}>
              <TrendingDown className="h-5 w-5 mr-2" />
              Ver Top 5 Ofertas
            </Button>
            <Button variant="heroOutline" size="lg" onClick={scrollToTop5}>
              <ArrowDown className="h-4 w-4 mr-1" />
              Explorar
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-md mx-auto animate-fade-in">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">2</div>
              <div className="text-xs md:text-sm text-primary-foreground/60">Lojas</div>
            </div>
            <div className="text-center border-x border-primary-foreground/20">
              <div className="text-2xl md:text-3xl font-bold text-accent">-42%</div>
              <div className="text-xs md:text-sm text-primary-foreground/60">Maior desconto</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-foreground">24h</div>
              <div className="text-xs md:text-sm text-primary-foreground/60">Atualização</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
