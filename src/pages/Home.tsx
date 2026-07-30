import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import ArtistGallery from "@/components/ArtistGallery"
import Footer from "@/components/Footer"

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <ArtistGallery />
      <Footer />
    </div>
  )
}

export default Home
