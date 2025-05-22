import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    text: "The idea that machines can’t do things humans can is a pure myth.",
    author: "Marvin Minsky",
    color: "text-blue-800",
  },
  {
    text: "The real problem is not whether machines think but whether men do.",
    author: "John McCarthy",
    color: "text-red-800",
  },
  {
    text: "Carbon, the basis of all known life on earth, has surprised us once again.",
    author: "Andre Geim",
    color: "text-green-800",
  },
  {
    text: "The absence of evidence is not the evidence of absence.",
    author: "Carl Sagan",
    color: "text-yellow-800",
  },
];

function QuoteSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ Image: "url('/images/quote-bg.jpg')" }}
    >
      {/* Replaced dark overlay with a subtle white gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-white/30 pointer-events-none"></div>
    
      <div className="relative container mx-auto px-4">
        <div className="relative h-40 md:h-32 text-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute top-0 left-0 right-0"
            >
              <p
                className={`text-xl md:text-2xl font-semibold ${quotes[index].color} mb-4`}
              >
                “{quotes[index].text}”
              </p>
              <p className="text-lg font-medium text-gray-700">
                — {quotes[index].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default QuoteSlider;
