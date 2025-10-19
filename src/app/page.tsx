import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import MyStory from '@/components/sections/MyStory'
import Journey from '@/components/sections/Journey'
import PhotoGallery from '@/components/sections/PhotoGallery'
import Projects from '@/components/sections/Projects'
import AboutExchange from '@/components/sections/AboutExchange'
import BudgetBreakdown from '@/components/sections/BudgetBreakdown'
import Progress from '@/components/sections/Progress'
import HowToContribute from '@/components/sections/HowToContribute'
import Gratitude from '@/components/sections/Gratitude'
import FollowJourney from '@/components/sections/FollowJourney'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MyStory />
      <Journey />
      <PhotoGallery />
      <Projects />
      <AboutExchange />
      <BudgetBreakdown />
      <Progress />
      <HowToContribute />
      <Gratitude />
      <FollowJourney />
      <Contact />
      <Footer />
    </main>
  )
}