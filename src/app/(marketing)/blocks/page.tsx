import { BlockTitle } from '@/components/layout/main-title'

export const metadata = {
  title: 'Testimonial Components Page',
}

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

export default function TestimonialBlocksPage() {
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <div className="container mx-auto pt-20 text-center">
        <div className="mb-20">
          <BlockTitle.Wrapper>
            <BlockTitle.Header elementType="h1" className="custom-header-class">
              Lorem Ipsum Header
            </BlockTitle.Header>

            <BlockTitle.Title elementType="h2" className="custom-title-class">
              Lorem Ipsum Title
            </BlockTitle.Title>

            <BlockTitle.Description
              elementType="p"
              className="custom-description-class"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </BlockTitle.Description>

            <BlockTitle.Background className="custom-background-class" />

            <BlockTitle.Separator className="custom-separator-class" />
          </BlockTitle.Wrapper>
        </div>
        <div>
          <BlockTitle.Header elementType="h1">Custom Header</BlockTitle.Header>
          <BlockTitle.Title elementType="span">Custom Title</BlockTitle.Title>
        </div>
        <div>
          <BlockTitle.Header elementType="h1">Custom Header</BlockTitle.Header>
          <BlockTitle.Title elementType="span">Custom Title</BlockTitle.Title>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <p>Here we go!!</p>
      </div>
    </div>
  )
}
