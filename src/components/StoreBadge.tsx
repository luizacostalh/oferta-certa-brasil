import { cn } from '@/lib/utils';

interface StoreBadgeProps {
  store: 'amazon' | 'mercadolivre';
  size?: 'sm' | 'md';
}

export function StoreBadge({ store, size = 'md' }: StoreBadgeProps) {
  const isAmazon = store === 'amazon';
  
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-semibold',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        isAmazon 
          ? 'bg-amazon/15 text-amazon-foreground border border-amazon/30' 
          : 'bg-mercadolivre/15 text-mercadolivre-foreground border border-mercadolivre/30'
      )}
    >
      <span className={cn(
        'font-bold',
        isAmazon ? 'text-amazon' : 'text-mercadolivre'
      )}>
        {isAmazon ? '●' : '●'}
      </span>
      {isAmazon ? 'Amazon' : 'Mercado Livre'}
    </div>
  );
}
