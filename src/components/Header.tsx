import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            5
          </div>
          <span className="text-lg font-bold text-foreground">
            Top 5 <span className="text-primary">Ofertas</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#top5" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Top 5
          </a>
          <a href="#ofertas" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Mais Ofertas
          </a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>

        {/* Search & Mobile Menu */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container py-4 flex flex-col gap-2">
            <a href="#top5" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Top 5
            </a>
            <a href="#ofertas" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Mais Ofertas
            </a>
            <a href="#faq" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
