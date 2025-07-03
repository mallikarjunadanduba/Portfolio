import React, { useRef, useState, useEffect } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Services from './Services';
import Skills from './Skills';
import ContactMe from './ContactMe';
import Footer from './Footer';
import ProjectShowcase from './Projects';

const LandingPage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeItem, setActiveItem] = useState('Home');

  const sectionRefs = {
    Home: homeRef,
    About: aboutRef,
    Services: servicesRef,
    Skills: skillsRef,
    Projects: projectsRef,
    'Contact Me': contactRef,
  };

  const handleNavClick = (item) => {
    const ref = sectionRefs[item];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleSection = Object.keys(sectionRefs).find(
            (key) => sectionRefs[key].current === entry.target
          );
          if (visibleSection) {
            setActiveItem(visibleSection);
          }
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  },);

  return (
    <>
      <Navbar sectionRefs={sectionRefs} activeItem={activeItem} />
      <div ref={homeRef}>
        <HeroSection sectionRefs={sectionRefs} />
      </div>
      <div ref={aboutRef}><AboutMe /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={projectsRef}><ProjectShowcase/></div>
      <div ref={contactRef}><ContactMe /></div>
      <Footer sectionRefs={sectionRefs} activeItem={activeItem} handleNavClick={handleNavClick} />
    </>
  );
};

export default LandingPage;
