import { motion } from "framer-motion";

export default function SectionTitle({
  title,
  subtitle,
  center = true,
  light = false,
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-blue-800"
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`w-24 h-1 origin-left ${
              light ? "bg-white" : "bg-blue-800"
            } ${center ? "mx-auto" : ""} mb-6`}
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-lg ${
              light ? "text-gray-200" : "text-gray-700"
            } max-w-4xl ${center ? "mx-auto" : ""}`}
          >
            {subtitle}
          </motion.p>
        </>
      )}
    </div>
  );
}
