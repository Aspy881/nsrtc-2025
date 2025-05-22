import { PUBLIC_URL } from '../../config';

function AdvisoryBoard() {
  const advisoryMembers = [
    {
      name: "Dr. Vishwanath Karad",
      title: "Founder President",
      affiliation: "MIT World Peace University",
      image: `${PUBLIC_URL}placeholder.svg?height=200&width=200`,
    },
    {
      name: "Prof. K. Vijay Raghavan",
      title: "Former Principal Scientific Adviser",
      affiliation: "Government of India",
      image: `${PUBLIC_URL}placeholder.svg?height=200&width=200`,
    },
    {
      name: "Dr. Shekhar C. Mande",
      title: "Former Director General",
      affiliation: "Council of Scientific & Industrial Research",
      image: `${PUBLIC_URL}placeholder.svg?height=200&width=200`,
    },
    {
      name: "Prof. Ajay Kumar Sood",
      title: "Principal Scientific Adviser",
      affiliation: "Government of India",
      image: `${PUBLIC_URL}placeholder.svg?height=200&width=200`,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Advisory Board</h1>
          <div className="w-24 h-1 bg-blue-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            The NSRTC 2025 is guided by an esteemed advisory board comprising distinguished scientists, academicians,
            and policy makers who provide strategic direction to the conference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {advisoryMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={member.image || `${PUBLIC_URL}placeholder.svg`}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.title}</p>
                <p className="text-gray-600">{member.affiliation}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mt-12">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">International Advisory Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Prof. James Wilson</h3>
              <p className="text-gray-700 mb-2">Director, Center for Advanced Materials</p>
              <p className="text-gray-600">Massachusetts Institute of Technology, USA</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Dr. Sophia Chen</h3>
              <p className="text-gray-700 mb-2">Head, Quantum Computing Research</p>
              <p className="text-gray-600">National University of Singapore, Singapore</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Prof. Michael Schmidt</h3>
              <p className="text-gray-700 mb-2">Director, Institute for Climate Research</p>
              <p className="text-gray-600">ETH Zurich, Switzerland</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Dr. Amina Patel</h3>
              <p className="text-gray-700 mb-2">Head, Biotechnology Division</p>
              <p className="text-gray-600">University of Oxford, UK</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Role of the Advisory Board</h2>
          <ul className="space-y-4">
            <li className="flex">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold mr-3 mt-0.5">
                1
              </div>
              <div>
                <h3 className="font-semibold text-blue-700">Strategic Guidance</h3>
                <p className="text-gray-700">
                  Providing strategic direction to ensure the conference aligns with national priorities and global
                  scientific trends.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold mr-3 mt-0.5">
                2
              </div>
              <div>
                <h3 className="font-semibold text-blue-700">Technical Oversight</h3>
                <p className="text-gray-700">
                  Ensuring high scientific standards and quality of technical sessions and paper presentations.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold mr-3 mt-0.5">
                3
              </div>
              <div>
                <h3 className="font-semibold text-blue-700">Network Facilitation</h3>
                <p className="text-gray-700">
                  Leveraging their networks to bring together leading scientists and researchers from across
                  disciplines.
                </p>
              </div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold mr-3 mt-0.5">
                4
              </div>
              <div>
                <h3 className="font-semibold text-blue-700">Policy Recommendations</h3>
                <p className="text-gray-700">
                  Guiding the development of policy recommendations that emerge from the conference discussions.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AdvisoryBoard
