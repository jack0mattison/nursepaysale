interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <details key={i} className="faq-item rounded-lg border border-border bg-white">
            <summary className="px-4 py-3 font-medium text-text-primary">
              {faq.question}
            </summary>
            <div className="border-t border-border px-4 py-3 text-text-secondary">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
