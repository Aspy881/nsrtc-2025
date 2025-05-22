import SectionTitle from "../atoms/SectionTitle";

export default function CommitteeSection({ title, members, type = "grid" }) {
  if (type === "grid") {
    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionTitle title={title} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {member.image && (
                  <div className="aspect-square relative">
                    <img
                      src={
                        member.image || "/placeholder.svg?height=200&width=200"
                      }
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-blue-800 mb-1">
                    {member.name}
                  </h3>
                  {member.title && (
                    <p className="text-blue-600 font-medium mb-1">
                      {member.title}
                    </p>
                  )}
                  {member.affiliation && (
                    <p className="text-gray-600 text-sm">
                      {member.affiliation}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // List view for larger committees
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <SectionTitle title={title} />

        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((member, index) => (
              <div key={index} className="flex items-start p-2">
                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 mr-2"></div>
                <div>
                  <p className="font-semibold text-blue-800">{member.name}</p>
                  {member.title && (
                    <p className="text-gray-700 text-sm">{member.title}</p>
                  )}
                  {member.affiliation && (
                    <p className="text-gray-600 text-xs">
                      {member.affiliation}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
