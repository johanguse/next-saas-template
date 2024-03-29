import { routes } from './routes'

export const NavDesktop = () => {
  return (
    <ul className="hidden gap-5 text-sm lg:flex lg:items-center">
      {routes.map((route) => {
        const { Icon, href, title } = route
        return (
          <li key={title}>
            <a
              href={href}
              className="flex items-center gap-1 transition-all hover:text-neutral-400"
            >
              <Icon />
              {title}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
