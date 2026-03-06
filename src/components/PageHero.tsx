interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-navy text-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-[2.5rem] lg:text-[3.5rem] font-bold leading-[1.1] max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-[17px] text-white/50 max-w-2xl mt-6 leading-[1.7]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
