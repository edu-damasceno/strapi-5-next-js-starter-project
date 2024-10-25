interface PageTitleData {
  title: string;
}

export function PageTitle(data: Readonly<PageTitleData>) {
  if (!data) return null;
  const { title } = data;

  return (
    <section className="text-3xl md:text-4xl lg:text-5xl font-bold text-white py-4 md:py-8 transition-all duration-300 z-10 relative bg-black/90">
      <h1 className="container">{title}</h1>
    </section>
  );
}
