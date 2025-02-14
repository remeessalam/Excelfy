import imageOne from "../assets/images/chooseus1.webp";
import imageTwo from "../assets/images/chooseus2.webp";
import imageThree from "../assets/images/chooseus3.webp";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import BayutImg from "../assets/web-development-portfolio/bayut.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import EmergencyMusicImg from "../assets/web-development-portfolio/emergency music .png";
import FlatiornImg from "../assets/web-development-portfolio/flatiorn.png";
import MavenImg from "../assets/web-development-portfolio/maven.png";
import MenissaCateringsImg from "../assets/web-development-portfolio/menissa caterings.png";
import MethodistImg from "../assets/web-development-portfolio/methodist.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";

// Import all images at the top (App Development)
import DubaiTravelGuideImg from "../assets/app-development-portfolio/dubai travel guide.png";
import EloraHairPalourImg from "../assets/app-development-portfolio/elora hair palour.png";
import EvansFrancisImg from "../assets/app-development-portfolio/evans francis.png";
import HouseOfDeliverenceImg from "../assets/app-development-portfolio/house of deliverence.png";
import MybitsShopImg from "../assets/app-development-portfolio/mybitsshop.png";
import NamazImg from "../assets/app-development-portfolio/namaz.png";
import PoteaImg from "../assets/app-development-portfolio/potea.png";
import RentopBikeAndCarImg from "../assets/app-development-portfolio/rentop bike and car.png";
import {
  FaCube,
  FaGamepad,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaComments,
  FaCogs,
  FaPaintBrush,
} from "react-icons/fa";

import logo from "../assets/images/Logo/Logo.png";
export { logo };

const baseUrl = process.env.PUBLIC_URL;

export function publicUrlFor(path) {
  return baseUrl + "/assets/" + path;
}

export function loadScript(src, fromPublic) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");

    script.src =
      fromPublic === undefined || fromPublic == null || fromPublic
        ? publicUrlFor(src)
        : src;

    script.addEventListener("load", function () {
      resolve();
    });
    script.addEventListener("error", function (e) {
      reject(e);
    });
    document.body.appendChild(script);
    document.body.removeChild(script);
  });
}

