import SectionTitle from "../../components/atoms/SectionTitle";
import { PUBLIC_URL } from '../../config';

export default function Patrons() {
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

  const firstRow = patrons.slice(0, 3);
  const secondRow = patrons.slice(3);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionTitle title="Patrons" />

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {/* First row - 3 members */}
          <div className="flex flex-wrap justify-center gap-6 w-full lg:w-[75%]">
            {firstRow.map((member, index) => (
              <PatronCard key={index} {...member} />
            ))}
          </div>

          {/* Second row - 2 members */}
          <div className="flex flex-wrap justify-center gap-6 w-full lg:w-[50%] mt-6">
            {secondRow.map((member, index) => (
              <PatronCard key={index + 3} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PatronCard({ image, name, title, affiliation }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[300px]">
      {image && (
        <div className="aspect-square relative">
          <img
            src={image || `${PUBLIC_URL}placeholder.svg?height=200&width=200`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-blue-800 mb-1">{name}</h3>
        {title && <p className="text-blue-600 font-medium mb-1">{title}</p>}
        {affiliation && <p className="text-gray-600 text-sm">{affiliation}</p>}
      </div>
    </div>
  );
}
