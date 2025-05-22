import SectionTitle from "../../components/atoms/SectionTitle";
import { PUBLIC_URL } from "../../config";

export default function CoChairmen() {
  const members = [
    {
      name: "Dr. Ashok Joshi",
      title: "Chairman",
      affiliation:
        "Founder, Microlin Technologies, USA & Founder, Clean Joule, USA",
      image: `${PUBLIC_URL}imgs/committees/Dr.-Ashok-Joshi.jpg`,
    },
    {
      name: "Prof. Dr. R. M. Chitnis",
      title: "Co-Chairman",
      affiliation: "Vice Chancellor, MIT-WPU",
      image: `${PUBLIC_URL}imgs/committees/Prof-Dr-RM-Chitnis.jpg`,
    },
    {
      name: "Prof. Dr. Prasad Khandekar",
      title: "Co-Chairman",
      affiliation: "Chief Academic Officer, MIT-WPU",
      image: `${PUBLIC_URL}imgs/committees/Prof-Dr-Prasad-Khandekar.png`,
    },
    {
      name: "Dr. Sanjay Kamtekar",
      title: "Secretary",
      affiliation:
        "Provost, Internationalization, MIT-WPU | Former VP, Global Marketing & Strategy, CAMECA, USA",
      image: `${PUBLIC_URL}imgs/committees/Dr-Sanjay-Kamtekar.jpg`,
    },
  ];

  // Split into two rows
  const firstRow = members.slice(0, 2);
  const secondRow = members.slice(2, 4);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionTitle title="Chairman, Co-Chairmen & Secretary" />

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {[firstRow, secondRow].map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-6 w-full mb-6"
            >
              {row.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden w-[260px] sm:w-[280px] md:w-[300px] transition transform hover:shadow-xl hover:-translate-y-1 duration-300"
                >
                  <div className="aspect-square relative">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-blue-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 mb-2">
                      {member.title}
                    </p>
                    {member.affiliation && (
                      <p className="text-gray-600 text-sm">
                        {member.affiliation}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
