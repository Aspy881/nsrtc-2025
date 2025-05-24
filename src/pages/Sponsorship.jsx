import SectionTitle from "../components/atoms/SectionTitle";

export default function SponsorshipPage() {
  const sponsorshipOptions = [
    { category: "Quarter-Page Advertisement", amount: "15,000 INR" },
    { category: "Half-Page Advertisement", amount: "30,000 INR" },
    { category: "Full-Page Advertisement", amount: "60,000 INR" },
    {
      category: "Gold Sponsor",
      amount: "3,00,000 INR",
      benefits: "Includes Stall (6 ft × 3 ft) at Conference Venue",
    },
    {
      category: "Platinum Sponsor",
      amount: "5,00,000 INR",
      benefits: "Includes Stall (10 ft × 3 ft) at Conference Venue",
    },
  ];

  return (
    <section className="pt-16 px-56 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Sponsorship"
          subtitle="Support NSRTC 2025 and Gain Visibility Across Academia & Industry"
        />

        {/* Matched Box Header & Table Style */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="bg-blue-800 text-white p-6">
            <h3 className="text-3xl font-bold">Sponsorship Options</h3>
            <p className="mt-2 text-gray-200">
              Help us deliver a national-scale scientific experience
            </p>
          </div>

          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left text-2xl py-3 px-2">Category</th>
                    <th className="text-right text-2xl py-3 px-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {sponsorshipOptions.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="text-lg py-3 px-2">
                        {item.category}
                        {item.benefits && (
                          <p className="text-sm text-gray-600 mt-1">
                            {item.benefits}
                          </p>
                        )}
                      </td>
                      <td className="text-right text-lg py-3 px-2 font-bold">
                        {item.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ORIGINAL NOTE SECTION PRESERVED */}
            <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 text-sm rounded-md">
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  Advertisement will be published in the Conference Abstract
                  Book & Final Report
                </li>
                <li>
                  The program will reach over{" "}
                  <strong>
                    1,00,000 researchers, academicians, scientists, and students
                  </strong>{" "}
                  through YouTube & online platforms
                </li>
                <li>
                  Contact <strong>Convener, NSRTC 2025</strong>, for
                  Sponsorship/Advertisement
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
