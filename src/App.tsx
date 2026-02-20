// (imports stay same)
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Code2,
  Database,
  Cloud,
  BrainCircuit,
  Award,
  MapPin,
  ChevronRight,
  Sun,
  Moon,
  Users,
  Star,
  GitBranch
} from 'lucide-react';
import Chatbot from './components/Chatbot';

/* -------------------- DATA -------------------- */

const SKILLS = [
  "Core Java","Python","HTML","CSS","MySQL","AWS (Basics)",
  "Oracle Cloud (OCI)","Data Structures","Algorithms","OOP",
  "OS","Computer Networks","DBMS","Git","GitHub","Firebase"
];

const PROJECTS = [
  {
    title:"Swift Meet - Smart Appointment Planner",
    description:"Firebase scheduling system reducing conflicts by 100% and improving attendance by 30%.",
    tech:["Firebase","Google Calendar API"],
    icon:<Code2 className="text-blue-400"/>
  },
  {
    title:"Sentiment Analysis for Hospitals",
    description:"NLP model with 85% accuracy to analyze patient reviews and detect service gaps.",
    tech:["Python","NLP","Scikit-learn"],
    icon:<BrainCircuit className="text-blue-400"/>
  },
  {
    title:"Live Hand Gesture Recognition",
    description:"Real-time computer vision system enabling touchless interaction.",
    tech:["Python","OpenCV","MediaPipe"],
    icon:<Database className="text-blue-400"/>
  }
];

const CERTIFICATIONS = [
  { name:"Oracle Cloud Infrastructure Foundations Associate", icon:<Cloud/> },
  { name:"Oracle Java Foundations Badge", icon:<Code2/> },
  { name:"AWS Solutions Architecture Simulation", icon:<Cloud/> },
  { name:"IBM Java Programming", icon:<Code2/> },
  { name:"Infosys Python Programming", icon:<Code2/> }
];

const TypingAnimation = () => {
  const words = ["Backend Developer","Cloud Enthusiast","AI Builder","Problem Solver"];
  const [i,setI]=useState(0);
  const [j,setJ]=useState(0);
  const [rev,setRev]=useState(false);

  useEffect(()=>{
    if(j===words[i].length+1 && !rev){ setTimeout(()=>setRev(true),1200); return;}
    if(j===0 && rev){ setRev(false); setI((p)=>(p+1)%words.length); return;}
    const t=setTimeout(()=>setJ(p=>p+(rev?-1:1)), rev?60:120);
    return()=>clearTimeout(t);
  },[j,rev,i]);

  return <span className="text-primary">{words[i].substring(0,j)}|</span>;
};

export default function App(){

  const [dark,setDark]=useState(true);
  const [visits,setVisits]=useState(0);

  useEffect(()=>{
    const v=parseInt(localStorage.getItem("visits")||"0")+1;
    localStorage.setItem("visits",v);
    setVisits(v);
  },[]);

  return (
    <div className={`${dark?"bg-black text-white":"bg-white text-black"} min-h-screen`}>

{/* NAV */}
<nav className="fixed top-0 w-full backdrop-blur border-b border-white/10 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-bold text-lg">AKASH<span className="text-primary">.N</span></div>
<div className="flex gap-4 items-center">
<span className="text-xs opacity-50 flex gap-1 items-center"><Users size={12}/> {visits}</span>
<button onClick={()=>setDark(!dark)}>{dark?<Sun/>:<Moon/>}</button>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-6 pt-32">

{/* HERO */}
<section className="flex flex-col md:flex-row items-center justify-between gap-10 mb-32">
<div className="flex-1">
<h1 className="text-5xl md:text-6xl font-bold mb-4">
Hi, I'm <span className="text-primary">Akash N</span>
</h1>
<div className="text-xl mb-4"><TypingAnimation/></div>
<p className="opacity-60 mb-8 max-w-lg">
Building intelligent systems that solve real-world problems.
</p>

{/* 🔥 FIXED DOWNLOAD BUTTON */}
<motion.a
href="/Akash_NEW_Resume1.pdf"
download
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className="inline-flex items-center gap-2 px-6 py-3 bg-primary rounded-xl font-bold"
>
<Download size={18}/> Download Resume
</motion.a>

<div className="flex gap-3 mt-6">
<a href="https://github.com/akash-n-dev" target="_blank"><Github/></a>
<a href="https://linkedin.com/in/akash-n-dev" target="_blank"><Linkedin/></a>
</div>
</div>

<img
src="https://picsum.photos/seed/akash/500"
className="rounded-full w-64 h-64 object-cover"
/>
</section>

{/* SKILLS */}
<section className="mb-24">
<h2 className="text-3xl font-bold mb-6">Skills</h2>
<div className="flex flex-wrap gap-3">
{SKILLS.map(s=>(
<span key={s} className="px-4 py-2 border rounded-xl">{s}</span>
))}
</div>
</section>

{/* PROJECTS */}
<section className="mb-24">
<h2 className="text-3xl font-bold mb-6">Projects</h2>
<div className="grid md:grid-cols-3 gap-6">
{PROJECTS.map(p=>(
<div key={p.title} className="border p-6 rounded-xl">
{p.icon}
<h3 className="font-bold mt-3">{p.title}</h3>
<p className="opacity-60 text-sm mt-2">{p.description}</p>
</div>
))}
</div>
</section>

{/* CERTIFICATIONS */}
<section className="mb-24">
<h2 className="text-3xl font-bold mb-6">Certifications</h2>
{CERTIFICATIONS.map(c=>(
<div key={c.name} className="flex gap-3 mb-2">{c.icon}{c.name}</div>
))}
</section>

{/* CONTACT */}
<section className="mb-24">
<h2 className="text-3xl font-bold mb-4">Contact</h2>
<p className="flex items-center gap-2"><Mail size={16}/> akashn200328@gmail.com</p>
<p className="flex items-center gap-2"><MapPin size={16}/> Bengaluru, India</p>
</section>

</main>

<footer className="text-center opacity-50 pb-10">
© {new Date().getFullYear()} Akash N
</footer>

<Chatbot/>

</div>
  );
}
