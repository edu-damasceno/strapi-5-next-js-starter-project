interface PageTitleData {
  title: string;
}

export function PageTitle(data: Readonly<PageTitleData>) {
  if (!data) return null;
  const { title } = data;

  return (
    <section className="relative z-10 bg-black/90 py-4 text-3xl font-bold text-white transition-all duration-300 md:py-8 md:text-4xl lg:text-5xl">
      <h1 className="container">{title}</h1>
    </section>
  );
}
