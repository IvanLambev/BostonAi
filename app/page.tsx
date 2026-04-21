import Navbar from '@/components/navbar'
import Hero from '@/components/sections/hero'
import Problem from '@/components/sections/problem'
import Solution from '@/components/sections/solution'
import HowItWorks from '@/components/sections/how-it-works'
import UseCases from '@/components/sections/use-cases'
import Security from '@/components/sections/security'
import Pricing from '@/components/sections/pricing'
import Testimonials from '@/components/sections/testimonials'
import FinalCta from '@/components/sections/final-cta'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <UseCases />
      <Security />
      <Pricing />
      <Testimonials />
      <FinalCta />
      <Footer />
    </main>
  )
}
