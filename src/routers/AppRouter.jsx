import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AboutNSRTC from "../pages/About/AboutNSRTC";
import ThemesPage from "../pages/About/ThemesPage";
import SchedulePage from "../pages/About/SchedulePage";
import PreviousConferences from "../pages/About/PreviousConferences";
import Downloadables from "../pages/About/Downloadables";
import Patrons from "../pages/Committees/Patrons";
import CoChairmen from "../pages/Committees/CoChairmen";
import Advisory from "../pages/Committees/Advisory";
import Convener from "../pages/Committees/Convener";
import OrganizingCommittee from "../pages/Committees/OrganizingCommittee";
import OrganizingTeam from "../pages/Committees/team";
import Speakers from "../pages/Speakers";
import Registration from "../pages/Registration";
import Contact from "../pages/Contact";
import SponsorshipPage from "../pages/Sponsorship";

function AppRouter() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<MainLayout />}>
        {/* NSRTC Routes */}
        <Route path="/about/aboutUs" element={<AboutNSRTC />} />
        <Route path="/about/themes" element={<ThemesPage />} />
        <Route path="/about/schedule" element={<SchedulePage />} />
        <Route path="/about/previous" element={<PreviousConferences />} />
        <Route path="/about/downloadables" element={<Downloadables />} />

        {/* Committee Routes */}
        <Route path="/committees/patrons" element={<Patrons />} />
        <Route path="/committees/co-chairmen" element={<CoChairmen />} />
        <Route path="/committees/advisory" element={<Advisory />} />
        <Route path="/committees/convener" element={<Convener />} />
        <Route
          path="/committees/organizing"
          element={<OrganizingCommittee />}
        />
        <Route path="/committees/team" element={<OrganizingTeam />} />

        {/* Other Routes */}
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/sponsorship" element={<SponsorshipPage />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
