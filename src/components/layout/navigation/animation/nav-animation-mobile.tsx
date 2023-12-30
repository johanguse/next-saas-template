'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Squash as Hamburger } from 'hamburger-react'
import { useClickAway } from 'react-use'

import { routes } from './routes'

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef(null)

  useClickAway(ref, () => setOpen(false))

  return (
    <div ref={ref} className="bg-neutral-950 lg:hidden">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="shadow-4xl fixed inset-x-0 top-[3.5rem] border-b  bg-neutral-950 p-5 pt-0"
          >
            <ul className="grid gap-2">
              {routes.map((route, idx) => {
                const { Icon } = route

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-[#da6cae6a] p-[0.08rem]"
                  >
                    <a
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        'flex w-full items-center justify-between rounded-xl bg-neutral-950 p-5'
                      }
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                      <Icon className="text-xl" />
                    </a>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
