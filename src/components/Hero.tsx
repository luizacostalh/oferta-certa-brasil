import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToTop5 = () => {
    document.getElementById('top5')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden gradient-hero py-16 md:py-24">
      
      {/* Mascote animado */}
      <div className="absolute right-[6rem] top-[32%] -translate-y-1/2 z-20 pointer-events-none">
        <div className="relative w-28 md:w-40">
          {/* Sombra de contato (colada no pé) */}
          <div className="absolute left-1/2 bottom-2 md:bottom-3 -translate-x-1/2">
            <div
              className="w-16 md:w-20 h-4 md:h-5 rounded-full opacity-80"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,10,30,0.75) 0%, rgba(0,10,30,0.25) 60%, rgba(0,10,30,0) 85%)",
                filter: "blur(4px)",
              }}
            />
          </div>

          {/* Mascote */}
          <img
            src="/mascot/priceup-wave.gif"
            alt="Mascote PriceUp"
            className="relative w-full"
          />
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary-foreground leading-tight animate-fade-in">
            Price<span className="text-accent">Up</span>
          </h1>

          <p className="mt-4 md:mt-6 text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground/90 animate-fade-in leading-snug">
            Compare preços e{' '}
            <span className="relative inline-block text-primary-foreground">
              compre pelo menor valor
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 360 8" fill="none">
                <path
                  d="M2 6C90 2 270 2 358 6"
                  stroke="hsl(var(--accent))"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </p>

          <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in">
            Comparamos preços nas principais lojas e destacamos as melhores oportunidades.{' '}
            <span className="font-semibold text-primary-foreground">Você compra no site oficial.</span>
          </p>

          <div className="flex justify-center items-center animate-fade-in">
            <Button variant="hero" size="xl" onClick={scrollToTop5}>
              Ver ofertas
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-12 max-w-md mx-auto animate-fade-in">
            <div className="text-center">
              <div className="min-h-[3.25rem] md:min-h-[3.75rem] flex items-center justify-center">
                <div className="text-xl md:text-2xl font-bold text-primary-foreground">
                  Economize até <span className="text-accent">25%</span>
                </div>
              </div>
              <div className="text-xs md:text-sm text-primary-foreground/60">
                Comparando preços entre lojas
              </div>
            </div>

            <div className="text-center border-l border-primary-foreground/20 pl-6">
              <div className="min-h-[3.25rem] md:min-h-[3.75rem] flex items-center justify-center">
                <div className="text-xl md:text-2xl font-bold text-primary-foreground">
                  Sites oficiais
                </div>
              </div>
              <div className="text-xs md:text-sm text-primary-foreground/60">
                Compra direta e segura
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
