import SectionTitle from "../../components/atoms/SectionTitle";

const organizingTeam = {
  "Team Coordinators": ["Mrs. Vijaya Yadav", "Dr. Vrushali Pagire"],
  "Research & Development": [
    "Dr. Varsha Desai",
    "Dr. Sarita Zele",
    "Mrs. Meenal Saxena",
    "Dr. Vaibhav S. Kathavate",
    "Dr. Santosh Patil",
    "Dr. Ganesh Lokhande",
    "Dr. Sahebarao More",
    "Shri. Ranjit Kate",
    "Mrs. Aparna Patole",
    "Shri. Abhijeet Yadav",
    "Shri. Vishal Kondhalkar",
    "Shri. Ashish Kale",
  ],
  "Pharmaceutical Sciences": [
    "Dr. Amol Tagalpallewar",
    "Dr. Akshay Baheti",
    "Dr. Ashwin Kuchekar",
    "Dr. Satish Polshettiwar",
    "Mr. Vishnu Choudhari",
    "Dr. Anil Pawar",
    "Dr. Avinash Shastri",
    "Dr. Chandrashekhar Bobade",
    "Dr. Sateesh Bhate",
    "Mr. Ashwin Gawe",
    "Dr. Sanchi Agarwal",
    "Dr. Raj Agarwal",
  ],
  "Civil Engineering": ["Dr. Rajib Kumar SinhaRoy", "Dr. Milind Deshmukh"],
  "Mechanical Engineering": [
    "Prof. Dr. Sandip T. Chavan",
    "Prof. Dr. Kundlik Mali",
    "Dr. Ganesh Borikar",
    "Dr. Rohit Ghagde",
    "Dr. Ratnakar Ghorpade",
    "Dr. Surbhi Razdan",
    "Dr. Mitulkumar T. Solanki",
    "Dr. Shivani Gupta",
  ],
  "Chemical Engineering": [
    "Prof. Datta Dandge",
    "Dr. Ratnadip R. Joshi",
    "Dr. Anand D. Kulkarni",
    "Dr. Rupali R. Sonolikar",
    "Prof. Niraj S. Topare",
    "Dr. Kiran P. Shejale",
    "Dr. Anjali Meshram",
  ],
  "Biosciences & Technology": [
    "Dr. Shilpa Chapadgaonkar",
    "Dr. Manasi Mhaske",
    "Dr. Arunika Naik",
    "Mr. Nikhil V. Gaikwad",
    "Dr. Mukul Godbole",
    "Dr. Nithya K. Kutty",
  ],
  "Artificial Intelligence & Computer Science": [
    "Dr. Shubhalaxmi Joshi",
    "Mr. Apoorva Shastri",
    "Dr. Monica Apte",
    "Dr. Neeta Kale",
    "Dr. Ranjeeta Agarwal",
    "Dr. Siddhanth Kulkarni",
  ],
  "Mathematics & Statistics": [
    "Prof. Dr. Prashant P. Malavadkar",
    "Prof. Sachin Gunjal",
  ],
  Bioengineering: [
    "Dr. Shraddha Kulkarni",
    "Dr. Sagar Kanekar",
    "Dr. Sharbani Kausik",
    "Dr. Maneesha Shaji",
    "Dr. Anitha Agarwal",
    "Dr. Shubhangi Rastogi",
    "Prof. Himangi Nehete",
  ],
  "Electrical & Electronics Engg.": [
    "Dr. Anuradha Phadke",
    "Dr. Rajkumar D. Komati",
    "Prof. Jyoti Lele",
    "Dr. Gaurav Narkhede",
    "Prof. Amit Nehete",
  ],
  Physics: [
    "Dr. Prasad Joglekar",
    "Dr. Sachin A. Kulkarni",
    "Dr. Ajit Deore",
    "Mr. Anand Karne",
    "Dr. Prasanta Ghosh",
    "Dr. Deeabt Singh",
    "Dr. Arup Nellikha",
    "Dr. Debabrata Saha",
    "Mr. Rahul Aher",
  ],
  Chemistry: [
    "Dr. Meghna Gote",
    "Prof. Dr. Vasi Shaikh",
    "Dr. Kiran K. Kokate",
    "Dr. Vandana Moosa",
    "Dr. Devkumari Thapa",
    "Dr. Soumava Biswas",
    "Dr. Parineeta Das",
  ],
  "Polytechnic & Skill Development": [
    "Dr. Sunil S. Karad",
    "Prof. Dr. Rohini S. Kale",
  ],
  "Environmental Studies": [
    "Dr. Prasad Kulkarni",
    "Dr. Soma Mishra",
    "Dr. Pankaj Koparde",
  ],
  "Materials Science & Engg.": ["Prof. Anagha Khare", "Prof. Deepali Kulkarni"],
  "Public Health": [
    "Dr. Vanisree Ramanathan",
    "Dr. Prajkta Bhide",
    "Dr. Dipak Abnave",
  ],
  "Liberal Arts": ["Prof. Dr. Rupakjyoti Borah"],
  Others: [
    "Dr. Gautam Bapat",
    "Shri. Kshitij Sangale",
    "Dr. Ganesh Mante",
    "Shri. Harnath Gosht",
    "Shri. Ashutosh Shenolikar",
    "Shri. Shreyas Patil",
    "Shri. Ritesh Sharma",
    "Shri. Prashant Pawar",
    "Shri. Jayprakash More",
    "Shri. Chaitali Gharde",
    "Shri. Parag Khankilwar",
    "Ms. Sneha Pandav",
    "Ms. Neelba D’Souza",
    "Shri. Omkar Gite",
    "Shri. Deepak Khedkar",
    "Shri. Sanjay Ghughe",
  ],
};

export default function Team() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Organizing Team" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {Object.entries(organizingTeam).map(([section, names]) => (
            <div
              key={section}
              className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 ease-in-out"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                {section}
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                {names.map((name, index) => (
                  <li
                    key={index}
                    className="transition-all hover:text-blue-600"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
