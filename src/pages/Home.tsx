import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import ArtistGallery from "@/components/ArtistGallery"
import JoinNetwork from "@/components/JoinNetwork"
import Footer from "@/components/Footer"

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <ArtistGallery />
      <JoinNetwork />
      <Footer />
    </div>
  )
}

export default Home
