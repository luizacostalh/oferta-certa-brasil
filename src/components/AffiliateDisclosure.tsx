import { Info } from 'lucide-react';

export function AffiliateDisclosure() {
  return (
    <div className="bg-muted/50 border-y border-border">
      <div className="container py-3">
        <div className="flex items-start md:items-center gap-3 text-sm text-muted-foreground">
          <Info className="h-4 w-4 shrink-0 mt-0.5 md:mt-0" />
          <p>
            <span className="font-medium text-foreground">Aviso:</span>{' '}
            Alguns links são de afiliado. Podemos receber comissão sem custo extra para você. 
            Preços e estoque podem mudar no site do lojista.
          </p>
        </div>
      </div>
    </div>
  );
}
