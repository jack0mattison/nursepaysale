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
      <article className="mx-auto max-w-content">
        <header
          className="relative flex min-h-[200px] flex-col justify-end px-4 py-10 sm:px-6 sm:min-h-[240px]"
          style={{
            backgroundImage: "url('https://source.unsplash.com/1600x600/?healthcare,nursing')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70" aria-hidden />
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">{guide.title}</h1>
            <p className="mt-2 text-blue-100">{guide.description}</p>
          </div>
        </header>
        <div className="px-4 py-8 sm:px-6">
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
