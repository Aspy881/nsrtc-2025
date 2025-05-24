// RegistrationPage.jsx
import SectionTitle from "../components/atoms/SectionTitle";
import { ExternalLink, Download } from "lucide-react";
import { PUBLIC_URL } from "../config";

export default function RegistrationPage() {
  const registrationFees = [
    { category: "UG / PG Student", fee: "1,500 INR" },
    { category: "PhD Scholar", fee: "2,500 INR" },
    { category: "Faculty", fee: "5,000 INR" },
    { category: "Industrial Representative", fee: "10,000 INR" },
    { category: "Online Attendee (Indian)", fee: "1,000 INR" },
    { category: "Online Attendee (International)", fee: "25 USD" },
  ];

  return (
    <section className="pt-16 px-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Registration"
          subtitle="Join us for the 2nd National Scientists Round Table Conference (NSRTC 2025)"
        />

        {/* Registration Fees */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-12">
          <div className="bg-blue-800 text-white p-6">
            <h3 className="text-3xl font-bold">Registration Fees</h3>
            <p className="mt-2 text-gray-200">
              For participants outside of MIT-WPU
            </p>
          </div>
          <div className="p-6">
            <div className="overflow-x-auo">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left text-2xl py-3 px-2">Category</th>
                    <th className="text-right text-2xl   py-3 px-2">Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {registrationFees.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="text-lg py-3 px-2">{item.category}</td>
                      <td className="text-right text-lg py-3 px-2 font-bold">
                        {item.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-lg text-gray-500">
              <p>• Registered Online Attendee will receive an e-certificate</p>
              <p>
                • For registration of Online Attendee (International), contact
                Convener
              </p>
              <p>• Registered offline participant will receive a certificate</p>
            </div>
          </div>
        </div>

        {/* Registration Process */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Registration Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border shadow-md border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-700 mb-4">
                Step 1: Fill the Registration Form
              </h3>
              <div className="flex flex-col items-center">
                <img
                  src={`${PUBLIC_URL}imgs/registration-qr.png`}
                  alt="Registration QR"
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

            <div className="border shadow-md border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-700 mb-4">
                Step 2: Make the Payment
              </h3>
              <div className="flex flex-col items-center">
                <img
                  src={`${PUBLIC_URL}imgs/payment-qr.png`}
                  alt="Payment QR"
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
      </div>
    </section>
  );
}
