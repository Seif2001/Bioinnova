import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import CoreValues from "../components/CoreValues"
import MissionVision from "../components/MissionVision"
import Footer from "../components/Footer"
import ContactUs from "../components/ContactUs"
export default function LandingPage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <MissionVision/>
      <CoreValues/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}