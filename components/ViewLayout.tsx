export default function ViewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-6xl mx-auto py-6 px-4 min-h-screen">{children}</div>;
}
