import Navbar from '@/components/Navbar'
import HeroCarousel from '@/components/HeroCarousel'
import FeaturesBar from '@/components/FeaturesBar'
import AboutSection from '@/components/AboutSection'
import ProductsSection from '@/components/ProductsSection'
import BrandsSection from '@/components/BrandsSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import SustainabilitySection from '@/components/SustainabilitySection'
import CEOMessage from '@/components/CEOMessage'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroCarousel />
      <FeaturesBar />
      <AboutSection />
      <ProductsSection />
      <BrandsSection />
      <WhyChooseUs />
      <SustainabilitySection />
      <CEOMessage />
      <ContactSection />
      <Footer />
    </main>
  )
}
