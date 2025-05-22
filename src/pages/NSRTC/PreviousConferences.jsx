import SectionTitle from "../../components/atoms/SectionTitle";
import { Download, FileText } from "lucide-react";
import { PUBLIC_URL } from '../../config';

export default function PreviousConferences() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Previous Conferences"
          subtitle="Explore the highlights and achievements from our previous National Scientists Round Table Conference"
        />

        {/* NSRTC 2024 Overview */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
              <img
                src={`${PUBLIC_URL}nsrtc2024.jpg`}
                alt="NSRTC 2024"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-blue-800 mb-4">
                1st NSRTC (2024)
              </h2>
              <p className="text-gray-700 mb-4">
                The inaugural National Scientists Round Table Conference was
                held from July 19–21, 2024 at MIT World Peace University, Pune.
                The conference brought together over 116 scientists,
                researchers, and industry experts from across India to discuss
                cutting-edge research and innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Key Highlights:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>12 Keynote Addresses</li>
                    <li>24 Technical Sessions</li>
                    <li>150+ Paper Presentations</li>
                    <li>8 Panel Discussions</li>
                    <li>4 Workshop Sessions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-700 mb-2">
                    Focus Areas:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Sustainable Technologies</li>
                    <li>Healthcare Innovations</li>
                    <li>Digital Transformation</li>
                    <li>Advanced Materials</li>
                    <li>Energy Solutions</li>
                  </ul>
                </div>
              </div>
              {/*<div className="flex flex-wrap gap-3 mt-4">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Conference Proceedings
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition duration-300"
                >
                  Photo Gallery
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition duration-300"
                >
                  Media Coverage
                </a>
              </div>*/}
            </div>
          </div>
        </div>

        {/* NSRTC 2024 Report Download Section */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center max-w-3xl mx-auto">
          <FileText className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-2">
            NSRTC 2024 Final Report
          </h3>
          <p className="text-gray-700 mb-6">
            Download the official report summarizing all keynotes, sessions,
            panel discussions, and insights from NSRTC 2024.
          </p>
          <a
            href={`${PUBLIC_URL}Downloadables/NSRTC 2024 Report-30122024.pdf`}
            download
            className="inline-flex items-center px-5 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Download Report <Download className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
