'use client'
import About from "@/components/About";
import Footer from "@/components/Footer";
import JobDesc from "@/components/JobDesc";
import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import Image from "next/image";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession()
  
  if(session){
    return (
      <>
      <div className="selection:bg-blue-400 selection:text-pink-300">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div></div>
      <Navbar />
      <JobDesc />
      
      </>
    );
  }
  return (
    <>
    <div className="selection:bg-blue-400 selection:text-pink-300">
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div></div>
    <Navbar />
    <Search />
    <About />
    <Footer />
    
    </>
  );
}
