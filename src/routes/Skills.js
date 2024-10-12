import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiAdobeillustrator, SiAdobephotoshop, SiOpenai, SiCanva } from 'react-icons/si';
import Navbar from '../components/Navbar'; // Navbar'ı import ettik
import Hobbies from './../components/Hobbies';
import Footer from '../components/Footer';

const skillsArray = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <RiTailwindCssFill />, name: 'Tailwind CSS' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaBootstrap />, name: 'Bootstrap' },
  { icon: <SiAdobeillustrator />, name: 'Illustrator' },
  { icon: <SiAdobephotoshop />, name: 'Photoshop' },
  { icon: <SiOpenai />, name: 'ChatGPT' },
  { icon: <SiCanva />, name: 'Canva' }
];

const Skills = () => {
  return (
    <div>
      <Navbar /> {/* Navbar'ı ekledik */}
      <div className='skills-header'>
        <h1>Ulanýanlarym</h1>
      </div>
      <div className='skills-container'>
        <div className='skills-wrapper'>
          {skillsArray.map((skill, index) => (
            <div className='square-skill' key={index}>
              <div className='skill-icon'>{skill.icon}</div>
              <div className='skill-description'>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
      <Hobbies/>
      <Footer/>
    </div>
  );
};

export default Skills;
