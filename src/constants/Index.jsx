import projectImage1 from "../assets/invoice.png"
import projectImage4 from "../assets/arch.png"
import projectImage from "../assets/dash.png"
import projectImage2 from "../assets/ecommerce.jpg"
import projectImage3 from "../assets/heartmite.png"
import { BiCodeAlt } from "react-icons/bi";
import { BiMobileAlt } from "react-icons/bi";
import { BiPalette } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



export const menuItems = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Responsive Portfolio Website",
    Image: projectImage,
    description: 
      "A sleek and a fully responsive portfolio website to showcase skills, projects and experience...",
    link: "https://portfolio-k-rouge.vercel.app/"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    Image: projectImage2,
    description: 
      "An e-commerce platform with features like: Product listing, Cart functionality...",
    link: "https://ecommerce-platform.vercel.app"
  },
  {
    id: 3,
    title: "E-Invoice",
    Image: projectImage1,
    description: 
      "A Sass for recording sales and generating of receipts both in pdf format and image",
    link: "https://invoice-application-three.vercel.app"
  },
  {
    id: 4,
    title: "Heart Felt",
    Image: projectImage3,
    description: 
      "A full stack web appllication for customization and distribution of cards to loved ones",
    link: "https://new-heartfelt.vercel.app"
  },
  {
    id: 5,
    title: "Homyz",
    Image: projectImage4,
    description: 
      "A landing page for a real estate website",
    link: "https://real-estate-ebon-omega.vercel.app"
  },
];
export const services = [
    {
        title: "Web Development",
        description: "The process of building, programming, and maintaining websites and web applications. Website developers use various programming languages, like HTML, CSS, and JavaScript, to develop websites and web applications. ",
        icon: BiCodeAlt
    },
    {
        title: "Mobile App Development",
        description: "The process of creating software applications designed specifically to run on smartphones, tablets, and other mobile devices, involving the design, coding, and testing of user interfaces to deliver functional features and a seamless user experience on a mobile platform. ",
        icon: BiMobileAlt
    },
    {
        title: "Graphic Designs",
        description: "The art and practice of planning and projecting ideas and experiences with visual and textual content",
        icon: BiPalette
    },
]

export const contactDetails = [
   {
        id: 1,
        type: "Email",
        value: "eberevictory3@gmail.com",
        link: "mailto:eberevictory3@gmail.com", 
        icon: MdEmail 
   },
   {
        id: 2,
        type: "Phone",
        value: "+234 806 549 3663",
        link: "tel:08065493663", 
        icon: FaPhone  
    },
   {
        id: 3,
        type: "Whatsapp",
        value: "Victex Solutions",
        link: "https://wa.me/+2348065493663", 
        icon: FaWhatsapp  
    },
   {
        id: 4,
        type: "Location",
        value: "Anambra, Nigeria",
        icon: CiLocationOn  
    },
]
