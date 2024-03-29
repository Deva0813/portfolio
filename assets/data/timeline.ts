//image data
import pic1 from "../../public/images/timeline/1.png";
import pic2 from "../../public/images/timeline/2.png";
import pic3 from "../../public/images/timeline/3.png";
import pic4 from "../../public/images/timeline/4.png";
import pic5 from "../../public/images/timeline/5.png";


interface TimelineData {
	id: string;
	year: string;
	name: string;
	location: string;
	image: any;
	title: string;
	detail_1: string;
	detail_2: string;
}

const timelineData: TimelineData[] = [
	{
		id: "1",
		year: "2005 - 2012",
		name: "PRIMARY SCHOOL",
		location: "CHENNAI",
		title: "Nava Bharath Matriculation School, T.Nagar, Ch -17",
		detail_1: "STD: LKG to 5th",
		detail_2: "...",
		image: pic1,
	},
	{
		id: "2",
		year: "2012 - 2019",
		name: "HIGH SCHOOL",
		location: "CHENNAI",
		title: "Ramakrishna Mission Matriculation Higher Secondary School ,Bazulla Road, T.Nagar, Ch -17",
		detail_1: "STD: 6th - 12th",
		detail_2: "SSLC - 84.4%, HSC - 72%",
		image: pic2,
	},
	{
		id: "3",
		year: "2019 - 2023",
		name: "UNDERGRADUATION",
		location: "CHENNAI",
		title: "Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College, An Autonomous Institution, Avadi, Ch-62",
		detail_1: "1st year to Final year",
		detail_2: "First class with distinction - CGPA 9.09",
		image: pic3,
	},
	{
		id: "4",
		year: "2022 - 2023",
		name: "FULL STACK DEVELOPER INTERN",
		location: "CHENNAI",
		title: "Virtusa",
		detail_1: "Digital Engineer Intern",
		detail_2: "3 Months Experience",
		image: pic4,
	},{
		id: "5",
		year: "2023 - 2023",
		name: "FULL STACK INTERN",
		location: "REMOTE",
		title: "Pixamentory",
		detail_1: "Full stack Intern",
		detail_2: "3 Months Experience",
		image: pic5,
	}
];

export default timelineData;