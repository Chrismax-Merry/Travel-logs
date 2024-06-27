import Image from "next/image";
import Link from "next/link";

interface DataType {
  title: string;
  url?: string;
  description?: string;
  cover?: string;
}

export default function CoverCard({ data }: { data: DataType }) {
  return (
    <Link
      href={data?.url || ""}
      className="overflow-hidden h-48 md:h-56 relative"
    >
      <div className="absolute z-10 h-full w-full bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVQImU3IMREAIAgAwJfNkQCEsH8cijjpMf6vnXlQaIiJFx+omEBfmqIEZLe2jzcAAAAASUVORK5CYII=')] object-cover" />
      <Image
        src={`https://cdn.jsdelivr.net/gh/LycixRemix/Image-Logs@main/xm/19700101000000.jpg`}
        alt=""
        fill
        className="rounded-md"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute bottom-2 text-white p-3 z-20">
        <h1 className="text-2xl line-clamp-1 font-bold">{data?.title}</h1>
        <div className="text-xs line-clamp-1 font-bold">
          {data?.description}
        </div>
      </div>
    </Link>
  );
}
