import { Outlet } from "react-router-dom"
import Navbar from "../components/molecules/Navbar"
import Footer from "../components/molecules/Footer"

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mt-18 px-6 md:px-12 py-13">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
