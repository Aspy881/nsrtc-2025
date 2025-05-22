import SectionTitle from "../../components/atoms/SectionTitle";
import { PUBLIC_URL } from '../../config';

export default function Convener() {
  const allConveners = [
    {
      name: "Prof. Dr. Murthy Chavali",
      title: "Dean, Research and Development",
      affiliation: "MIT-WPU",
      image: `${PUBLIC_URL}imgs/convener/Prof. Dr.  Murthy Chavali.jpeg`,
    },
    {
      name: "Prof. Dr. Bharat B. Kale, FRSC",
      title: "Director, Center for Materials Science, MIT-WPU",
      affiliation: "Former Director, C-MET, Pune",
      image: `${PUBLIC_URL}imgs/convener/Prof. Dr. Bharat B. Kale.jpeg`,
    },
    {
      name: "Prof. Dr. Siddharth Chakrabarti",
      affiliation: "MIT-WPU",
      title: "Dean, School of Engineering and Technology",
      image: `${PUBLIC_URL}imgs/convener/Siddharth-Chakrabarti.webp`,
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionTitle title="Convener & Co-Convener" />

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {allConveners.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden w-[260px] sm:w-[280px] md:w-[300px]"
            >
              {/* Image */}
              <div className="aspect-square relative">
                <img
                  src={member.image || `${PUBLIC_URL}placeholder.svg`}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name, title, and affiliation below image */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-blue-800 mb-1">
                  {member.name}
                </h3>
                {member.title && (
                  <p className="text-sm text-blue-700 font-medium mb-1">
                    {member.title}
                  </p>
                )}
                {member.affiliation && (
                  <p className="text-gray-600 text-sm">{member.affiliation}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
