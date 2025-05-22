import SectionTitle from "../../components/atoms/SectionTitle";
import { PUBLIC_URL } from '../../config';

const facultyBackgrounds = {
  "Pharmaceutical Sciences": `${PUBLIC_URL}backgrounds/bg-pharma.png`,
  "Research & Development": `${PUBLIC_URL}backgrounds/bg-research.png`,
  "Civil Engineering": `${PUBLIC_URL}backgrounds/bg-civil.jpg`,
  "Mechanical Engineering": `${PUBLIC_URL}backgrounds/bg-mech.jpg`,
  "Chemical Engineering": `${PUBLIC_URL}backgrounds/bg-chemical.png`,
  "Biosciences & Technology": `${PUBLIC_URL}backgrounds/bg-biosciences.jpg`,
  "Artificial Intelligence & Computer Science": `${PUBLIC_URL}backgrounds/bg-ai.jpg`,
  "Mathematics & Statistics": `${PUBLIC_URL}backgrounds/bg-maths.jpg`,
  "Bioengineering": `${PUBLIC_URL}backgrounds/bg-bioengineering.jpg`,
  "Electrical & Electronics Engg.": `${PUBLIC_URL}backgrounds/bg-electrical.jpg`,
  "Physics": `${PUBLIC_URL}backgrounds/bg-physics.jpg`,
  "Chemistry": `${PUBLIC_URL}backgrounds/bg-chemistry.png`,
  "Polytechnic & Skill Development": `${PUBLIC_URL}backgrounds/bg-polytechnic.jpg`,
  "Environmental Studies": `${PUBLIC_URL}backgrounds/bg-environment.jpg`,
  "Materials Science & Engg.": `${PUBLIC_URL}backgrounds/bg-materials.jpg`,
  "Public Health": `${PUBLIC_URL}backgrounds/bg-health.jpg`,
  "Liberal Arts": `${PUBLIC_URL}backgrounds/bg-liberalarts.jpg`,
};

