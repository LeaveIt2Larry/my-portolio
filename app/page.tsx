import { ContactForm } from '@/components/contact-form'
import { About } from '@/templates/about'
import { ContactShell } from '@/templates/contact-shell'
import { Hero } from '@/templates/hero'
import { Projects } from '@/templates/projects'

export default function HomePage() {
  return (
    <main>
      <div className='min-h-screen  border-yellow-500 border-4'>
        <Hero />
      </div>
      <Projects />
      <About />
      <ContactShell>
        <ContactForm />
      </ContactShell>
    </main>
  )
}
