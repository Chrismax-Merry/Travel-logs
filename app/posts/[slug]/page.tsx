import { allDocs } from "contentlayer/generated";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Comment from "@/components/Comment";
import MDX from "@/components/MDX";

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
    title: `${doc?.title} | 林深时见鹿`,
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
        <h2 className="mb-4 text-4xl font-bold">{doc.title}</h2>
        <div className="meta mb-6 flex items-center justify-start">
          {format(new Date(doc.date), "yyyy-MM-dd")}
        </div>
        <hr className="my-6"/>
        <MDX code={doc.body.code} />
      </article>
      <Comment term={doc.title} />
    </div>
  );
}
