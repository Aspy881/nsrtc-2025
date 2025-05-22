import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import AboutNSRTC from "../pages/NSRTC/AboutNSRTC";
import ThemesPage from "../pages/NSRTC/ThemesPage";
import SchedulePage from "../pages/NSRTC/SchedulePage";
import PreviousConferences from "../pages/NSRTC/PreviousConferences";
import Downloadables from "../pages/NSRTC/Downloadables";
import Patrons from "../pages/Committees/Patrons";
import CoChairmen from "../pages/Committees/CoChairmen";
import Advisory from "../pages/Committees/Advisory";
import Convener from "../pages/Committees/Convener";
import OrganizingCommittee from "../pages/Committees/OrganizingCommittee";
import OrganizingTeam from "../pages/Committees/team";
import Speakers from "../pages/Speakers";
import Registration from "../pages/Registration";
import Contact from "../pages/Contact";

function AppRouter() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<MainLayout />}>
        {/* NSRTC Routes */}
        <Route path="/nsrtc/about" element={<AboutNSRTC />} />
        <Route path="/nsrtc/themes" element={<ThemesPage />} />
        <Route path="/nsrtc/schedule" element={<SchedulePage />} />
        <Route path="/nsrtc/previous" element={<PreviousConferences />} />
        <Route path="/nsrtc/downloadables" element={<Downloadables />} />

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
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
