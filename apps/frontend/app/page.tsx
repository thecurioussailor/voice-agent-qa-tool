import Hero from "@/components/landing/Hero"
import Navbar from "@/components/landing/Navbar"
import Features from "@/components/landing/Features"
import TechStack from "@/components/landing/TechStack"
import Footer from "@/components/landing/Footer"
import UseCases from "@/components/landing/UseCases"

const page = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Features />
      <UseCases />
      <TechStack />
      <Footer />
    </section>
  )
}

export default page