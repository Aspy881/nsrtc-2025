import VideoBackground from "./VideoBackground";
import { PUBLIC_URL } from '../../config';

export default function HeroSection() {
  return (
    <VideoBackground
  videoSrc={`${PUBLIC_URL}videos/conference-bg.mp4`}
  fallbackImageSrc={`${PUBLIC_URL}images/hero-bg.jpg`}
>
  <div className="w-full flex flex-col items-center text-center md:px-20 py-5">
    {/* Text Content */}
    <div className="w-full max-w-5xl">
      <h1 className="text-2xl md:text-5xl font-bold text-white/85 leading-tight mb-4 transition duration-500 ease-in-out transform hover:scale-105">
        National Scientists Round Table Conference (NSRTC 2025)
      </h1>
      <h3 className="text-xl md:text-4xl font-bold text-white/75 mb-8 transition duration-500">
        for Viksit Bharat 2047
      </h3>
      <p className="text-xl md:text-2xl text-yellow-500 font-semibold mb-6">
        18th, 19th & 20th July 2025
      </p>
      <p className="text-lg md:text-xl text-white/70">
        Dr. Vishwanath Karad MIT World Peace University, Pune, Bharat
      </p>
    </div>

    {/* Buttons */}
    <div className="mt-22 flex flex-col sm:flex-row justify-center items-center gap-6">
      <a
        href="/registration"
        className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600 transition duration-300 text-lg"
      >
        Register Now
      </a>
      <a
        href="/Downloadables/NSRTC Brochure 2025-Ver 23.pdf"
        download
        className="px-8 py-4 bg-white text-black font-bold rounded-md hover:text-blue-900 transition duration-300 text-lg border border-gray-300"
      >
        Conference Brochure
      </a>
    </div>
  </div>
</VideoBackground>

  );
}
