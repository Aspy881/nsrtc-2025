import SectionTitle from "../components/atoms/SectionTitle";
import { Mail, Phone, MapPin } from "lucide-react";
import { PUBLIC_URL } from "../config";

export default function Contact() {
  const contactImages = [
    {
      name: "Prof. Dr. Murthy Chavali",
      title: "Dean, Research and Development",
      affiliation: "MIT-WPU",
      image: `${PUBLIC_URL}imgs/convener/Prof-Dr-Murthy-Chavali.jpeg`,
    },
    {
      name: "Prof. Dr. Bharat B. Kale, FRSC",
      title: "Director, Center for Materials Science, MIT-WPU",
      affiliation: "Former Director, C-MET, Pune",
      image: `${PUBLIC_URL}imgs/convener/Prof-Dr-Bharat-Kale.jpeg`,
    },
    {
      name: "Prof. Dr. Siddharth Chakrabarti",
      title: "Dean, School of Engineering and Technology",
      affiliation: "MIT-WPU",
      image: `${PUBLIC_URL}imgs/convener/Siddharth-Chakrabarti.webp`,
    },
    {
      name: "Prof. Dr. Anup Kale",
      title: "Dean In-charge, School of Science and Environmental Studies",
      affiliation: "MIT-WPU",
      image: `${PUBLIC_URL}imgs/convener/Prof-Dr-Anup-Kale.jpeg`,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Contact Us"
          subtitle="Have questions about NSRTC 2025? Get in touch with our team for more information."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-md p-10">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">
              Contact Information
            </h2>
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <MapPin className="h-7 w-7 text-blue-800 mt-1" />
                <div>
                  <h3 className="font-bold">Address:</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Dr. Vishwanath Karad MIT World Peace University
                    <br />
                    S.No.124, Paud Road, Kothrud
                    <br />
                    Pune, Maharashtra 411038
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-7 w-7 text-blue-800 mt-1" />
                <div>
                  <h3 className="font-semibold">Email:</h3>
                  <a
                    className="text-gray-700 leading-relaxed"
                    href="mailto:nsrtc2025@mitwpu.edu.in"
                  >
                    nsrtc2025@mitwpu.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-7 w-7 text-blue-800 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    +91 83093 37736
                    <br />
                    +91 94230 14560
                    <br />
                    +91 92302 30392
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0993776179546!2d73.81301907510633!3d18.51795038258125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc0f3baaaab%3A0x2bd9f09a2c1ff8de!2sMIT%20World%20Peace%20University!5e0!3m2!1sen!2sin!4v1715612762386!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MIT World Peace University Location"
                className="w-full h-[350px] border-0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Image Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {contactImages.map((person, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl shadow-md p-4"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 mx-auto object-cover rounded-full mb-4"
              />
              <h4 className="text-lg font-bold text-blue-800">{person.name}</h4>
              <p className="text-sm text-gray-600">{person.title}</p>
              <p className="text-sm text-gray-500">{person.affiliation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
