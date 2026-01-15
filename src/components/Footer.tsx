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
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground text-primary font-bold">
                5
              </div>
              <span className="text-lg font-bold">Top 5 Ofertas</span>
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
                  Top 5 Ofertas
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
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Top 5 Ofertas. Todos os direitos reservados.
          </p>
          <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
            Feito com <Heart className="h-4 w-4 text-destructive fill-destructive" />{" "}
            no Brasil
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
