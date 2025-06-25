import React, { useRef } from 'react';
import { FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import Nav from './navBar';
import Home from './Home';
import InfiniteCarousel from "./crousel1";
import TripleCarousel from "./crousel2";
import YouTubeEmbed from "./youtubeIframe";
import ReviewCarousel from "./testimonialCard";
import ProcessSteps from "./steps";
import SkillsProgress from "./skillProgress";
import FAQSection from "./faqSection";
import ContactCard from "./contactCard";
import ShortsCarousel from './crousel2';
import { FaHome } from "react-icons/fa";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { LuFileQuestion } from "react-icons/lu";
import { PiCompassToolLight } from "react-icons/pi";







function App() {
  const navRef = useRef();
  const portfolioRef = useRef();
  const aboutRef = useRef();
  const skillRef = useRef();
  const contactRef = useRef();
  const testimonialRef = useRef();
  const faqRef = useRef();

  const scrollToSection = (ref) => {
  if (!ref.current) return;

  const targetY = ref.current.getBoundingClientRect().top + window.pageYOffset;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 1000; // ms
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  let startTime = null;

  const animate = (time) => {
    if (!startTime) startTime = time;
    const timeElapsed = time - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeOutCubic(progress);
    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};


  return (
    <div className='w-full scroll-smooth touch-pan-y border border-black overscroll-contain'>
      {/* App Bar */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full backdrop-blur-md bg-white/30 border-[2px] border-white/95 shadow-md flex gap-6 text-white transition-all duration-300 scale-110 mb-1">
  <button
    className="text-white hover:scale-150 transition-transform duration-300 p-2"
    onClick={() => scrollToSection(navRef)}
  >
    <FaHome size={20} />
  </button>
  <button
    className="text-white hover:scale-150 transition-transform duration-300 p-2"
    onClick={() => scrollToSection(aboutRef)}
  >
    <MdOutlineOndemandVideo size={22} />
  </button>
  <button
    className="text-white hover:scale-150 transition-transform duration-300 p-2"
    onClick={() => scrollToSection(testimonialRef)}
  >
    <MdOutlineReviews size={22} />
  </button>
  <button
    className="text-white hover:scale-150 transition-transform duration-300 p-2"
    onClick={() => scrollToSection(faqRef)}
  >
    <LuFileQuestion size={22} />
  </button>
  <button
    className="text-white hover:scale-150 transition-transform duration-300 p-2 text-2xl"
    onClick={() => scrollToSection(skillRef)}
  >
    <PiCompassToolLight />
  </button>
</nav>


      {/* Sections */}
      <Nav ref={navRef} />
      <Home />
      <InfiniteCarousel/>
      <ShortsCarousel ref={aboutRef} />
      <YouTubeEmbed/>
      <ReviewCarousel ref={testimonialRef}/>
      <ProcessSteps/>
      <SkillsProgress ref={skillRef}/>
      <FAQSection ref={faqRef}/>
      <ContactCard/>
    </div>
  );
}

export default App;
