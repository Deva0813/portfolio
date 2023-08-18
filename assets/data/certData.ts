//image imports
import cert_1 from "../../public/images/Certification/cert_1.png";
import cert_2 from "../../public/images/Certification/cert_2.png";
import cert_3 from "../../public/images/Certification/cert_3.png";
import cert_4 from "../../public/images/Certification/cert_4.png";
import cert_5 from "../../public/images/Certification/cert_5.png";
import cert_6 from "../../public/images/Certification/cert_6.png";
import cert_7 from "../../public/images/Certification/cert_7.png";


interface CertifiateData {
    id: number;
    image: any;
    title : string;
    tech : string;
    link : string;
}

const certificateData : CertifiateData[] = [
    {
        id : 0,
        image: cert_1,
        title: "Oracle Certified JAVA Associate",
        tech: "Java core, Java essentials, Java App Development",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=9AB58397FA59F61FA0C8E030BCC7F612E836121B734716D733F60178978685D2",
    },
    {
        id : 1,
        image: cert_2,
        title: "Full Stack Web Development",
        tech: "HTML, CSS, JavaScript, React, Node, Express, MongoDB",
        link: "https://www.udemy.com/certificate/UC-1f640d41-63a5-4357-aacf-12ddff92e4bd/",
    },
    {
        id : 2,
        image: cert_3,
        title: "Python for Data Science and Machine Learning Bootcamp",
        tech: "Python, Numpy, Pandas, Matplotlib, Seaborn, Plotly, Scikit-Learn, Machine Learning, Tensorflow",
        link: "https://www.udemy.com/certificate/UC-e1a012cd-03f9-474a-aed5-57b096942b23/",
    },
    {
        id : 3,
        image: cert_4,
        title: "Cyber Security Virtual Internship ",
        tech: "Cyber Security,Web Security, Phishing",
        link: "https://drive.google.com/file/d/1fK4-a269XnI9CljjGQQaVSs3I59_7mA5/view?usp=sharing",
    },
    {
        id : 4,
        image: cert_5,
        title: "BSNL Networking Virtual Internship",
        tech: "Networking, Network Security, Network Troubleshooting",
        link: "https://drive.google.com/file/d/1crQafAjOQnbJkGBneNMUHJsZTEkJa-pd/view?usp=sharing"
    },
    {
        id : 5,
        image: cert_6,
        title: "IBM Nalaiyathiran",
        tech: "Python, Machine Learning, Deep Learning, Computer Vision",
        link: "https://courses.ictacademy.skillsnetwork.site/certificates/612bfe97076641debddf0b178b683f35"
    },
    {
        id : 6,
        image: cert_7,
        title: "TCM Security Ethical Hacking",
        tech: "Ethical Hacking, Penetration Testing, Web Security, Network Security",
        link: "https://drive.google.com/file/d/14FNlsNgokkdlLhz4G0mk6P0nzWu9Bdr0/view?usp=sharing"

    }


];

export default certificateData;