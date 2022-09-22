import bakers from "../assets/fresh.png";
import music from "../assets/music.png";
import ecommerce from "../assets/e-commerce.png";
import twitter from "../assets/twitter-clone.png";
import url from "../assets/url.png";

export const links = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/Adetayo.pdf",
    text: "Resume",
    anchor: true,
  },
];

export const tools = [
  { language: "HTML", completed: "95" },
  { language: "CSS", completed: "90" },
  { language: "JAVASCRIPT", completed: "90" },
  { language: "REACT", completed: "85" },
  { language: "JQUERY", completed: "80" },
  { language: "FIREBASE", completed: "80" },
];

export const prevProjects = [
  {
    id: 0,
    img: bakers,
    link: "https://tayor99.github.io/fresh-bakers/",
    github: "https://github.com/tayor99/fresh-bakers",
  },
  {
    id: 1,
    img: ecommerce,
    link: "https://e-commerce-cdrecw1ru-tayor99.vercel.app/",
    github: "https://github.com/tayor99/",
  },
  {
    id: 2,
    img: music,
    link: "https://musicapp-five.vercel.app/",
    github: "https://github.com/tayor99/musicplayer",
  },
  {
    id: 3,
    img: twitter,
    link: "https://twitter-app-two.vercel.app/",
    github: "https://github.com/tayor99/twitter-app",
  },
  {
    id: 4,
    img: url,
    link: "https://url-shortner-mopg.vercel.app/",
    github: "https://github.com/tayor99/url-shortner",
  },
];
