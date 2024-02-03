'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { Logo } from '@/components/logo'
import { linkVariants, navVariants } from '@/components/navigation'
import { ThemeToggleButton } from '@/components/theme-toggle-button'

const AnimatedLink = motion(Link)
AnimatedLink.defaultProps = { className: 'hover:text-primary-brand nav-link' }

export function Navigation() {
  return (
    <motion.header
      variants={navVariants}
      initial='hidden'
      animate='visible'
      className='absolute px-12 inset-x-0 top-0 z-50 hidden h-28 w-full items-center justify-between md:flex dark:bg-neutral-900/80 bg-neutral-200/90'
    >
      <AnimatedLink href='/#' variants={linkVariants} className=''>
        <Logo />
      </AnimatedLink>

      <nav className='flex items-center justify-center gap-x-14 text-lg'>
        <AnimatedLink href='/#intro' variants={linkVariants}>
          Introduction
        </AnimatedLink>
        <AnimatedLink href='/#projects' variants={linkVariants}>
          Projects
        </AnimatedLink>
        <AnimatedLink href='/#about' variants={linkVariants}>
          About
        </AnimatedLink>
        <AnimatedLink href='/#contact' variants={linkVariants}>
          Contact
        </AnimatedLink>

        <motion.div variants={linkVariants}>
          <ThemeToggleButton />
        </motion.div>
      </nav>
    </motion.header>
  )
}
