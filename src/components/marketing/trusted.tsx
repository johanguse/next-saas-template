import CarouselLogos from '@/components/carousel/carousel-logos'

export default function Trusted() {
  return (
    <section
      className="animate-fade-up bg-gray-50 py-16 text-zinc-500 opacity-0 dark:bg-black dark:text-zinc-400 dark:opacity-50"
      style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
    >
      <div className="container mx-auto">
        <h2 className="text-center text-sm font-semibold uppercase">
          Trusted by
        </h2>

        <div className="mx-auto my-7 flex w-full flex-wrap items-center justify-center gap-10 gap-y-8 lg:max-w-6xl lg:gap-14">
          <CarouselLogos />
        </div>
      </div>
    </section>
  )
}