const organizingTeam = {
  "Research & Development": [
    "Dr. Varsha Desai", "Dr. Sarita Zele", "Mrs. Sonali Saxena", "Dr. Vaibhav S. Kathavate",
    "Dr. Santosh Patil", "Dr. Ganesh Lonkar", "Dr. Sahebarao More", "Shri. Ranjit Kate",
    "Mrs. Aparna Patole", "Shri. Abhijeet Yadav", "Shri. Vishal Kondhalkar", "Shri. Ashish Kale",
  ],
  "Pharmaceutical Sciences": [
    "Dr. Amol Tagalpallewar", "Dr. Akshay Baheti", "Dr. Ashwin Kuchekar", "Dr. Satish Polshettiwar",
    "Dr. Vishnu Choudhari", "Dr. Anil Pawar", "Dr. Aarti Shastri", "Dr. Chandrashekhar Bobade",
    "Dr. Shvetank Bhatt", "Dr. Ashwini Gawade", "Dr. Sanchi Agarwal", "Dr. Rohit Singh",
    "Dr. Raj Agarwal",
  ],
  Physics: [
    "Dr. Prasad Joglekar", "Dr. Sachin A. Kulkarni", "Dr. Ajit Deore", "Prof. Anagha Karne",
    "Dr. Prasanta Ghosh", "Dr. Deobrat Singh", "Dr. Apurv Nellikka", "Dr. Debabrata Saha",
    "Dr. Shital Kahane", "Dr. Rahul Aher",
  ],
  "Mechanical Engineering": [
    "Prof. Dr. Sandip T. Chavan", "Prof. Dr. Kundlik Mali", "Dr. Ganesh Borikar",
    "Dr. Rohit Ghadge", "Dr. Ratnakar Ghorpade", "Dr. Surbhi Razdan",
    "Dr. Mitulkumar T. Solanki", "Dr. Shivani Gupta",
  ],
  "Chemical Engineering": [
    "Prof. Datta Dandage", "Dr. Ratnadip R. Joshi", "Dr. Anand D. Kulkarni",
    "Dr. Rupali R. Sonolikar", "Prof. Niraj S. Topare", "Dr. Kiran P. Shejale",
    "Dr. Anjali Meshram",
  ],
  "Biosciences & Technology": [
    "Dr. Shilpa Chapadgaonkar", "Dr. Manasi Mishra", "Dr. Amruta Naik", "Dr. Shikha V. Gaikwad",
    "Dr. Mukul Godbole", "Dr. Nithya K. Kutty",
  ],
  "Artificial Intelligence & Computer Science": [
    "Dr. Shubhalaxmi Joshi", "Dr. Apoorva Shastri", "Dr. Monica Apte", "Dr. Ishaan Kale",
    "Dr. Preeti Kale", "Dr. Ranjana Agarwal", "Dr. Siddhivinayak Kulkarni",
  ],
  Bioengineering: [
    "Dr. Shraddha Kulkarni", "Dr. Sagar Kanekar", "Dr. Sharbani Kaushik",
    "Dr. Maneesha Shaji", "Dr. Ankita Agarwal", "Dr. Shubhangi Rastogi", "Prof. Himangi Neve",
  ],
  Chemistry: [
    "Dr. Meghna Gote", "Prof. Dr. Vasi Shaikh", "Dr. Kiran K. Kokate", "Dr. Vandana Mooss",
    "Dr. Devkumar Thapa", "Dr. Soumava Biswas", "Dr. Parineeta Das",
  ],
  "Electrical & Electronics Engg.": [
    "Dr. Anuradha Phadke", "Dr. Rajkumar D. Komati", "Prof. Jyoti Lele",
    "Dr. Gaurav Narkhede", "Prof. Amit Nehete",
  ],
  "Environmental Studies": [
    "Dr. Prasad Kulkarni", "Dr. Soma Mishra", "Dr. Pankaj Koparde",
  ],
  "Public Health": ["Dr. Vanisree Ramanathan", "Dr. Prajkta Bhide", "Dr. Dipak Abnave"],
  "Polytechnic & Skill Development": [
    "Dr. Sunil S. Karad", "Prof. Dr. Rohini S. Kale",
  ],
  "Civil Engineering": ["Dr. Meera", "Dr. Arunabh Pandey", "Dr. Kul Vaibhav Sharma"],
  "Team Coordinators": ["Mrs. Vijaya Yadav", "Dr. Vrushali Pagire"],
  "Mathematics & Statistics": [
    "Prof. Dr. Prashant P. Malavadkar", "Prof. Sachin Gunjal",
  ],
  "Materials Science & Engg.": ["Prof. Anagha Khare", "Prof. Deepali Kulkarni"],
  "Liberal Arts": ["Prof. Dr. Rupakjyoti Borah"],
  Others: [
    "Dr. Gautam Bapat", "Shri. Kshitij Sangale", "Dr. Ganesh Mantri", "Shri. Harnath Ghosh",
    "Shri. Mahesh Mahajan", "Shri. Ashutosh Shenolikar", "Shri. Shreyas Patil",
    "Shri. Girish Bansode", "Shri. Prashant Pawar", "Shri. Jayprakash More",
    "CA Shital Chandak", "Shri. Parag Khanvilkar", "Ms. Sneha Pandit",
    "Ms. Noella D’Souza", "Shri. Omkar Gite", "Shri. Deepak Khedkar", "Shri. Sanjay Ghuge",
  ],
};

export default function Team() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Organizing Team" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {Object.entries(organizingTeam).map(([section, names]) => {
            const bgImage = facultyBackgrounds[section] || `${PUBLIC_URL}backgrounds/bg-default.jpg`;
            return (
              <div
                key={section}
                className="bg-cover bg-center border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 ease-in-out text-white"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundBlendMode: "overlay",
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
              >
                <h3 className="text-xl font-bold mb-4">{section}</h3>
                <ul className="space-y-1 text-sm">
                  {names.map((name, index) => (
                    <li key={index} className="hover:underline">
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
