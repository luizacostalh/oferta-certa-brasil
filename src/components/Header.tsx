import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center">
        {/* Logo (esquerda) */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground">
            Price<span className="text-primary">Up</span>
          </span>
        </a>

        {/* Right group (direita) */}
        <div className="ml-auto flex items-center gap-6">
          {/* Desktop Navigation (direita) */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#duvidas"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Como funciona
            </a>

            <a
              href="#ofertas"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Melhores ofertas
            </a>

            <a
              href="#duvidas"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Ajuda
            </a>
          </nav>

          {/* Mobile Menu Button (só mobile) */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            <a
              href="#duvidas"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Como funciona
            </a>

            <a
              href="#ofertas"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Melhores ofertas
            </a>

            <a
              href="#duvidas"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ajuda
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
