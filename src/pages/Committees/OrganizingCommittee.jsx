import CommitteeSection from "../../components/organisms/CommitteeSection";

export default function OrganizingCommittee() {
  const organizingCommittee = [
    {
      name: "Prof. Dr. Akshay Malhotra",
      title: "Academic Affairs",
      color: "text-blue-700",
    },
    {
      name: "Prof. Dr. Neeraj Mahindroo",
      title: "School of Health Sciences & Technology",
      color: "text-green-700",
    },
    {
      name: "Prof. Dr. Mangesh V. Bedekar",
      title: "School of Computer Science & Engineering",
      color: "text-purple-700",
    },
    {
      name: "Prof. Dr. Deependra Sharma",
      title: "School of Business",
      color: "text-red-700",
    },
    {
      name: "Prof. Dr. Ganesh Kakandikar",
      title: "School of Engineering & Technology",
      color: "text-yellow-700",
    },
    {
      name: "Dr. Vikrant Gaikwad",
      title: "School of Engineering & Technology",
      color: "text-pink-700",
    },
    {
      name: "Dr. Dinesh S. Bhutada",
      title: "Chemical Engineering",
      color: "text-indigo-700",
    },
    {
      name: "Prof. Dr. Bharat S. Chaudhari",
      title: "Electrical & Electronics Engineering",
      color: "text-teal-700",
    },
    {
      name: "Dr. Vishal Ghule",
      title: "School of Liberal Arts",
      color: "text-rose-700",
    },
    {
      name: "Dr. Saurabh Kumar",
      title: "School of Design",
      color: "text-orange-700",
    },
    {
      name: "Prof. Dhiraj Singh",
      title: "Media & Communication",
      color: "text-emerald-700",
    },
    {
      name: "Dr. Malhari Kulkarni",
      title: "Materials Science & Engineering",
      color: "text-cyan-700",
    },
    {
      name: "Dr. Parul Jadhav",
      title: "Electrical & Electronics Engineering",
      color: "text-lime-700",
    },
    {
      name: "Dr. Gopinath T.",
      title: "Mechanical Engineering",
      color: "text-fuchsia-700",
    },
    {
      name: "Prof. Dr. Shivprakash Barve",
      title: "Mechanical Engineering",
      color: "text-amber-700",
    },
    {
      name: "Prof. Dr. Krishna K. Warhade",
      title: "Doctoral Program, Research & Development",
      color: "text-violet-700",
    },
    {
      name: "Prof. Dr. Samarth D. Patwardhan",
      title: "Center for Subsea Engineering Research",
      color: "text-sky-700",
    },
    {
      name: "Prof. Dr. Anand J. Kulkarni",
      title: "Institute of Artificial Intelligence",
      color: "text-red-700",
    },
    {
      name: "Prof. Dr. Nirupama Kocherlakota",
      title: "International Affairs",
      color: "text-green-700",
    },
    {
      name: "Dr. Hitesh Joshi",
      title: "Student Affairs",
      color: "text-purple-700",
    },
  ];

  const treasurerCommittee = [
    { name: "Shri. Ganesh Pokale", title: "Registrar", color: "text-blue-700" },
    {
      name: "CA Preeti Chandak",
      title: "Deputy CAFO",
      color: "text-yellow-700",
    },
    {
      name: "Shri. Vishal Bora",
      title: "General Manager, Purchase",
      color: "text-indigo-700",
    },
  ];

  return (
    <>
      <CommitteeSection
        title="Organizing Committee from MIT-WPU"
        members={organizingCommittee}
        type="list"
      />
      <CommitteeSection
        title="Treasurer"
        members={treasurerCommittee}
        type="list"
      />
    </>
  );
}
