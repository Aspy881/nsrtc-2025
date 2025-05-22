import VideoBackground from "./VideoBackground";
import { PUBLIC_URL } from '../../config';

export default function HeroSection() {
  return (
    <VideoBackground
      videoSrc={`${PUBLIC_URL}videos/conference-bg.mp4`}
      fallbackImageSrc={`${PUBLIC_URL}images/hero-bg.jpg`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        {/* Text Content on the Left */}
        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 transition duration-500 ease-in-out transform hover:scale-105">
            National Scientists Round Table Conference (NSRTC 2025)
          </h1>
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-8 transition duration-500">
            for Viksit Bharat 2047
          </h3>
          <p className="text-xl md:text-2xl text-yellow-500 font-semibold mb-6">
            18th, 19th & 20th July 2025
          </p>
          <p className="text-lg md:text-xl text-white">
            Dr. Vishwanath Karad MIT World Peace University, Pune, Bharat
          </p>
          <div className="mt-12">
            <a
              href={`${PUBLIC_URL}registration`}
              className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600 transition duration-300 text-lg"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Logo on the Right */}
        <div className="mt-12 md:mt-0 md:w-1/3 flex justify-center md:justify-center">
          <img
            src={`${PUBLIC_URL}images/nsrtc-logo.png`}
            alt="NSRTC Logo"
            className="h-55 w-auto transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </VideoBackground>
  );
}
