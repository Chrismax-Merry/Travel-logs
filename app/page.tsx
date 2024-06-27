"use client";

import type { Docs } from "contentlayer/generated";
import { compareDesc, format } from "date-fns";
import { allDocs } from "contentlayer/generated";
import CoverCard from "@/components/CoverCard";
import { useEffect, useState } from "react";

export default function Home() {
  const allList: Docs[] = allDocs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const [page, setPage] = useState(1);
  const [docs, setDocs] = useState<Docs[]>([]);

  useEffect(() => {
    const data = allList.slice((page - 1) * 10, page * 10);
    if (data.length) {
      setDocs([...docs, ...data]);
    } else {
      // finishedRef.current = true
    }
  }, [page]);

  return (
    <main>
      <div className="font-bold text-3xl md:text-5xl">摄影</div>
      <div className="mt-2 text-[#72777D]">
        真正的发现之旅不在于寻找新风景，而是拥有新眼光。——《追忆似水年华》马塞尔.普鲁斯特
      </div>
      <section className="mt-10 mb-6 grid md:grid-cols-3 gap-3">
        {docs.map((doc: Docs, k) => {
          return <CoverCard key={k} data={doc} />;
        })}
      </section>
    </main>
  );
}
