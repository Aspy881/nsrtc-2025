import SectionTitle from "../components/atoms/SectionTitle";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Contact Us"
          subtitle="Have questions about NSRTC 2025? Get in touch with our team for more information."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-800 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium">Address:</h3>
                  <p className="text-gray-700">
                    MIT World Peace University
                    <br />
                    S.No.124, Paud Road, Kothrud
                    <br />
                    Pune, Maharashtra 411038
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-800 mr-3" />
                <div>
                  <h3 className="font-medium">Email:</h3>
                  <a className="text-gray-700" href="mailto:nsrtc2025@mitwpu.edu.in">nsrtc2025@mitwpu.edu.in</a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-800 mr-3" />
                <div>
                  <h3 className="font-medium">Phone:</h3>
                  <p className="text-gray-700">
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

          <div className="bg-white rounded-lg shadow-md p-4">
            {/*<h2 className="text-2xl font-bold text-blue-800 mb-4">
              Location Map
            </h2>*/}
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0993776179546!2d73.81301907510633!3d18.51795038258125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc0f3baaaab%3A0x2bd9f09a2c1ff8de!2sMIT%20World%20Peace%20University!5e0!3m2!1sen!2sin!4v1715612762386!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MIT World Peace University Location"
                className="w-full h-[350px] border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
