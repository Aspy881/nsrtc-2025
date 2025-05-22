import SectionTitle from "../../components/atoms/SectionTitle";

export default function AboutNSRTC() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="About NSRTC"
          subtitle="National Scientists Round Table Conference for Viksit Bharat 2047"
        />

        {/* About Box */}
        <div className="bg-[#102A71] text-white rounded-lg shadow-md p-8 mb-8 transition duration-500 ease-in-out hover:shadow-xl hover:-translate-y-1">
          <h2 className="text-2xl font-bold mb-4 hover:underline underline-offset-4 transition duration-300">
            National Scientists Round Table Conference
          </h2>
          <p className="mb-4">
            The National Scientists Round Table Conference (NSRTC) is a premier
            scientific gathering that brings together leading scientists,
            researchers, academicians, and industry experts from across India to
            discuss cutting-edge research, technological advancements, and
            collaborative opportunities.
          </p>
          <p className="mb-4">
            The First National Scientists Round Table Conference (NSRTC 2024)
            took place on July 19-21, 2024, and received an overwhelming
            response, attracting 116 top scientists from across the country.
          </p>
          <p>
            The Second NSRTC 2025 will be held on July 18-20, 2025, at MIT-WPU,
            Pune.
          </p>
        </div>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {["Vision", "Mission"].map((item, i) => (
            <div
              key={i}
              className="bg-[#102A71] text-white rounded-lg shadow-md p-8 transition duration-500 ease-in-out hover:shadow-xl hover:-translate-y-1"
            >
              <h2 className="text-2xl font-bold mb-4 hover:underline underline-offset-4 transition duration-300">
                {item}
              </h2>
              <p>
                {item === "Vision"
                  ? "To create a dynamic platform that fosters scientific collaboration, innovation, and knowledge exchange among scientists and researchers, contributing to India's scientific advancement and technological self-reliance in alignment with the vision of Viksit Bharat."
                  : "To facilitate meaningful dialogue and collaboration among scientists across disciplines, promote interdisciplinary research approaches, showcase innovative scientific work, and develop actionable strategies to address national priorities through science and technology."}
              </p>
            </div>
          ))}
        </div>

        {/* Key Goals */}
        <div className="bg-[#102A71] text-white rounded-lg shadow-md p-8 transition duration-500 ease-in-out hover:shadow-xl hover:-translate-y-1">
          <h2 className="text-2xl font-bold mb-6 hover:underline underline-offset-4 transition duration-300">
            Key Goals
          </h2>
          <ul className="space-y-6">
            {[
              {
                title: "Inspiring the Next Generation",
                desc: "To encourage young scientists and researchers to engage deeply with fundamental research, recognizing its importance in advancing science and technology.",
              },
              {
                title: "Fostering Collaboration",
                desc: "To create platforms for interdisciplinary and international dialogues, enabling diverse perspectives to co-create innovation and smart solutions.",
              },
              {
                title: "Advancing Frontier Technologies",
                desc: "To explore and develop cutting-edge technologies that prioritize equity and sustainability, aiming for a Viksit Bharat by 2047 that serves as a global role model.",
              },
              {
                title: "Promoting Sustainability",
                desc: "To ensure that new discoveries and technologies are aligned with sustainable practices to meet the challenges of not only our time, but also beyond and the future.",
              },
            ].map((goal, index) => (
              <li className="flex" key={index}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-[#102A71] flex items-center justify-center font-bold mr-4 transition transform duration-300 hover:scale-110">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold mb-1 hover:underline underline-offset-4 transition duration-300">
                    {goal.title}
                  </h3>
                  <p>{goal.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
