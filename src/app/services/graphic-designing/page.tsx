import Link from "next/link";
import Footer from "../../components/Footer";

export default function GraphicDesigning() {
  return (
    <main className="!w-full bg-cover bg-center bg-black text-white pb-10" style={{ backgroundImage: 'url(/media/bg.0f5970d1.png)' }}>
      <div className="w-full h-full flex items-center justify-center py-48 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/media/Inner_bg.23beb686.jpg)' }}>
        <div className="flex flex-col justify-center items-center xl:max-w-6xl gap-8 font-semibold text-white">
          <span className="text-4xl text-center xl:text-7xl">Graphic <span className="text-default">Designing</span></span>
          <nav aria-label="breadcrumb">
            <ul className="container flex items-center space-x-2 text-18 font-semibold text-white py-1.5 px-2">
              <li><Link className="hover:underline" href="/">Home</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><Link className="hover:underline" href="/services">Services</Link></li>
              <li className="flex items-center"><span className="mx-2">*</span><span className="text-default">Graphic designing</span></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="relative w-full overflow-hidden py-3 bg-default">
        <div className="flex items-center space-x-8 w-max">
          {[
            "IOS/Android App Development",
            "Website Development",
            "Digital Marketing",
            "Graphic Designing",
            "Content Writing",
            "Search Engine Optimization (SEO)",
            "Point of Sale (POS)",
            "Cyber Security",
            "IOS/Android App Development",
            "Website Development",
            "Digital Marketing",
            "Graphic Designing",
            "Content Writing",
            "Search Engine Optimization (SEO)",
            "Point of Sale (POS)",
            "Cyber Security"
          ].map((service, i) => (
            <div key={i} className="flex items-center justify-center gap-6">
              <span className="whitespace-nowrap text-xl font-bold text-black">{service}</span>
              <span className="flex justify-center items-center">
                <img src="/media/asteric.3e45eb6d.png" alt="Astrivix Asteric Image" className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto py-20">
        <div className="grid lg:grid-cols-[1fr,400px] gap-12 lg:gap-20">
          <div className="space-y-12">
            <div className="rounded-[32px] overflow-hidden">
              <img src="/media/sec1.e8ec9b83.jpg" alt="Business people" width={800} height={400} className="w-full object-cover" />
            </div>
            <div className="space-y-6 ">
              <p>Our Graphic Designing Services help businesses create visually compelling designs that enhance brand identity, engage audiences, and communicate messages effectively. Whether you need branding materials, social media graphics, UI/UX design, or marketing collateral, our team delivers high-quality visuals tailored to your needs. Let us bring your creative vision to life with stunning designs that leave a lasting impression.</p>
              <h2 className="text-4xl lg:text-5xl text-white">Key <span className="text-default font-semibold">features</span> of <span>graphic designing</span></h2>
              <p>We specialize in creating visually striking and impactful designs that communicate your brand's message effectively. Our focus is on delivering unique, creative solutions that enhance your brand's identity. Whether it's logos, marketing materials, or web design, we ensure each design is tailored to your target audience, driving engagement and reinforcing brand recognition. Let us bring your vision to life with design that speaks volumes.</p>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <ul className="space-y-4  xl:max-w-lg">
                  {[
                    "Unique branding & logo design.",
                    "Engaging social media visuals.",
                    "Impactful marketing materials.",
                    "User-friendly web & app design.",
                    "Custom illustrations & artwork."
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="bg-transparent rounded-full border-2 p-1 border-default text-center flex !items-center !justify-center">
                        <span className="w-[4px] h-[4px]  block bg-default rounded-full"></span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="h-full overflow-hidden">
                  <img src="/media/main.8c9f6fbb.jpg" alt="Main Image Acciobyte" width={1000} height={1000} className="w-full h-[230px] aspect-square object-cover rounded-xl" />
                </div>
              </div>
              <div className="rounded-[32px] overflow-hidden">
                <div className="grid md:grid-cols-1 gap-6">
                  <h2 className="text-4xl lg:text-5xl text-white ">Our <span className="text-default font-semibold">process</span> of graphic designing</h2>
                  <p>Our graphic design process begins with understanding your brand and goals, ensuring that every design aligns with your vision. We use the latest design trends and tools to craft visually appealing and cohesive designs. From initial concept sketches to final revisions, we work closely with you to create designs that resonate with your audience. Whether it's for digital or print, our designs are crafted for maximum impact, helping your business stand out and make a lasting impression</p>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-1">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shapes w-8 h-8 text-default !w-16 !h-16"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect x="3" y="14" width="7" height="7" rx="1"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
                        <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">01</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Discovery & Concept Development</h3>
                      <p className=" leading-relaxed">We understand your brand, goals, and design preferences to create a concept that aligns with your vision.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-2">
                      <img src="/media/step1.fe4ef8ea.jpg" alt="Discovery & Concept Development" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-2">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers w-8 h-8 text-default !w-16 !h-16"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                        <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">02</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Design Creation & Revisions</h3>
                      <p className=" leading-relaxed">Our designers craft high-quality visuals, incorporating feedback to refine and perfect the final design.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-1">
                      <img src="/media/step2.102fe844.jpg" alt="Design Creation & Revisions" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-blackfade2 rounded-[32px] p-10 flex flex-col flex-1 md:order-1">
                      <div className="flex items-start justify-between mb-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database w-8 h-8 text-default !w-16 !h-16"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                        <span className="text-24 text-center text-white flex flex-col">STEP <span className="text-default font-bold">03</span></span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-4">Finalization & Delivery</h3>
                      <p className=" leading-relaxed">We provide the final design in multiple formats, ready for digital or print use.</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden flex-1 bg-red-400 md:order-2">
                      <img src="/media/step3.7d08c5fb.jpg" alt="Finalization & Delivery" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto !mt-24">
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-12">Lets address your <span className="text-[#86c232]">questions</span> today!</h2>
                <div>
                  <div className="space-y-4">
                    {[
                      {
                        question: "What types of design services do you offer?",
                        answer: "We offer logo design, branding, social media graphics, UI/UX design, marketing materials, and custom illustrations."
                      },
                      {
                        question: "Do you provide revisions?",
                        answer: "Yes, we include multiple revision rounds to ensure the final design meets your expectations perfectly."
                      },
                      {
                        question: "Can you create designs based on our brand guidelines?",
                        answer: "Absolutely! We follow your existing brand guidelines to maintain consistency across all designs."
                      },
                      {
                        question: "What file formats do you provide?",
                        answer: "We deliver designs in multiple formats including AI, PSD, PNG, JPG, SVG, and PDF for various use cases."
                      }
                    ].map((item, i) => (
                      <div key={i} className="border-b border-none rounded-[24px] overflow-hidden bg-[#111]">
                        <h3 className="flex">
                          <button type="button" className="flex flex-1 items-center justify-between text-sm font-medium transition-all text-left px-6 py-6 hover:no-underline group">
                            <span className="text-white text-xl font-semibold text-left">{item.question}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                          </button>
                        </h3>
                        {/* You can add expand/collapse logic here if needed */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="lg:sticky lg:top-20 lg:self-start space-y-8">
            <div className="bg-[#111] rounded-[32px] p-8">
              <h3 className="text-white text-xl font-medium mb-6">Services Category</h3>
              <div className="space-y-4">
                {[
                  { name: "Website Development", href: "/services/website-development" },
                  { name: "Digital Marketing", href: "/services/digital-marketing" },
                  { name: "Graphic Designing", href: "/services/graphic-designing" },
                  { name: "Social Media Marketing", href: "/services/social-media-marketing" },
                  { name: "Content Writing", href: "/services/content-writing" },
                  { name: "Search Engine Optimization", href: "/services/search-engine-optimization" },
                  { name: "Software Development", href: "/services/software-development" },
                  { name: "Cyber Security", href: "/services/cyber-security" },
                  { name: "E-Commerce", href: "/services/e-commerce" },
                  { name: "Illustrations", href: "/services/illustrations" },
                  { name: "Video Animation", href: "/services/video-animation" },
                  { name: "Point of Sale (POS)", href: "/services/point-of-sale" }
                ].map((service, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-gray-800 group cursor-pointer">
                    <Link className="w-full flex items-center justify-between" href={service.href}>
                      <span className="group-hover:text-white transition-colors capitalize">{service.name}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right text-default w-5 h-5 transform -rotate-45 group-hover:rotate-0 transition-transform"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-[32px] p-7 xl:p-20 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-warning mx-auto mb-5 w-24 h-24 text-default"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M12 7v2"></path><path d="M12 13h.01"></path></svg>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h3 className="text-default text-xl font-bold">You have different questions?</h3>
              </div>
              <p className="mb-6">Our team will answer all your questions.</p>
              <Link href="/contact" className="w-full bg-default text-black font-semibold rounded-full py-3 px-6 flex items-center justify-center gap-2 hover:bg-default/90 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                (20) 8855-314
              </Link>
            </div>
          </aside>
        </div>
      </div>
      <section className="relative w-full overflow-hidden py-24 md:py-32">
        <div className="relative max-w-[90rem] mx-auto sm:px-6 lg:px-8 z-10">
          <div className="flex flex-col items-center text-center">
            <span className="text-white text-32 font-semibold uppercase tracking-wider">Let's Collaborate</span>
            <div className="relative inline-flex flex-col items-center">
              <h2 className="text-42 lg:text-[180px] font-bold text-white leading-loose tracking-tight">LET'S WORK</h2>
              <div className="absolute -top-14 lg:top-52 my-6 md:my-8 z-10 group">
                <Link href="/contact" className="flex items-center justify-center w-20 h-20 lg:w-32 lg:h-32 md:w-40 md:h-40 bg-default rounded-full hover:bg-default transition-all duration-300 group shadow-[0_0_45px_rgba(212,255,77,1)] hover:shadow-[0_0_35px_rgba(212,255,77,1)]">
                  <div className="flex flex-col items-center text-11 lg:text-18 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right ml-1 w-6 h-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                    Get In Touch
                  </div>
                </Link>
              </div>
              <h2 className="text-42 lg:text-[180px] font-bold text-white leading-[0.95] tracking-tight">TOGETHER</h2>
            </div>
          </div>
          <div className="absolute bottom-80 -left-32 z-0">
            <img src="/media/CTA.61aa7579.png" alt="Astrivix Sphere Image" className="w-80 h-80 animate-spin-grow" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 