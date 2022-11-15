// skills icons
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { DiJava } from "react-icons/di";
import { SiMysql } from "react-icons/si";
// services icons
import { GiSpiderWeb } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { BiMobileAlt, BiDesktop } from "react-icons/bi";
// contacts
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

export const projects = [
  { id: 1, image: "music.jpg", name: "music streaming website" },
  { id: 2, image: "food.jpg", name: "food delivery website" },
  { id: 3, image: "fitness.jpg", name: "fitness agency website" },
  { id: 4, image: "housing.jpg", name: "housing agency website" },
  { id: 5, image: "spa.jpg", name: "beauty spa website" },
  { id: 6, image: "delivery.jpg", name: "courier firm website" },
  { id: 7, image: "college.jpg", name: "e-learning platform website" },
];

export const skills = [
  { id: 1, name: "javascript", icon: IoLogoJavascript },
  { id: 2, name: "java", icon: DiJava },
  { id: 3, name: "html", icon: IoLogoHtml5 },
  { id: 4, name: "css", icon: IoLogoCss3 },
  { id: 5, name: "mysql", icon: SiMysql },
];
export const services = [
  { id: 1, name: "web development", icon: GiSpiderWeb },
  { id: 2, name: "email template development", icon: MdEmail },
  { id: 3, name: "mobile app development", icon: BiMobileAlt },
  { id: 4, name: "desktop app development", icon: BiDesktop },
];

export const contacts = [
  { id: 1, name: "+25476930113", icon: AiFillPhone },
  { id: 1, name: "foreveraluku@gmail.com", icon: AiTwotoneMail },
  { id: 1, name: "+25476930113", icon: BsWhatsapp },
];
