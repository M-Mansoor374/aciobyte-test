"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import "../../public/site.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ExpertiseCard from "./components/ExpertiseCard";
import HowItWorksSection from "./components/HowItWorksSection";
import Projects from './projects/page';
import Image from "next/image";
import { useRef, useState } from "react";

const SERVICES = [
  {
    name: 'Website Development',
    description: "We build responsive, fast, and secure websites tailored to your brand's needs. Whether it's an eCommerce store, a corporate website, or a custom web application, we deliver top-notch solutions.",
    icon: (
      <svg xmlns="log.jpg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-activity w-8 h-8 sm:w-10 sm:h-10 text-red-500 stroke-[1.5] filter-red"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
    ),
  },
  {
    name: 'Digital Marketing',
    description: 'Strategies combining SEO, PPC, content marketing, and social media to grow your brand online.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bullhorn w-8 h-8 sm:w-10 sm:h-10 text-red-500 stroke-[1.5] filter-red"><path d="M3 11V9a4 4 0 0 1 4-4h11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a4 4 0 0 1-4-4z"></path><path d="M7 15v2a2 2 0 0 0 2 2h2"></path></svg>
    ),
  },
  {
    name: 'Graphic Designing',
    description: 'Visually compelling designs to enhance brand identity and engage audiences.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette w-8 h-8 sm:w-10 sm:h-10 text-red-500 stroke-[1.5] filter-red"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 22a10 10 0 1 1 10-10c0 5.523-4.477 10-10 10zm0 0a4 4 0 0 1-4-4c0-2.21 1.79-4 4-4s4 1.79 4 4a4 4 0 0 1-4 4z"></path></svg>
    ),
  },
  {
    name: 'Social Media Marketing',
    description: "Increase your brand's visibility and engagement across popular platforms.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2 w-8 h-8 sm:w-10 sm:h-10 text-red-500 stroke-[1.5] filter-red"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51l6.83 3.98"></path><path d="M15.41 6.51l-6.82 3.98"></path></svg>
    ),
  },
  {
    name: 'Content Writing',
    description: 'Professional content creation for blogs, websites, and marketing materials.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-8 h-8 sm:w-10 sm:h-10 text-red-500 stroke-[1.5] filter-red"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><path d="M14 2v6h6"></path><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>
    ),
  },
  {
    name: 'Search Engine Optimization (SEO)',
    description: 'Boost your online visibility and drive organic traffic with expert SEO strategies.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart-2 w-8 h-8 sm:w-10 sm:h-10 text-red-500 stroke-[1.5] filter-red"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
    ),
  },
  {
    name: 'Software Development',
    description: 'Custom software solutions for web, mobile, and enterprise needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-8 h-8 sm:w-10 sm:h-10 text-red-500 stroke-[1.5] filter-red"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    ),
  },
  {
    name: 'Cyber Security',
    description: 'Protect your business with advanced cyber security solutions and monitoring.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-8 h-8 sm:w-10 sm:h-10 text-red-500 stroke-[1.5] filter-red"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    ),
  },
  {
    name: 'E-Commerce',
    description: 'End-to-end e-commerce solutions for online stores and marketplaces.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart w-8 h-8 sm:w-10 sm:h-10 text-red-500 stroke-[1.5] filter-red"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    ),
  },
  {
    name: 'Illustrations',
    description: 'Custom illustrations and artwork to bring your ideas to life.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image w-8 h-8 sm:w-10 sm:h-10 text-red-500 stroke-[1.5] filter-red"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
    ),
  },
  {
    name: 'Video Animation',
    description: 'Engaging video animations for explainer, promo, and branding needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-film w-8 h-8 sm:w-10 sm:h-10 text-red-500 stroke-[1.5] filter-red"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
    ),
  },
  {
    name: 'Point of Sale (POS)',
    description: 'Robust POS solutions for retail and hospitality businesses.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card w-8 h-8 sm:w-10 sm:h-10 text-red-500 stroke-[1.5] filter-red"><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
    ),
  },
];

