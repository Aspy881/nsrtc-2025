import SectionTitle from "../components/atoms/SectionTitle";
import { Download, ExternalLink } from "lucide-react";
import { PUBLIC_URL } from '../config';

export default function Registration() {
  const registrationFees = [
    { category: "UG / PG Student", fee: "1,500 INR" },
    { category: "PhD Scholar", fee: "2,500 INR" },
    { category: "Faculty", fee: "5,000 INR" },
    { category: "Industrial Representative", fee: "10,000 INR" },
    { category: "Online Attendee (Indian)", fee: "1,000 INR" },
    { category: "Online Attendee (International)", fee: "25 USD" },
  ];

  const sponsorshipOptions = [
    { category: "Quarter-Page Advertisement", amount: "15,000 INR" },
    { category: "Half-Page Advertisement", amount: "30,000 INR" },
    { category: "Full-Page Advertisement", amount: "60,000 INR" },
    {
      category: "Gold Sponsor",
      amount: "3,00,000 INR",
      benefits:
        "Will be provided with a Stall (6 ft × 3 ft) at the Conference Venue",
    },
    {
      category: "Platinum Sponsor",
      amount: "5,00,000 INR",
      benefits:
        "Will be provided with a Stall (10 ft × 3 ft) at the Conference Venue",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Registration"
          subtitle="Join us for the 2nd National Scientists Round Table Conference (NSRTC 2025)"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Registration Fees */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-800 text-white p-6">
              <h3 className="text-2xl font-bold">Registration Fees</h3>
              <p className="mt-2 text-gray-200">
                For participants outside of MIT-WPU
              </p>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-2">Category</th>
                      <th className="text-right py-3 px-2">Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrationFees.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-2">{item.category}</td>
                        <td className="text-right py-3 px-2 font-semibold">
                          {item.fee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-sm text-gray-600">
                <p>
                  • Registered Online Attendee will receive an e-certificate
                </p>
                <p>
                  • For registration of Online Attendee (International), contact
                  Convener, NSRTC 2025
                </p>
                <p>
                  • Registered offline participant will receive a certificate
                </p>
              </div>
            </div>
          </div>

          {/* Sponsorship Details */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-800 text-white p-6">
              <h3 className="text-2xl font-bold">Sponsorship Details</h3>
              <p className="mt-2 text-gray-200">
                Support the conference and gain visibility
              </p>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-2">Category</th>
                      <th className="text-right py-3 px-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sponsorshipOptions.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-2">
                          {item.category}
                          {item.benefits && (
                            <p className="text-xs text-gray-600 mt-1">
                              {item.benefits}
                            </p>
                          )}
                        </td>
                        <td className="text-right py-3 px-2 font-semibold">
                          {item.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-sm text-gray-600">
                <p>
                  • Advertisement will be published in the Conference Abstract
                  Book & Final Report
                </p>
                <p>
                  • The program will be reaching to more than 1,00,000
                  researchers, academicians, scientists, and students through
                  our YouTube Channel and other online platforms
                </p>
                <p>
                  • Contact Convener, NSRTC 2025, for Sponsorship/Advertisement
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Registration Process */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Registration Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Registration Form */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-700 mb-4">
                Step 1: Fill the Registration Form
              </h3>
              <div className="flex flex-col items-center">
                <img
                  src={`${PUBLIC_URL}imgs/registration-qr.png`}
                  alt="Registration Form QR Code"
                  className="w-48 h-48 mb-4"
                />
                <p className="text-center mb-4">
                  Use the QR code or click the button below
                </p>
                <a
                  href="https://forms.gle/Ge4jc7aaGNjzUePS9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Open Registration Form{" "}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Payment */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-700 mb-4">
                Step 2: Make the Payment
              </h3>
              <div className="flex flex-col items-center">
                <img
                  src={`${PUBLIC_URL}imgs/payment-qr.png`}
                  alt="Payment QR Code"
                  className="w-48 h-48 mb-4"
                />
                <p className="text-center mb-4">
                  Use the QR code or click the button below
                </p>
                <a
                  href="https://paytm.me/PYTMPS/SiXIF3P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Make Payment <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-md">
            <p className="text-blue-800 font-medium">Important Note:</p>
            <p className="text-gray-700">
              Please email the bank transaction proof of registration to
              nsrtc2025@mitwpu.edu.in
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            For More Information
          </h2>
          <div className="text-gray-700">
            <p className="mb-2">
              <span className="font-semibold">Convener</span>
            </p>
            <p className="mb-2">
              National Scientists Round Table Conference (NSRTC) for Viksit
              Bharat 2047
            </p>
            <p className="mb-2">
              MIT World Peace University, Kothrud, Pune, Maharashtra, Bharat -
              411038
            </p>
            <p className="mb-2">
              Mobile: +91 83093 37736 | 94230 14560 | 9 230 230 392
            </p>
            <p className="mb-2">Email: nsrtc2025@mitwpu.edu.in</p>
            <p>Website: www.nsrtc.org</p>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={`${PUBLIC_URL}Downloadables\NSRTC Brochure 2025-Ver 23.pdf`}
              download
              className="inline-flex items-center px-6 py-3 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              Download Brochure <Download className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
