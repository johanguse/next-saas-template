import { Icons } from '@/components/shared/icons'

type Route = {
  title: string
  href: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const routes: Route[] = [
  {
    title: 'Home',
    href: '#',
    Icon: Icons.billing,
  },
  {
    title: 'Explore',
    href: '#',
    Icon: Icons.billing,
  },
  {
    title: 'Pricing',
    href: '#',
    Icon: Icons.billing,
  },
  {
    title: 'About',
    href: '#',
    Icon: Icons.billing,
  },
]
