import SectionTitle from "../components/atoms/SectionTitle";
import SpeakerCard from "../components/molecules/SpeakerCard";
import { PUBLIC_URL } from "../config";

const speakers = [
  {
    name: "Dr. Raghunath A. Mashelkar",
    title: "Former Director General",
    affiliation: "CSIR, New Delhi",
    image: `${PUBLIC_URL}imgs/speakers/Dr-Raghunath-Mashelkar.jpg`,
    awards: "Padma Vibhushan",
  },
  {
    name: "Dr. Vijay P. Bhatkar",
    title: "Founder Director",
    affiliation: "C-DAC",
    image: `${PUBLIC_URL}imgs/speakers/Dr-Vijay-P-Bhatkar.jpg`,
    awards: "Padma Bhushan",
  },
  {
    name: "Prof. Dr. Ganapati D. Yadav",
    title: "Former Vice-Chancellor",
    affiliation: "ICT Mumbai",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Ganapati-Yadav.jpeg`,
    awards: "Padma Shri",
  },
  {
    name: "Prof. Dr. Shekhar Mande",
    title: "Former DG, CSIR",
    affiliation: "Savitribai Phule Pune University",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Shekhar-Mande.jpeg`,
  },
  {
    name: "Dr. (Mrs.) N. Kalaiselvi",
    title: "Director General, CSIR",
    affiliation: "Secretary, DSIR New Delhi",
    image: `${PUBLIC_URL}imgs/speakers/Dr-Mrs-N.-Kalaiselvi.jpeg`,
  },
  {
    name: "Prof. Dr. Thalappil Pradeep",
    title: "Professor",
    affiliation: "IIT Madras",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Thalappil-Pradeep.jpg`,
    awards: "Padma Shri",
  },
  {
    name: "Dr. Ashok Joshi",
    title: "Founder",
    affiliation: "Microlin Technologies & Clean Joule, USA",
    image: `${PUBLIC_URL}imgs/speakers/Dr.-Ashok-Joshi.jpg`,
  },
  {
    name: "Prof. Dr. Ashutosh Sharma",
    title: "Former Secretary, DST",
    affiliation: "IIT Kanpur",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Ashutosh-Sharma.jpg`,
    awards: "Padma Shri",
  },
  {
    name: "Prof. Dr. M. S. Ramachandra Rao",
    title: "Professor",
    affiliation: "IIT Madras",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-MS-Ramachandra-Rao.jpg`,
  },
  {
    name: "Prof. Dr. V. Ramgopal Rao",
    title: "Group Vice Chancellor",
    affiliation: "BITS Pilani",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-V-Ramgopal-Rao.jpg`,
  },
  {
    name: "Prof. Dr. Umesh V. Waghmare",
    title: "Professor",
    affiliation: "JNCASR Bengaluru",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Umesh-Waghmare.jpeg`,
  },
  {
    name: "Prof. Dr. P. S. Anil Kumar",
    title: "Professor",
    affiliation: "IISc Bengaluru",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-PS-Anil-Kumar.jpg`,
  },
  {
    name: "Prof. Dr. Satishchandra B. Ogale",
    title: "Scientist",
    affiliation: "TCG-CREST Kolkata",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Satishchandra-Ogale.jpeg`,
  },
  {
    name: "Prof. Dr. Vijayanandhan K. Pillai",
    title: "Professor",
    affiliation: "IISER Tirupati",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Vijayamohanan-Pillai.jpeg`,
  },
  {
    name: "Prof. Dr. Ajit Kulkarni",
    title: "Professor",
    affiliation: "IIT Bombay",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Ajit-Kulkarni.jpg`,
  },
  {
    name: "Prof. Dr. Samit K. Ray",
    title: "Professor",
    affiliation: "IIT Kharagpur",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Samit-Ray.jpg`,
  },
  {
    name: "Prof. Dr. Bimal Roy",
    title: "Former Director",
    affiliation: "ISI Kolkata",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Bimal-Roy.png`,
  },
  {
    name: "Prof. Dr. S. B. Krupanidhi",
    title: "Professor",
    affiliation: "IISc Bengaluru",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-SB-Krupanidhi.jpg`,
  },
  {
    name: "Prof. Dr. Satish Patil",
    title: "Professor",
    affiliation: "IISc Bengaluru",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Satish-Patil.jpg`,
  },
  {
    name: "Prof. Dr. Ashok K. Ganguli",
    title: "Director",
    affiliation: "IISER Berhampur",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Ashok-Ganguli.png`,
  },
  {
    name: "Prof. Dr. Koustuv Dalal",
    title: "Professor",
    affiliation: "Mid Sweden University, Sweden",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Koustuv-Dalal.webp`,
  },
  {
    name: "Prof. Dr. Makarand Hastak",
    title: "Professor",
    affiliation: "Purdue University, USA",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Makarand-Hastak.jpg`,
  },
  {
    name: "Prof. Dr. B.V.R. Chowdari",
    title: "Professor",
    affiliation: "NTU, Singapore",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-BVR-Chowdari.png`,
  },
  {
    name: "Prof. Dr. Shobha Shukla",
    title: "Professor",
    affiliation: "IIT Bombay",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Shobha-Shukla.jpg`,
  },
  {
    name: "Prof. Dr. Shailendra Varshney",
    title: "Professor",
    affiliation: "IIT Kharagpur",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Shailendra-Varshney.jpeg`,
  },
  {
    name: "Prof. Dr. Shailendra Kumar Shukla",
    title: "Professor",
    affiliation: "IIT BHU Varanasi",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Shailendra-Kumar-Shukla.jpg`,
  },
  {
    name: "Prof. Dr. Amitava Patra",
    title: "Professor",
    affiliation: "INST Mohali",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-AmitavaPatra.jpeg`,
  },
  {
    name: "Prof. Dr. Biju K. Das",
    title: "Professor",
    affiliation: "IIT Madras",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Bijoy-Das.png`,
  },
  {
    name: "Dr. Kavita Joshi",
    title: "Scientist",
    affiliation: "NCL,Pune",
    image: `${PUBLIC_URL}imgs/speakers/Dr-Kavita-Joshi.jpg`,
  },
  {
    name: "Prof. Dr. Deepak M. Ranade",
    title: "Consultant Neurosurgeon",
    affiliation: "Author, Speaking Tree (TOI)",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Deepak-Ranade.jpeg`,
  },
  {
    name: "Prof. Dr. Pritam Deb",
    title: "Professor",
    affiliation: "Tezpur University",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Pritam-Deb.jpg`,
  },
  {
    name: "Prof. Dr. Vivek Polshettiwar",
    title: "Professor",
    affiliation: "TIFR Mumbai",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Vivek-Polshettiwar.jpeg`,
  },
  {
    name: "Dr. Raksh Vir Jasra",
    title: "Senior Vice President",
    affiliation: "Reliance Industries Ltd.",
    image: `${PUBLIC_URL}imgs/speakers/Dr-Raksh-Vir-Jasra.jpg`,
  },
  {
    name: "Prof. Dr. Jitendra Sangwai",
    title: "Professor",
    affiliation: "IIT Madras",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Jitendra-Sangwai.png`,
  },
  {
    name: "Dr. Nagahanumaiah",
    title: "Director",
    affiliation: "CMTI Bengaluru",
    image: `${PUBLIC_URL}imgs/speakers/Dr-Nagahanumaiah.jpg`,
  },
  {
    name: "Prof. Dr. Ambrish Singh",
    title: "Professor",
    affiliation: "Nagaland University",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Ambrish-Singh.png`,
  },
  {
    name: "Prof. Dr. Anandakrishnan C.",
    title: "Director, CSIR-NIIST",
    affiliation: "Thiruvananthapuram",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Anandharamakrishnan-C.jpeg`,
  },
  {
    name: "Prof. Dr. N. Sathyamurthy",
    title: "Professor",
    affiliation: "IISER Mohali",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-N-Sathyamurthy.jpeg`,
  },
  {
    name: "Prof. Dr. Nabakumar Mondal",
    title: "Professor",
    affiliation: "SINP Kolkata, Formerly TIFR",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Naba-Mondal.jpeg`,
  },
  {
    name: "Prof. Dr. Sunil A. Patil",
    title: "Professor",
    affiliation: "IISER Mohali",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Sunil-Patil.jpg`,
  },
  {
    name: "Prof. Dr. Ashok C. Khandkar",
    title: "CEO, Eutech | University of Utah, USA",
    affiliation: "MIT-WPU",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Ashok-Khandkar.jpeg`,
  },
  {
    name: "Prof. Dr. Annapurni Subramaniam",
    title: "Professor",
    affiliation: "Indian Institute of Astrophysics, Bangalore",
    image: `${PUBLIC_URL}imgs/speakers/Prof-Dr-Annapurni-Subramaniam.webp`,
  },
  {
    name: "Prof. Dr. Ashok P. Giri",
    title: "Scientist",
    affiliation: "National Chemical Laboratory, Pune",
    image: `${PUBLIC_URL}imgs/speakers/Dr-Ashok-Giri.png`,
  },
  {
    name: "Dr. Abhilash",
    title: "Scientist",
    affiliation: "CSIR-NML, Jamshedpur",
    image: `${PUBLIC_URL}imgs/speakers/Dr-Abhilash.jpg`,
  },
  {
    name: "Dr. Krishnanjan Bhattacharjee",
    title: "Scientist",
    affiliation: "C-DAC, Pune",
    image: `${PUBLIC_URL}imgs/speakers/Dr-Krishnanjan-Bhattacharjee.jpg`,
  },
];

export default function Speakers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Distinguished Speakers"
          subtitle="NSRTC 2025 brings together eminent scientists and researchers from across the nation to share their expertise and insights"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}
