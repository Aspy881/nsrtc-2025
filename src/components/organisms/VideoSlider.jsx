"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionTitle from "../atoms/SectionTitle";

const VideoSlider = () => {
  const sliderRef = useRef(null);

  const videos = [
    { id: "0FTjVjhjQ1k" },
    { id: "jOFnfLPcaj8" },
    { id: "v1fYvxEoVfs" },
    { id: "XqNvhXUJidw" },
    { id: "RcmP0UjIShE" },
  ];

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  // Auto scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 5000); // scroll every 5s

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Wisdom of Words"
          subtitle="Watch highlights and presentations from our events"
        />

        <div className="relative mt-12">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-[#2153c9]" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-[#2153c9]" />
          </button>

          {/* Video Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="min-w-[400px] md:min-w-[560px] snap-start flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={`YouTube video player ${index}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@NSRTC_MIT-WPU"
            className="inline-flex items-center px-6 py-3 bg-[#2153c9] text-white rounded-md hover:bg-[#2a3348] transition duration-300"
          >
            View All Videos <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;
