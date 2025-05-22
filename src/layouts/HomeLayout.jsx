import { Outlet } from "react-router-dom"
import Navbar from "../components/molecules/Navbar"
import Footer from "../components/molecules/Footer"
import HeroSection from "../components/organisms/HeroSection"

function HomeLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar transparent={true} />
      <HeroSection />

      {/* Page-wide padding starts here */}
      <main className="flex-grow px-6 md:px-12 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default HomeLayout
