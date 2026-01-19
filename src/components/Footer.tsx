import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-lg font-bold">PriceUp</span>
            </div>
            <p className="text-sm text-primary-foreground/70 max-w-sm">
              Comparamos preços em Amazon e Mercado Livre para encontrar as melhores
              ofertas em eletrônicos e eletrodomésticos. Você compra direto no site
              oficial.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#top5"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  PriceUp
                </a>
              </li>
              <li>
                <a
                  href="#ofertas"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Mais Ofertas
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Mascote no footer (somente mobile) */}
          <div className="md:hidden w-full flex justify-center">
            <div className="relative w-24">
              {/* Sombra de contato (colada no pé) */}
              <div className="absolute left-1/2 bottom-1 -translate-x-1/2">
                <div
                  className="w-14 h-4 rounded-full opacity-80"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(0,10,30,0.75) 0%, rgba(0,10,30,0.25) 60%, rgba(0,10,30,0) 85%)",
                    filter: "blur(4px)",
                  }}
                />
              </div>

              <img
                src="/mascot/priceup-wave.gif"
                alt="Mascote PriceUp"
                className="relative w-full"
              />
            </div>
          </div>

          <p className="text-sm text-primary-foreground/60">
            © {currentYear} PriceUp. Todos os direitos reservados.
          </p>
        </div>

        {/* Disclaimers (bem no final, discretos) */}
        <div className="mt-6 pt-6 border-t border-primary-foreground/10 text-center space-y-2">
          <p className="text-xs text-primary-foreground/50">
            Alguns links neste site podem ser de afiliados. Sem custo adicional para
            você.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Os preços exibidos são meramente informativos e podem sofrer alterações.
            Consulte sempre o site do lojista para confirmar preços e disponibilidade.
          </p>
        </div>
      </div>
    </footer>
  );
}
