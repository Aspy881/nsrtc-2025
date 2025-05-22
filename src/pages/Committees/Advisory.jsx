import CommitteeSection from "../../components/organisms/CommitteeSection";
import { PUBLIC_URL } from '../../config';

export default function Advisory() {
  const advisoryCommittee = [
    {
      name: "Padma Shri Prof. Dr. Ashutosh Sharma",
      title: "Former Secretary, DST",
      affiliation: "IIT Kanpur",
      image: `${PUBLIC_URL}imgs/advisory/ashutosh_sharma.jpg`,
    },
    {
      name: "Prof. Dr. Shekhar Mande",
      title: "Bioinformatics Centre, SPPU, Pune",
      affiliation: "Former Director General, CSIR",
      image: `${PUBLIC_URL}imgs/advisory/Prof. Dr. Shekhar Mande.jpeg`,
    },
    {
      name: "Prof. Dr. M. S. Ramachandra Rao",
      title: "",
      affiliation: "IIT Madras",
      image: `${PUBLIC_URL}imgs/advisory/Prof. Dr. M. S. Ramachandra Rao.jpg`,
    },
    {
      name: "Dr. Dinesh K. Aswal",
      title: "BARC Mumbai",
      affiliation: "Former Director, NPL New Delhi",
      image: `${PUBLIC_URL}imgs/advisory/Dr. Dinesh K. Aswal.jpeg`,
    },
    {
      name: "Prof. Dr. Vijayamohanan K. Pillai",
      title: "IISER Tirupati",
      affiliation: "Former Director, CECRI Karaikudi",
      image: `${PUBLIC_URL}imgs/advisory/Prof. Dr. Vijayamohanan K. Pillai.jpeg`,
    },
    {
      name: "Prof. Dr. Ajit Kulkarni",
      title: "",
      affiliation: "IIT Bombay",
      image: `${PUBLIC_URL}imgs/advisory/Prof. Dr. Ajit Kulkarni.jpg`,
    },
    {
      name: "Prof. Dr. S. K. Varshney",
      title: "",
      affiliation: "IIT Kharagpur",
      image: `${PUBLIC_URL}imgs/advisory/Prof. Dr. S. K. Varshney.jpeg`,
    },
    {
      name: "Prof. Dr. Satish Patil",
      title: "",
      affiliation: "IISc Bengaluru",
      image: `${PUBLIC_URL}imgs/advisory/Prof. Dr. Satish Patil.jpg`,
    },
  ];

  return (
    <CommitteeSection title="Advisory Committee" members={advisoryCommittee} />
  );
}
