import { allDocs } from "contentlayer/generated";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Comment from "@/components/Comment";
import MDX from "@/components/MDX";
import Link from "next/link";

export const generateStaticParams = async () =>
  allDocs.map((doc) => ({ slug: doc.slug }));

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const doc = allDocs.find(
    (doc) => doc.slug === decodeURIComponent(params.slug)
  );
  return {
    title: `${doc?.title} | 杂谈`,
    description: doc?.description,
  };
};

export default function PostLayout({ params }: { params: { slug: string } }) {
  const doc = allDocs.find(
    (doc) => doc.slug === decodeURIComponent(params.slug)
  );
  if (!doc) {
    return notFound();
  }

  return (
    <div className="page p-4">
      <article>
        <p className="mb-2 text-sm">
          <Link href="/" className="text-blue-700 mr-2">
            首页
          </Link>
          &gt;<span className="ml-2">{doc.title}</span>
        </p>
        <div className="mb-4 text-4xl font-bold">{doc.title}</div>
        <div className="meta mb-6 flex items-center justify-start">
          {format(new Date(doc.date), "EEEE.dd.MM.yyyy")}
        </div>
        <hr className="my-6" />
        <MDX code={doc.body.code} />
      </article>
      <Comment term={doc.title} />
    </div>
  );
}
