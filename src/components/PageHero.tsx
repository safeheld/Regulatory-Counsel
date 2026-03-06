interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-navy text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-display-mobile lg:text-display max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-body-lg text-white/60 max-w-2xl mt-6">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