export const companyDetails = {
  name: "Excelfy Technologies",
  number: "+91-9289306585",
  address: "Sector 46, Gurgaon",
  // address2: "ABC Street, City, Country",
  email: "support@excelfytechnologies.in",
  facebook: "",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const whyChooseUs = {
  mainHeading:
    "At Excelfy Technologies, we understand that choosing the right technology partner is crucial for your business's success. Here’s why we stand out in a crowded marketplace",
  details: [
    {
      image: imageOne,
      heading: "Tailored Solutions",
      description:
        "We believe that one size does not fit all. Our custom solutions are meticulously crafted to align with your specific business needs and objectives. Whether you require bespoke software, mobile applications, or comprehensive cloud services, we work closely with you to ensure our offerings are tailored to meet your unique challenges and goals. This personalized approach ensures that you receive the most effective solutions that drive meaningful results.",
    },
    {
      image: imageTwo,
      heading: "Expert Team",
      description:
        "Our interdisciplinary team comprises seasoned professionals with diverse expertise across various domains. From software developers and UX/UI designers to data scientists and cybersecurity specialists, our collective knowledge ensures that you receive the best guidance and support at every stage of your project. We are committed to leveraging our experience to help you navigate the complexities of technology and achieve your desired outcomes.",
    },
    {
      image: imageThree,
      heading: "Commitment to Innovation",
      description:
        "In today’s fast-paced digital landscape, staying ahead of the curve is essential. At Excelfy Technologies, we are dedicated to continual innovation. We adopt the latest technologies and industry best practices to provide you with solutions that not only meet your current needs but also anticipate future trends. Our forward-thinking approach allows your business to remain agile and responsive to market changes.",
    },
  ],
};

// client logos
export const clientLogos = [
  {
    id: 1,
    img: require("../assets/images/clients/1.png"),
  },
  {
    id: 2,
    img: require("../assets/images/clients/2.png"),
  },
  {
    id: 3,
    img: require("../assets/images/clients/3.png"),
  },
  {
    id: 4,
    img: require("../assets/images/clients/4.png"),
  },
  {
    id: 5,
    img: require("../assets/images/clients/5.png"),
  },
  {
    id: 6,
    img: require("../assets/images/clients/6.png"),
  },
  {
    id: 7,
    img: require("../assets/images/clients/7.png"),
  },
];

export const allServices = [
  {
    image: <FaCube />,
    title: "Blockchain Development",
    shortDesc:
      "Unlock new possibilities with blockchain technology. We design and build secure, transparent, and efficient blockchain solutions tailored to your needs.",
    heading: "Blockchain Development: Secure & Transparent Solutions",
    description:
      "Our blockchain development services empower businesses with secure, decentralized solutions. From smart contracts to cryptocurrency platforms, we help you leverage blockchain for enhanced efficiency and trust. Whether you're interested in DApps, tokenization, or blockchain consulting, we ensure robust and scalable solutions.",
  },
  {
    image: <FaGamepad />,
    title: "Game Development",
    shortDesc:
      "Transform your game ideas into immersive experiences with our 2D, 3D, and VR/AR game development services. From mobile to console, we bring your vision to life.",
    heading: "Game Development: Engaging & Immersive Experiences",
    description:
      "We specialize in game development across multiple platforms, creating captivating and high-performance games. Whether you're targeting casual gamers or dedicated players, our expertise in mobile, console, and VR/AR game design ensures an engaging experience.",
  },
  {
    image: <FaCloud />,
    title: "Cloud Computing Services",
    shortDesc:
      "Scale your business with expert cloud solutions. We provide cloud architecture, migration, and management services across AWS, Azure, and Google Cloud.",
    heading: "Cloud Computing: Scalable & Secure Cloud Solutions",
    description:
      "Our cloud computing services help businesses optimize performance and reduce operational costs. Whether migrating to the cloud or optimizing existing infrastructure, we ensure seamless integration and top-tier security for your cloud environment.",
  },
  {
    image: <FaDatabase />,
    title: "Data Science Services",
    shortDesc:
      "Turn data into insights with our advanced data science solutions. We provide predictive analytics, machine learning, and big data solutions to drive smarter decisions.",
    heading: "Data Science: Extracting Value from Data",
    description:
      "Data is one of your most valuable assets. Our data science services enable businesses to extract meaningful insights, optimize operations, and enhance decision-making through analytics, visualization, and machine learning models.",
  },
  {
    image: <FaRobot />,
    title: "Artificial Intelligence Solutions",
    shortDesc:
      "Leverage AI for smarter decision-making and automation. Our AI solutions enhance business operations through predictive analytics, NLP, and machine learning.",
    heading: "AI Development: Intelligent Solutions for Business Growth",
    description:
      "AI is revolutionizing industries, and we help you stay ahead with intelligent AI-driven solutions. From chatbots and NLP to predictive modeling and machine vision, we build AI systems tailored to your business needs.",
  },
  {
    image: <FaComments />,
    title: "Chatbot Development",
    shortDesc:
      "Enhance customer engagement with AI-driven chatbots. Our chatbots deliver smart, efficient, and personalized interactions 24/7 across multiple platforms.",
    heading: "Chatbot Development: AI-powered Customer Interactions",
    description:
      "Our chatbot solutions help businesses automate customer interactions, reduce response times, and enhance user experiences. Whether for customer support, e-commerce, or enterprise communication, we create chatbots that understand and engage effectively.",
  },
  {
    image: <FaCogs />,
    title: "Robotic Process Automation (RPA)",
    shortDesc:
      "Automate repetitive tasks and enhance efficiency with RPA. Our intelligent bots streamline workflows, reduce errors, and free up valuable resources.",
    heading: "RPA: Automating Business Processes with Efficiency",
    description:
      "RPA enables businesses to automate rule-based, repetitive tasks, improving productivity and reducing operational costs. Our solutions help you implement RPA bots that seamlessly integrate into existing workflows, enhancing efficiency without disruption.",
  },
  {
    image: <FaPaintBrush />,
    title: "UI/UX Design",
    shortDesc:
      "Create intuitive and visually stunning designs with our UI/UX services. We craft engaging user experiences that drive customer satisfaction and conversions.",
    heading: "UI/UX Design: Crafting Seamless Digital Experiences",
    description:
      "A great design is more than aesthetics—it’s about usability and engagement. Our UI/UX design team creates user-centered interfaces, wireframes, and prototypes to ensure an intuitive and visually appealing user experience.",
  },
];

// services for web development
export const webDevelopmentServices = [
  {
    image: <i className="flaticon-web-development" />,
    heading: "E-commerce Solutions",
    description: "Boost your sales with custom-designed online stores.",
  },
  {
    image: <i className="flaticon-coding" />,
    heading: "Website Maintenance",
    description: "Keeping your site updated and running smoothly.",
  },
  {
    image: <i className="flaticon-web-programming" />,
    heading: "SEO Optimization",
    description:
      "Ensuring your site is easily found with on-page SEO best practices.",
  },
  {
    image: <i className="flaticon-web-design" />,
    heading: "Custom Web Design",
    description:
      "Tailored websites that reflect your brand and engage your target audience",
  },
  {
    image: <i className="flaticon-responsive" />,
    heading: "Responsive Design",
    description:
      "Seamless user experience across all devices—desktop, tablet, and mobile.",
  },
];

// services for mobile development
export const appDevelopmentServices = [
  {
    image: <i className="flaticon-app-development" />,
    heading: "Custom App Development",
    description: "Tailored apps designed for your unique business needs.",
  },
  {
    image: <i className="flaticon-software-development" />,
    heading: "Cross-Platform Solutions",
    description:
      "Apps that perform seamlessly across iOS, Android, and web platforms.",
  },
  {
    image: <i className="flaticon-web-design" />,
    heading: "UX/UI Design",
    description:
      "Intuitive and attractive designs for an outstanding user experience.",
  },
  {
    image: <i className="flaticon-web-programming" />,
    heading: "Backend Development",
    description: "Secure and scalable backend services to support your app.",
  },
  {
    image: <i className="flaticon-coding" />,
    heading: "App Maintenance and Updates",
    description: "Ensuring your app stays up-to-date and fully functional.",
  },
];

// portfolio images (web development)

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 2,
    img: BayutImg,
    title: "Bayut",
    link: "https://www.bayut.com",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 4,
    img: EmergencyMusicImg,
    title: "Emergency Music",
    link: "https://www.figma.com/proto/GwlIMQuIuFevhOEp8moALy/emergence-music-distribuBon?page-id=6298%3A7215&type=design&node-id=6298-7776&viewport=407%2C314%2C0.11&t=QCtz7M4USn6gI1CG-1&scaling=min-zoom",
  },
  {
    id: 5,
    img: FlatiornImg,
    title: "Flatiorn",
    link: "",
  },
  {
    id: 6,
    img: MavenImg,
    title: "Maven",
    link: "",
  },
  {
    id: 7,
    img: MenissaCateringsImg,
    title: "Menissa Caterings",
    link: "https://messinascatering.com",
  },
  {
    id: 8,
    img: MethodistImg,
    title: "Methodist",
    link: "",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
];

// portfolio images (app development)

export const appPortfolio = [
  {
    id: 1,
    img: DubaiTravelGuideImg,
    title: "Dubai Travel Guide",
    link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
  },
  {
    id: 2,
    img: EloraHairPalourImg,
    title: "Elora Hair Palour",
    link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
  },
  {
    id: 3,
    img: EvansFrancisImg,
    title: "Evans Francis",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
  },
  {
    id: 4,
    img: HouseOfDeliverenceImg,
    title: "House of Deliverence",
    link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
  },
  {
    id: 5,
    img: MybitsShopImg,
    title: "Mybits Shop",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 6,
    img: NamazImg,
    title: "Namaz",
    link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
  },
  {
    id: 7,
    img: PoteaImg,
    title: "Potea",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];
