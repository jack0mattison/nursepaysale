const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nursepayscale.co.uk";

interface ArticleSchemaProps {
  title: string;
  description: string;
  publishedTime?: string;
  modifiedTime?: string;
  url: string;
  image?: string;
}

export function ArticleSchema({
  title,
  description,
  publishedTime,
  modifiedTime,
  url,
  image,
}: ArticleSchemaProps) {
  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: fullUrl,
    ...(image && { image: image.startsWith("http") ? image : `${baseUrl}${image}` }),
    ...(publishedTime && { datePublished: publishedTime }),
    ...(modifiedTime && { dateModified: modifiedTime }),
    publisher: {
      "@type": "Organization",
      name: "NursePayScale.co.uk",
      url: baseUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
