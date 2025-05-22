import { ArrowRight } from "lucide-react";
import SectionTitle from "../atoms/SectionTitle";
import { motion } from "framer-motion";
import { PUBLIC_URL } from '../../config';

// Sample copyright-free images from Unsplash
const themeImages = [
  `${PUBLIC_URL}themes/Ai.jpeg`,
  `${PUBLIC_URL}themes/Advanced Materials and Processing.jpeg`,
  `${PUBLIC_URL}themes/Digital Transformations.jpg`,
  `${PUBLIC_URL}themes/Health Care.jpg`,
  `${PUBLIC_URL}themes/Premise.jpeg`,
];

const themes = [
  {
    title: "Artificial Intelligence",
    icon: "🧠",
    image: themeImages[0],
    topics: [
      "Ethical AI Frameworks, Regulations, and Governance",
      "AI for Social Good and Sustainability",
      "AI for Affordable Healthcare and Agriculture",
      "AI for Materials (Energy, Semiconductors, Quantum, etc.) & Technology",
      "AI and related Future Jobs",
      "Generative AI and IPR Laws",
      "Life after DeepSeek",
    ],
  },
  {
    title: "Advanced Materials and Processing",
    icon: "⚛️",
    image: themeImages[1],
    topics: [
      "Functional, Smart, and Intelligent Materials (incl. Polymers, Composites, and Alloys)",
      "Quantum Materials",
      "Biomaterials",
      "Opto-Photonic Materials",
      "Strategic Materials",
      "Semiconductor Materials",
      "Affordable Energy Materials",
      "Green Processing Technologies",
      "n-Dimensional Printing",
      "Materials Simulations",
    ],
  },
  {
    title: "Digital Transformations",
    icon: "💻",
    image: themeImages[2],
    topics: [
      "Grid Technology",
      "Quantum Computing",
      "Blockchain Technology",
      "Remote Sensing Technology",
      "Cyber Security",
      "Digital Inclusion and ICT for Development",
      "Tactile Internet and Digital Twin",
      "Next Generation Mobility",
      "Automation in Farming",
      "Climate Solutions (Mitigation)",
    ],
  },
  {
    title: "Health Care, Pharma, and Biotechnology",
    icon: "🧬",
    image: themeImages[3],
    topics: [
      "Health Equity",
      "Diseases and Disorders",
      "Advanced Diagnostics",
      "Advanced Therapeutic Approaches (incl. Ayurveda and Indian Knowledge Systems)",
      "High Technology led Affordable Health Care (Bioprinting, Wearables, Devices)",
      "Bioinformatics (Next-gen Sequencing) and Drug Discoveries",
      "Digital Health (Telemedicine, Digital Therapeutics, etc.)",
    ],
  },
  {
    title: "Premise of Nobel Prize Work",
    icon: "🏆",
    image: themeImages[4],
    topics: [
      "Physics",
      "Chemistry",
      "Medicine",
      "Queen Elizabeth Prize for Engineering",
    ],
  },
];

export default function ThemesGrid({ preview = false }) {
  const displayThemes = preview ? themes.slice(0, 3) : themes;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Conference Themes"
          subtitle="The NSRTC 2025 is structured around the following five broad themes"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayThemes.map((theme, index) => (
            <motion.div
  key={index}
  whileHover={{
    y: -8,
    scale: 1.02,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
    backgroundColor: 'rgba(30, 40, 90, 10)' , // dark blue background
  }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
>

  {/* Image */}
  <div className="h-70 overflow-hidden">
    <img
      src={theme.image}
      alt={`${theme.title} image`}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Title + Topics */}
  <div className="p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="relative inline-block text-xl font-extrabold text-blue-800 group-hover:text-white transition-colors duration-300
  before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-0
  before:bg-white before:transition-all before:duration-300 group-hover:before:w-full">
        {theme.title}
      </h3>
      <span className="text-2xl font-bod group-hover:text-white">{theme.icon}</span>
    </div>
    <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 text-sm leading-relaxed group-hover:text-white">
      {theme.topics.map((topic, idx) => (
        <li key={idx}>{topic}</li>
      ))}
    </ul>
  </div>
</motion.div>

          ))}
        </div>

        {preview && (
          <div className="text-center mt-10">
            <a
              href={`${PUBLIC_URL}nsrtc/themes`}
              className="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              View All Themes <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