export default function Home() {
  const addressRef = useRef<HTMLDivElement>(null);
  const [isBlack, setIsBlack] = useState(false);

  const handleButtonClick = () => {
    setIsBlack(true);
    addressRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TechGuar</title>
        <meta name="description" content="Acciobyte offers expert web and mobile app development, creative graphic design, and professional penetration testing services. Build secure, stunning, and high-performing digital solutions with our skilled team." />
        <meta name="author" content="Acciobyte" />
        <meta name="keywords" content="web development services,mobile app development,graphic design agency,penetration testing company,Next.js developers,TypeScript development,UI/UX design,cybersecurity services,Acciobyte,tailored software solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:title" content="Acciobyte – Web, App, Design &amp; Pen Testing Experts" />
        <meta property="og:description" content="Build stunning websites and apps, get custom graphics, and ensure cybersecurity with Acciobyte's full-service digital solutions." />
        <meta property="og:url" content="https://www.acciobyte.com" />
        <meta property="og:site_name" content="Acciobyte" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Acciobyte – Web, App, Design &amp; Pen Testing Experts" />
        <meta name="twitter:description" content="Build stunning websites and apps, get custom graphics, and ensure cybersecurity with Acciobyte's full-service digital solutions." />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
      </Head>
      
      {/* Notifications and floating dot */}
      <section aria-label="Notifications alt+T" tabIndex={-1} aria-live="polite" aria-relevant="additions text" aria-atomic="false"></section>
      <div style={{position:'fixed',top:0,left:0,width:'15px',height:'15px',backgroundColor:'#EF4444',borderRadius:'50%',pointerEvents:'none',transform:'translate(-50%, -50%)',zIndex:9999}} className="hidden lg2:block"></div>

      {/* Navigation */}
      <Navigation />

      {/* HERO SECTION */}
      <div className="bg-contain bg-center bg-black min-h-screen flex items-center overflow-x-hidden" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
        <div className="w-full h-full wrapper py-20 sm:py-32 lg:py-40 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/hero_bg3.061ff69e.jpg)' }}>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container mx-auto px-4 lg:px-6">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem] text-center">
              <h2 className="text-white mb-4" style={{ fontSize: '3rem', lineHeight: '1.1' }}>Innovative solutions for&nbsp;</h2>
              <div className="flex flex-wrap justify-center text-center break-words whitespace-normal w-full">
                <RotatingText
                  texts={[
                    'IOS/Android App Development',
                    'Website Development',
                    'Digital Marketing',
                    'Graphic Designing',
                    'Content Writing',
                  ]}
                  fontSize="3.5rem" // Pass a prop to double the font size for rotating text
                />
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center gap-6 mt-8 sm:mt-12">
              <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-2xl">
                <p className="text-white text-base sm:text-lg lg:text-22 text-center max-w-4xl mx-auto">At our Creative Digital Agency, we bring your ideas to life by crafting engaging, impactful digital experiences that captivate audiences and drive results. From innovative web design to compelling content and cutting-edge digital strategies.</p>
                <Link className="mt-4 flex justify-center gap-4 group" href="/contact">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow hover:bg-primary/90 bg-gray-600 px-8 py-2 rounded-full text-base sm:text-lg lg:!text-18 font-semibold min-w-[140px]">Get In Touch</button>
                  <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-default transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-lg sm:text-22 !text-black rounded-full"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Marquee Bar with Play Button and Circular Marquee */}
      <div className="w-full relative z-20" style={{ minHeight: 140 }}>
        <div className="absolute left-8 top-[-210%] transform -translate-y-[20%] flex items-center gap-4" style={{ minHeight: 90 }}>
          {/* Left: Large Red Play Button */}
          <button className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center" style={{ background: '#ef4444' }} aria-label="Play">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="8,5 19,12 8,19 8,5" fill="none" />
            </svg>
          </button>
          {/* Right: Circular Marquee with Arrow Up */}
          <div className="relative flex items-center justify-center" style={{ width: 120, height: 120 }}>
            <svg width="120" height="120" viewBox="0 0 120 120" className="absolute left-0 top-0 animate-spin-slow" style={{ zIndex: 1 }}>
              <defs>
                <path id="circlePathLearn" d="M60,10 a50,50 0 1,1 -0.1,0" />
              </defs>
              <text fill="#fff" fontSize="14" fontWeight="bold" letterSpacing="2">
                <textPath href="#circlePathLearn" startOffset="0%">
                  LEARN MORE • LEARN MORE • LEARN MORE •
                </textPath>
              </text>
            </svg>
            {/* Center Arrow Up Icon */}
            <span className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
          transform-origin: 50% 50%;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Scrolling Services Bar */}
      <div className="w-full overflow-hidden py-4 bg-default mt-4">
        <div className="whitespace-nowrap animate-marquee flex items-center gap-12 text-black font-bold text-4xl md:text-5xl" style={{animation: 'marquee 30s linear infinite'}}>
          <span>Point of Sale (POS)</span>
          <span className="mx-8">*</span>
          <span>Cyber Security</span>
          <span className="mx-8">*</span>
          <span>IOS/Android App Development</span>
          <span className="mx-8">*</span>
          <span>Website Development</span>
          <span className="mx-8">*</span>
          <span>Digital Marketing</span>
          <span className="mx-8">*</span>
          <span>Graphic Designing</span>
          <span className="mx-8">*</span>
          <span>Content Writing</span>
          <span className="mx-8">*</span>
          <span>Search Engine Optimization (SEO)</span>
        </div>
      </div>

      {/* ABOUT/AGENCY SECTION */}
      <section className="relative min-h-screen flex items-center bg-black py-0 overflow-x-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-24 lg:gap-[8vw] px-4 lg:px-0 min-h-screen">
          {/* Left: About Agency / Hero Section */}
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative z-10 max-w-[520px] min-h-[520px]">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex items-center gap-2 mb-2 justify-center lg:justify-start">
                <span className="text-red-500 text-xl font-bold">★</span>
                <span className="uppercase font-bold text-red-500 tracking-wider text-sm">About Agency</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-2">
                Crafting <span className="font-extrabold text-red-500">unique digital</span>
              </h2>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-2">
                experiences that elevate<br className="hidden sm:block" /> your brand
              </div>
              <div className="flex items-center gap-4 mt-2 justify-center lg:justify-start">
                <Link href="/contact">
                  <button className="inline-flex items-center justify-center gap-2 text-base sm:text-lg font-semibold rounded-full px-8 py-3 bg-red-600 text-white shadow-lg hover:bg-red-700 transition-all min-w-[140px]">Contact Us</button>
                </Link>
                <span className="w-12 h-12 rounded-full flex items-center justify-center bg-red-500 hover:bg-white transition-all duration-300 group shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-black group-hover:text-red-500 transition-all"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </span>
              </div>
            </div>
            {/* 3D Ball - much lower and left, not overlapping text */}
            <div className="absolute left-[-120px] bottom-[-100px] w-[200px] h-[200px] z-0 hidden lg:block pointer-events-none select-none">
              <img src="/media/sphere.4b56a70e.png" alt="Red Ball" className="w-full h-full object-contain opacity-90 animate-spin-slow" />
            </div>
          </div>
          {/* Right: Timeline/Features Section */}
          <div className="flex-1 relative z-10 flex flex-col gap-12 max-w-[540px] w-full pt-16 lg:pt-24 pl-0 lg:pl-8">
              <div className="hidden lg:block absolute -left-[30px] top-0 w-[2px] h-full bg-white/20"></div>
              {/* Service/mission cards */}
              <div className="relative flex gap-4 sm:gap-6 group cursor-pointer">
                <div className="hidden lg:block absolute -left-[40px] top-1/2 w-8 h-8 rounded-full -translate-y-1/2">
                  <img src="/media/dot.5c102e3c.svg" alt="Acciobyte Dot Service" className="filter-red" />
                </div>
                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500 rounded-lg p-3 flex items-center justify-center">
                    <img src="/media/mission.25c4c757.svg" alt="Acciobyte Service Icon" className="w-full h-full filter-black" />
                  </div>
                  <h3 className="text-white text-lg sm:text-xl lg:text-3xl font-bold mb-2 group-hover:text-red-500 transition-colors">Your Success, Our Mission</h3>
                  <p className="text-white text-justify leading-relaxed text-sm sm:text-base lg:text-lg">We measure our success through the achievements of our clients. With a results-driven approach and a commitment to quality, we deliver digital solutions that create meaningful impact.</p>
                </div>
              </div>
              <div className="relative flex gap-4 sm:gap-6 group cursor-pointer">
                <div className="hidden lg:block absolute -left-[40px] top-1/2 w-8 h-8 rounded-full -translate-y-1/2">
                  <img src="/media/dot.5c102e3c.svg" alt="Acciobyte Dot Service" className="filter-red" />
                </div>
                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500 rounded-lg p-3 flex items-center justify-center">
                    <img src="/media/creators.da5dacdb.svg" alt="Acciobyte Service Icon" className="w-full h-full filter-black" />
                  </div>
                  <h3 className="text-white text-lg sm:text-xl lg:text-3xl font-bold mb-2 group-hover:text-red-500 transition-colors">Creators Of Digital Excellence</h3>
                  <p className="text-white text-justify leading-relaxed text-sm sm:text-base lg:text-lg">Driven by innovation and excellence, we reimagine digital possibilities. Our team builds solutions that not only fulfill your vision but also elevate your brand to the next level.</p>
                </div>
              </div>
              <div className="relative flex gap-4 sm:gap-6 group cursor-pointer">
                <div className="hidden lg:block absolute -left-[40px] top-1/2 w-8 h-8 rounded-full -translate-y-1/2">
                  <img src="/media/dot.5c102e3c.svg" alt="Acciobyte Dot Service" className="filter-red" />
                </div>
                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500 rounded-lg p-3 flex items-center justify-center">
                    <img src="/media/innovation.257d9eb9.svg" alt="Acciobyte Service Icon" className="w-full h-full filter-black" />
                  </div>
                  <h3 className="text-white text-lg sm:text-xl lg:text-3xl font-bold mb-2 group-hover:text-red-500 transition-colors">Innovating the digital landscape</h3>
                  <p className="text-white text-justify leading-relaxed text-sm sm:text-base lg:text-lg">At the core of our agency is a commitment to excellence and creativity. We specialize in crafting digital solutions that not only meet your needs but also exceed your brand.</p>
                </div>
              </div>
              <div className="relative flex gap-4 sm:gap-6 group cursor-pointer">
                <div className="hidden lg:block absolute -left-[40px] top-1/2 w-8 h-8 rounded-full -translate-y-1/2">
                  <img src="/media/dot.5c102e3c.svg" alt="Acciobyte Dot Service" className="filter-red" />
                </div>
                <div className="flex flex-col gap-4 sm:gap-5">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500 rounded-lg p-3 flex items-center justify-center">
                    <img src="/media/brands.6176527f.svg" alt="Acciobyte Service Icon" className="w-full h-full filter-black" />
                  </div>
                  <h3 className="text-white text-lg sm:text-xl lg:text-3xl font-bold mb-2 group-hover:text-red-500 transition-colors">Helping Brands Thrive Online</h3>
                  <p className="text-white text-justify leading-relaxed text-sm sm:text-base lg:text-lg">Our goal is simple: empower brands to grow and succeed in the digital world. Through strong client partnerships and custom strategies, we deliver results that matter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES SECTION - MOVED HERE */}
      <section className="relative min-h-screen py-12 sm:py-16 lg:py-20 overflow-visible bg-black overflow-x-hidden">
        <div className="container relative mx-auto z-20 px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div className="h-fit self-start text-center lg:text-start">
              <div className="w-full text-red-500 text-base sm:text-18 font-bold flex items-center justify-center lg:justify-start gap-4 my-6 sm:my-9">
                <img src="/media/asterisk_default.4355d764.png" alt="Astrivix Asteric Image" className="w-4 h-4 sm:w-5 sm:h-5 filter-red" />
                <h4>OUR SERVICES</h4>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">Our <span className="text-red-500 font-bold">digital services</span></h2>
              <p className="text-2xl sm:text-3xl md:text-4xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8">to grow your brand</p>
            </div>
            <div className="relative">
              <div className="relative flex flex-col gap-4 sm:gap-6 lg:py-24 group cursor-pointer">
                <div className="flex flex-col gap-4 sm:gap-5">
                  <p className="text-white text-center lg:text-justify leading-relaxed text-base sm:text-lg">Join our creative community to collaborate, innovate, and thrive together. We welcome passionate individuals eager to make.</p>
                </div>
                <Link className="mt-4 flex !justify-center lg:!justify-start gap-4 group" href="/services">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-2 border-gray-400 bg-gray-700 text-white rounded-full px-8 py-2 font-semibold min-w-[160px] shadow-md">All Services</button>
                  <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-default transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-lg sm:text-22 !text-black rounded-full"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="container mx-auto py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {SERVICES.map((service, idx) => (
                <div key={service.name} className="group relative cursor-pointer bg-[#111] rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 hover:bg-[#151515] transition-colors duration-300">
                <div className="flex justify-between items-start mb-12 sm:mb-20">
                    {service.icon}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-5 h-5 sm:w-6 sm:h-6 text-red-500  group-hover:rotate-[45deg] transition-all  duration-300"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{service.name}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 sm:mt-16 lg:mt-20">
                              <p className="text-white text-lg sm:text-xl">Let&apos;s make something great work together. <Link className="text-red-500 hover:underline underline-offset-4" href="/pricing-plan">Get Free Quote</Link></p>
            </div>
          </div>
        </div>
      </section>

      <ExpertiseCard />

      {/* WHY CHOOSE US/BENEFITS SECTION */}
      <section className="relative min-h-screen overflow-hidden py-12 sm:py-16 lg:py-20 bg-black overflow-x-hidden">
        <div className="container relative mx-auto z-20 px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-7 gap-8 lg:gap-0">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-2">
                <img src="/media/asterisk_default.4355d764.png" alt="Astrivix Asteric" className="w-4 h-4 sm:w-5 sm:h-5 filter-red" />
                <span className="text-white uppercase tracking-wider font-semibold text-sm sm:text-base">WHY CHOOSE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl !leading-normal text-white font-light">Expertise for <span className="text-red-500 font-semibold">your digital</span><br />growth journey</h2>
            </div>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
              Our dedicated team is committed to understanding your unique needs, ensuring that we provide innovative strategies that drive results. With a focus on quality and integrity.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-8 sm:space-y-12">
              <div className="space-y-6">
                <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-transparent border border-gray-800 overflow-hidden cursor-pointer group">
                  <div className="absolute inset-0 transition-transform duration-700 ease-in-out translate-x-0 bg-[length:130%_100%] bg-no-repeat" style={{ backgroundImage: 'linear-gradient(to right, #1a1a1a 0%, #1a1a1a 40%, rgba(26,26,26,0.9) 55%, rgba(26,26,26,0.7) 60%, rgba(26,26,26,0.5) 65%, rgba(26,26,26,0.3) 70%, rgba(26,26,26,0.1) 75%, transparent 90%)' }}></div>
                  <div className="relative z-10">
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">Data-Driven Approach</h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">We leverage data and insights to make informed decisions that lead to more effective and efficient solutions.</p>
                  </div>
                </div>
                <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-transparent border border-gray-800 overflow-hidden cursor-pointer group">
                  <div className="absolute inset-0 transition-transform duration-700 ease-in-out -translate-x-full bg-[length:130%_100%] bg-no-repeat" style={{ backgroundImage: 'linear-gradient(to right, #1a1a1a 0%, #1a1a1a 40%, rgba(26,26,26,0.9) 55%, rgba(26,26,26,0.7) 60%, rgba(26,26,26,0.5) 65%, rgba(26,26,26,0.3) 70%, rgba(26,26,26,0.1) 75%, transparent 90%)' }}></div>
                  <div className="relative z-10">
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">Competitive Pricing</h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">We offer our top-quality services at competitive prices, providing you with great value for your investment.</p>
                  </div>
                </div>
                <div className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-transparent border border-gray-800 overflow-hidden cursor-pointer group">
                  <div className="absolute inset-0 transition-transform duration-700 ease-in-out -translate-x-full bg-[length:130%_100%] bg-no-repeat" style={{ backgroundImage: 'linear-gradient(to right, #1a1a1a 0%, #1a1a1a 40%, rgba(26,26,26,0.9) 55%, rgba(26,26,26,0.7) 60%, rgba(26,26,26,0.5) 65%, rgba(26,26,26,0.3) 70%, rgba(26,26,26,0.1) 75%, transparent 90%)' }}></div>
                  <div className="relative z-10">
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">Ethical Business Practices</h3>
                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base">We maintain the highest level of professionalism and ethical standards professionalism in all our business dealings.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:sticky lg:top-20 space-y-8 flex items-center justify-center relative">
              {/* Rotating ball absolutely positioned to the right, behind the image, z-index lower */}
              <div className="hidden lg:block absolute top-1/2 right-[-50px] -translate-y-1/2 pointer-events-none select-none" style={{zIndex: 0}}>
                <div className="rotating-sphere-bg" style={{ width: '60px', height: '60px', background: 'black' }}></div>
              </div>
              {/* Business meeting image, z-index higher */}
              <div className="relative w-full h-full flex items-center justify-center rounded-2xl sm:rounded-3xl overflow-hidden bg-black" style={{ minHeight: '400px', minWidth: '400px', zIndex: 2, position: 'relative' }}>
                <img
                  src="1.png"
                  alt="Business Meeting"
                  className="object-cover w-full h-full rounded-2xl sm:rounded-3xl"
                  style={{ display: 'block', marginRight: '40px' }}
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-20 -right-32 z-0 hidden lg:block">
            <img src="/media/hex.eced7c60.png" alt="Astrivix Sphere Image" className="w-80 h-80 animate-spin-grow filter-red" />
          </div>
        </div>
      </section>

      <HowItWorksSection />
      <section className="py-12 sm:py-16 lg:py-20 bg-black overflow-x-hidden">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="relative mx-auto z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div className="h-fit self-start text-center lg:text-start">
                <div className="w-full text-red-500 text-base sm:text-18 font-bold flex items-center justify-center lg:justify-start gap-4 my-6 sm:my-9">
                  <img src="/media/asterisk_default.4355d764.png" alt="Astrivix Asteric Image" className="w-4 h-4 sm:w-5 sm:h-5 filter-red" />
                  <h4>FEATURES</h4>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4">Innovative <span className="text-red-500 font-bold">features</span></h2>
                <p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white mb-6 sm:mb-8">for your digital success</p>
              </div>
              <div className="relative">
                <div className="relative flex flex-col gap-4 sm:gap-6 lg:py-24 group cursor-pointer">
                  <div className="flex flex-col gap-4 sm:gap-5">
                    <p className="text-white text-center lg:text-justify leading-relaxed text-base sm:text-lg">Our digital services empower brands with innovative strategies and solutions for sustainable growth and engagement.</p>
                  </div>
                  <Link className="mt-4 flex !justify-center lg:!justify-start gap-4 group" href="/about">
                    <button className="inline-flex items-center justify-center px-8 py-2 rounded-full bg-gray-600 text-white font-bold text-lg whitespace-nowrap">
                      Learn More
                    </button>
                    <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-red-500 transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right text-lg sm:text-22 !text-black rounded-full"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6 mt-8 sm:mt-10 lg:mt-0">
              <div className="bg-blackfade2/40 backdrop-blur-lg rounded-[24px] sm:rounded-[32px] overflow-hidden group hover:bg-[#151515] transition-colors duration-300 col-span-1 lg:col-span-3 p-0">
                <div className="relative w-full h-64 sm:h-[220px] rounded-[24px] sm:rounded-[32px] bg-red-500 flex items-center justify-center">
                  <img src="2.png" alt="Custom Branding Solutions" className="object-cover w-full h-full block" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3">Custom Branding Solutions</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Unique brand identity development, including logos, color palettes.</p>
                </div>
              </div>
              <div className="bg-blackfade2/40 backdrop-blur-lg p-6 sm:p-10 rounded-[24px] sm:rounded-[32px] overflow-hidden group hover:bg-[#151515] transition-colors duration-300 col-span-1 lg:col-span-2">
                <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-red-500 flex items-center justify-center" style={{ minHeight: '220px', minWidth: '220px' }}>
                  <img src="dd.png" alt="Data-Driven Digital Marketing" className="object-cover w-full h-full" />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-white text-xl sm:text-2xl font-semibold mb-3">Data-Driven Digital Marketing</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Strategies combining SEO, PPC, content marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Projects />

      {/* TESTIMONIALS SECTION (copied from About page) */}
      <section className="relative text-white py-8 lg:py-16 md:px-8 lg:px-16 overflow-hidden overflow-x-hidden">
        <div className="absolute inset-0 opacity-90"></div>
        <div className="container relative z-10 mx-auto">
          <div className="relative mx-auto !z-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="h-fit self-start text-center lg:text-start">
                <div className="w-full text-red-500 text-18 font-bold flex items-center justify-center lg:justify-start gap-4 my-9">
                  <img
                    src="/media/asterisk_default.4355d764.png"
                    alt="Asteric"
                    width={20}
                    height={20}
                    className="w-5 h-5 filter-red"
                  />
                  <h4>TESTIMONIALS</h4>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
                  Read what they have to say about{' '}
                  <span className="text-red-500 font-bold">working with us</span>
                </h2>
              </div>
              <div className="relative">
                <div className="relative flex flex-col gap-6 lg:py-24 group cursor-pointer">
                  <div className="flex flex-col gap-5">
                    <p className="text-white text-center lg:text-justify leading-relaxed lg:text-lg">
                      Discover how our clients have achieved success through our
                      innovative solutions and dedicated support.
                    </p>
                  </div>
                  <a
                    className="mt-4 flex !justify-center lg:!justify-start gap-4 group"
                    href="#"
                  >
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 h-9 bg-gray-600 p-7 rounded-full lg:!text-18 font-bold">
                      All Testimonials
                    </button>
                    <span className="w-14 h-14 rounded-full flex items-center justify-center bg-red-500 transform rotate-[-45deg] transition-all duration-300 ease-in-out group-hover:rotate-0 group-hover:bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right text-22 !text-black rounded-full"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4 bg-black/60 backdrop-blur-sm rounded-3xl p-8 flex flex-col items-center justify-between text-center">
                <div className="text-7xl font-bold mb-2">
                  <div>5.0</div>
                </div>
                <div className="flex justify-center mb-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-star w-6 h-6 fill-red-500 text-red-500"
                      >
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-400 mb-8">(40+ Reviews)</p>
                <h3 className="text-2xl font-semibold text-center mb-6">
                  Customer experiences that speak for themselves
                </h3>
                <div className="flex justify-center gap-2 mt-8 flex-wrap">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div
                      key={i}
                      className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-black"
                    >
                      <img
                        src="dd.png"
                        alt={`Customer ${i + 1}`}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-8 relative">
                <div className="h-full flex flex-col justify-between">
                  <div className="mb-8">
                    <div>
                      <img src="plo.png" width={300} alt="" />
                    </div>
                    <div className="mb-6">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-star w-6 h-6 fill-red-500 text-red-500"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                      Super impressed with their mobile app development service.
                      The team listened carefully to our needs and delivered an
                      app that exceeded expectations. A little delay in testing
                      phase but they managed it professionally. Highly
                      recommended!
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                        src="dd.png"
                        alt="Olivia Reed"
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">Olivia Reed</h4>
                      <p className="text-gray-400">Marketing Manager</p>
                    </div>
                    <div className="ml-auto flex space-x-2">
                      <button
                        className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-left w-5 h-5"
                        >
                          <path d="m12 19-7-7 7-7"></path>
                          <path d="M19 12H5"></path>
                        </svg>
                      </button>
                      <button
                        className="w-12 h-12 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors"
                        aria-label="Next testimonial"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-right w-5 h-5"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      CTA Section
      <section className="relative w-full overflow-hidden py-24 md:py-32">
        <div className="relative max-w-[90rem] mx-auto sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col items-center text-center">
            <span className="text-white text-32 font-semibold uppercase tracking-wider">
              Let&apos;s Collaborate
            </span>
            <div className="relative inline-flex flex-col items-center">
              <h2 className="text-42 lg:text-[180px] font-bold text-white leading-loose tracking-tight">
                LET&apos;S WORK
              </h2>
              <div className="absolute -top-14 lg:top-52 my-6 md:my-8 z-10 group">
                <Link
                  className="flex items-center justify-center w-20 h-20 lg:w-32 lg:h-32 md:w-40 md:h-40 bg-default rounded-full hover:bg-default transition-all duration-300 group shadow-[0_0_45px_rgba(212,255,77,1)] hover:shadow-[0_0_35px_rgba(212,255,77,1)]"
                  href="/contact"
                >
                  <div className="flex flex-col items-center text-11 lg:text-18 font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-right ml-1 w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                    Get In Touch
                  </div>
                </Link>
              </div>
              <h2 className="text-42 lg:text-[180px] font-bold text-white leading-[0.95] tracking-tight">
                TOGETHER
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-0 sm:bottom-80 sm:-left-32 z-0 block">
          <Image
            src="/media/CTA.61aa7579.png"
            alt="Astrivix Sphere Image"
            width={320}
            height={320}
            className="w-40 h-40 sm:w-80 sm:h-80 animate-spin-grow"
          />
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}

function RotatingText({ texts, fontSize }: { texts: string[], fontSize?: string }) {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState<'in' | 'out'>('in');

  React.useEffect(() => {
    let fadeOut: NodeJS.Timeout;
    let next: NodeJS.Timeout;
    if (direction === 'in') {
      fadeOut = setTimeout(() => setDirection('out'), 1800);
    } else {
      next = setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setDirection('in');
      }, 200);
    }
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(next);
    };
  }, [direction, texts.length]);

  return (
    <span
      key={index}
      className={`text-red-500 font-bold w-full h-full p-2 sm:p-3 break-words whitespace-normal transition-all duration-500 ease-in-out inline-block ${direction === 'in' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
      style={{ display: 'inline-block', fontSize: fontSize || '1.75rem', lineHeight: '1.1' }}
    >
      {texts[index]}
    </span>
  );
}
