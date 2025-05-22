import SectionTitle from "../../components/atoms/SectionTitle";
import {
  Download,
  FileText,
  FileImage,
  FileIcon as FilePdf,
} from "lucide-react";
import { PUBLIC_URL } from '../../config';

export default function Downloadables() {
  const resources = [
    {
      title: "Conference Brochure",
      description:
        "Complete information about NSRTC 2025 including themes, schedule, and registration details",
      icon: <FilePdf className="h-10 w-10 text-red-600" />,
      link: `${PUBLIC_URL}Downloadables/NSRTC Brochure 2025-Ver 23.pdf`,
    },
    {
      title: "Conference Logo",
      description: "High-resolution logo for NSRTC 2025",
      icon: <FileImage className="h-10 w-10 text-green-600" />,
      link: `${PUBLIC_URL}images/nsrtc-logo.png`,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Downloadable Resources"
          subtitle="Access important documents and resources for NSRTC 2025"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {resource.icon}
                <h3 className="text-xl font-bold text-blue-800 ml-3">
                  {resource.title}
                </h3>
              </div>
              <p className="text-gray-700 mb-6">{resource.description}</p>
              <a
                href={resource.link}
                download
                className="inline-flex items-center px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                Download <Download className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
