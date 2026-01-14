import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqItems } from '@/data/mockDeals';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-16">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground mb-4">
            <HelpCircle className="h-4 w-4" />
            <span className="text-sm font-semibold">Perguntas frequentes</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
            Dúvidas? A gente explica
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Entenda como funciona nossa comparação de preços.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-2xl mx-auto space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-card-foreground pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'grid transition-all duration-200',
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-4 md:px-5 pb-4 md:pb-5 text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
