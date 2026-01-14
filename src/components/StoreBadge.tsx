import { cn } from '@/lib/utils';
import type { StoreType } from '@/data/mockDeals';

interface StoreBadgeProps {
  store: StoreType;
  size?: 'sm' | 'md';
}

const storeConfig: Record<StoreType, { label: string; colorClass: string; bgClass: string; borderClass: string }> = {
  amazon: {
    label: 'Amazon',
    colorClass: 'text-amazon',
    bgClass: 'bg-amazon/15',
    borderClass: 'border-amazon/30',
  },
  mercadolivre: {
    label: 'Mercado Livre',
    colorClass: 'text-mercadolivre',
    bgClass: 'bg-mercadolivre/15',
    borderClass: 'border-mercadolivre/30',
  },
  magalu: {
    label: 'Magalu',
    colorClass: 'text-magalu',
    bgClass: 'bg-magalu/15',
    borderClass: 'border-magalu/30',
  },
  kabum: {
    label: 'KaBuM!',
    colorClass: 'text-kabum',
    bgClass: 'bg-kabum/15',
    borderClass: 'border-kabum/30',
  },
  havan: {
    label: 'Havan',
    colorClass: 'text-havan',
    bgClass: 'bg-havan/15',
    borderClass: 'border-havan/30',
  },
};

export function StoreBadge({ store, size = 'md' }: StoreBadgeProps) {
  const config = storeConfig[store];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full font-semibold border',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        config.bgClass,
        config.borderClass
      )}
    >
      <span className={cn('font-bold', config.colorClass)}>●</span>
      <span className={config.colorClass}>{config.label}</span>
    </div>
  );
}
