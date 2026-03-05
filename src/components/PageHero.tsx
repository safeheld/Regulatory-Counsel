interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-navy text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-300 max-w-3xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
