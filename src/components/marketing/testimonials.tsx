import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'Nostrud tempor sunt fugiat. Dolor in sint dolore labore non occaecat adipisicing Lorem labore ullamco enim excepteur. In fugiat Lorem sit velit id veniam esse eiusmod non ea voluptate cupidatat reprehenderit ullamco dolore. Mollit laborum occaecat aliquip.',
      name: 'Rose Roberson',
      role: 'CEO at Company',
      imgSrc: 'https://i.pravatar.cc/120?img=1',
    },
    {
      quote:
        'Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation. Culpa consectetur dolor pariatur commodo aliqua amet tempor nisi enim deserunt elit cillum.',
      name: 'Chace Rodgers',
      role: 'CEO at Company',
      imgSrc: 'https://i.pravatar.cc/120?img=10',
    },
    {
      quote:
        'Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.',
      name: 'Cornelius Sheppard',
      role: 'CEO at Company',
      imgSrc: 'https://i.pravatar.cc/120?img=9',
    },
    {
      quote:
        'Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.',
      name: 'Chace Rodgers',
      role: 'CEO at Company',
      imgSrc: 'https://i.pravatar.cc/120?img=7',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.',
      name: 'Cornelius Sheppard',
      role: 'CEO at Company',
      imgSrc: 'https://i.pravatar.cc/120?img=8',
    },
    {
      quote:
        'Consectetur voluptate pariatur dolore laboris. Eiusmod dolor aute ut nulla pariatur officia consequat aute amet exercitation.',
      name: 'Chace Rodgers',
      role: 'CEO at Company',
      imgSrc: 'https://i.pravatar.cc/120?img=2',
    },
    {
      quote:
        'Id duis velit enim officia ad nisi incididunt magna ex dolor minim deserunt dolor.',
      name: 'Cornelius Sheppard',
      role: 'CEO at Company',
      imgSrc: 'https://i.pravatar.cc/120?img=3',
    },
  ]

  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:gap-y-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="relative mb-2 bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text text-base font-extrabold text-transparent">
            Testimonials
          </h2>
          <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            What our customers are saying.
          </p>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Proident sunt exercitation minim laborum enim laboris labore esse.
          </p>
        </div>

        <div className="column-1 gap-8 space-y-8 md:columns-2 lg:columns-3 xl:columns-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="break-inside-avoid">
              <div className="relative divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-200 dark:divide-gray-800 dark:bg-gray-900 dark:ring-gray-800">
                <div className="flex flex-col px-4 py-5 sm:p-6">
                  <q className="text-gray-600 dark:text-gray-300">
                    {testimonial.quote}
                  </q>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <Image
                        className="h-10 w-10 rounded-full"
                        height={40}
                        width={40}
                        alt={testimonial.name}
                        src={testimonial.imgSrc}
                        loading="lazy"
                      />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
