import ThemesGrid from "../components/organisms/ThemesGrid";
import ScheduleTimeline from "../components/organisms/ScheduleTimeline";
import QuoteSlider from "../components/organisms/QuoteSlider";
import VideoSlider from "../components/organisms/VideoSlider";
import SectionTitle from "../components/atoms/SectionTitle";
import { ArrowRight } from "lucide-react";
import { PUBLIC_URL } from '../config';

export default function Home() {
  const patrons = [
    {
      name: "Padma Vibhushan Dr. Raghunath A. Mashelkar",
      title: "Former Director General",
      affiliation: "CSIR, New Delhi",
      image: `${PUBLIC_URL}imgs/patrons/Dr. Raghunath A. Mashelkar.jpg`,
    },
    {
      name: "Padma Bhushan Dr. Vijay P. Bhatkar",
      title: "Founder Director, C-DAC",
      affiliation: "Former Chancellor, Nalanda University",
      image: `${PUBLIC_URL}imgs/patrons/Dr. Vijay P. Bhatkar.jpg`,
    },
    {
      name: "Padma Shri Prof. Dr. Ganapati D. Yadav",
      title: "Former Vice-Chancellor",
      affiliation: "ICT Mumbai",
      image: `${PUBLIC_URL}imgs/patrons/Prof. Dr. Ganapati D. Yadav.jpeg`,
    },
    {
      name: "Revered Prof. Dr. Vishwanath D. Karad",
      title: "Founder President, MIT-WPU",
      affiliation: "Creator-World Peace Dome, Pune",
      image: `${PUBLIC_URL}imgs/patrons/Prof. Dr. Vishwanath D. Karad.jpeg`,
    },
    {
      name: "Dr. Rahul V. Karad",
      title: "Executive President",
      affiliation: "MIT-WPU",
      image: `${PUBLIC_URL}imgs/patrons/Dr. Rahul V. Karad.jpeg`,
    },
  ];
  
  return (
    <>
      {/* Hero section is handled by HomeLayout */}

      {/* Video Slider */}
      <VideoSlider preview={true} />

      {/* About the Conference */}
      <section className="relative py-16 bg-white overflow-hidden">
  {/* Background Image Layer */}
  <div className="absolute inset-0 bg-[url('/nsrtc/images/scitech-bg.png')] bg-cover bg-center opacity-17 pointer-events-none"></div>

  {/* Content Layer */}
  <div className="relative z-10 container mx-auto px-4">
    <SectionTitle
      title="About The Conference"
      subtitle="Join us for the 2nd National Scientists Round Table Conference"
    />
    <div className="max-w-4xl mx-auto text-justify">
            <p className="text-[#212121] mb-6">
              The Second National Scientists Round Table Conference (NSRTC 2025)
              will be held on July 18-20, 2025, at Dr. Vishwanath Karad MIT
              World Peace University, Pune. The purpose of this conference is to
              bring together leading academic scientists, researchers, and
              scholars to exchange and share their experiences and research
              results across all aspects of Physical Sciences, Life Sciences,
              and Engineering & Technology.
            </p>
            <p className="text-[#1e1d1d] mb-6">
              This forum aims to provide essential insights into the trajectory
              of future research, promoting holistic and synergistic development
              in the country. Renowned scientists such as Dr. R. A. Mashelkar,
              Dr. Vijay P. Bhatkar, Dr. Shekhar Mande, and Prof. Dr. G. D.
              Yadav, along with principal scientists and directors from national
              and regional laboratories, will participate in this pivotal round
              table conference.
            </p>
            <p className="text-[#1c1c1c]">
              The NSRTC 2025 aims to galvanize the scientific community by
              fostering innovative ideas and directions that inspire researchers
              and students to embrace Fundamental Research as the foundation of
              progress across all scientific disciplines. It seeks to facilitate
              interdisciplinary and international collaborations that can lead
              to groundbreaking discoveries and new developmental paradigms.
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href={`${PUBLIC_URL}nsrtc/about`}
                className="inline-flex items-center px-6 py-3 bg-[#2153c9] text-white rounded-md hover:bg-[#2a3348] transition duration-300"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Patrons - Horizontal Scroll */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Conference Patrons"
            subtitle="Visionaries and guiding lights of NSRTC 2025"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
            {patrons.map((patron, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-square relative">
                  <img
                    src={
                      patron.image || `${PUBLIC_URL}placeholder.svg?height=300&width=300`
                    }
                    alt={patron.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-base font-bold text-[#1f2a44] mb-1">
                    {patron.name}
                  </h3>
                  <p className="text-sm text-[#e63946] font-medium mb-1">
                    {patron.title}
                  </p>
                  <p className="text-sm text-[#4a4a4a]">{patron.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About MIT-WPU */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={`${PUBLIC_URL}mit-campus.jpg`}
                alt="MIT-WPU Campus"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2 text-justify">
              <h2 className="text-3xl font-bold text-[#1f2a44] mb-4">
                About MIT-WPU
              </h2>
              <p className="text-[#4a4a4a] mb-4">
                With a legacy of over 40 years in promoting academic excellence,
                Dr. Vishwanath Karad MIT World Peace University (MIT-WPU) is
                recognized as one of India's premier institutions for higher
                learning, boasting a global alumni network of more than 100,000.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                The university offers diploma, undergraduate, postgraduate, and
                Ph.D. degrees across engineering, sciences, liberal arts, fine
                arts, commerce, economics, management, and law. It serves
                approximately 23,000 students annually, taught by around 1,000
                faculty members.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                MIT-WPU features robust research infrastructure with advanced
                labs and emphasizes innovation in materials science, green
                technologies, energy storage, pharmaceuticals, AI/ML, and core
                engineering disciplines.
              </p>
              <p className="text-[#4a4a4a] mb-4">
                It houses 23 Centers of Excellence and an Incubation Center that
                fosters interdisciplinary research and startup ventures.
                Students enjoy a holistic educational experience with yoga,
                meditation, sports, and cultural activities.
              </p>
              <p className="text-[#4a4a4a]">
                MIT-WPU ranks 31st in Times B-School (Top Private Universities),
                falls within the NIRF 51-100 Innovation band (2023), ranks 72nd
                among Pharmacy Institutes (2024), and 116th in Engineering —
                placing it among India's top 200 universities.
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://mitwpu.edu.in"
              className="inline-flex items-center px-6 py-3 bg-[#2153c9] text-white rounded-md hover:bg-[#2a3348] transition duration-300"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Quote Slider */}
      <QuoteSlider preview={true} />

      {/* Themes */}
      <ThemesGrid preview={true} />

      {/* Schedule */}
      <ScheduleTimeline preview={true} />

      {/* Register Call-to-Action */}
      <section className="py-16 bg-[#870a14] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us at NSRTC 2025
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10">
            Be part of this prestigious gathering of scientists and researchers
            working towards Viksit Bharat 2047. Register now to secure your
            place.
          </p>
          <a
            href={`${PUBLIC_URL}registration`}
            className="inline-block px-8 py-4 bg-white text-[#1f2a44] font-bold rounded-md hover:bg-[#f1f1f1] transition duration-300 text-lg"
          >
            Register Now
          </a>
        </div>
      </section>
    </>
  );
}
