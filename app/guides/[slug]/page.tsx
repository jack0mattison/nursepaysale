import Link from "next/link";
import { guides } from "@/data/guides";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nursepayscale.co.uk";

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  const title = guide ? guide.title : "Guide | NursePayScale.co.uk";
  const description = guide ? guide.description : "NHS nurse salary and career guides.";
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/guides/${slug}`,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <div className="mx-auto max-w-content px-4 py-8">
        <p>Guide not found.</p>
      </div>
    );
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Guides", url: "/guides" },
    { name: guide.title, url: `/guides/${slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema
        title={guide.title}
        description={guide.description}
        url={`/guides/${slug}`}
      />
      <article className="mx-auto max-w-content px-4 py-8 sm:px-6">
        <h1 className="text-3xl font-bold text-primary sm:text-4xl">{guide.title}</h1>
        <p className="mt-3 text-text-secondary">{guide.description}</p>
        <div className="mt-8">
        <div className="prose prose-primary max-w-none">
          <p>
            This guide will be expanded with full content. In the meantime, use our{" "}
            <Link href="/tools/nhs-salary-calculator" className="text-primary-light hover:underline">
              salary calculator
            </Link>{" "}
            and{" "}
            <Link href="/band-5-nurse-salary" className="text-primary-light hover:underline">
              band salary pages
            </Link>{" "}
            for pay information.
          </p>
        </div>
        </div>
      </article>
    </>
  );
}
