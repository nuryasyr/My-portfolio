import React from 'react';
import Navbar from '../components/Navbar';
import "../routes/About.css";
import Qualification from '../components/Qualification';
import csscf from "../assets/csscf.png"
import javacf from "../assets/javacf.png";
import reactcf from "../assets/reactcf.png";
import uncc from "../assets/uncc.png"
import grip from "../assets/grip.png"
import marburg from "../assets/marburg.png"
import informationsecurity from "../assets/informationsecurity.png"
import digitalmarketing from "../assets/digitalmarketing.png"
import Footer from '../components/Footer';
import { FaQuoteLeft } from "react-icons/fa";

 const languages = [
    { name: 'Türkmen', percent: 96, flag: '' },
    { name: 'Türk', percent: 90, flag: '' },
    { name: 'Özbek', percent: 85, flag: '' },
    { name: 'Iňlis', percent: 85, flag: '' },
    { name: 'Rus', percent: 70, flag: '' },
  ];

const About = () => {
 

  return (
    <div>
    <Navbar/>
    <section className='menbarada section'>
      <div className='about__container container grid'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-QzRAcIHB-8SyK0CB_Xue99PGVmYUZFXEA&s' alt='dd' className='qa'></img>
        <div>
          <Qualification/>
        </div>
      </div>
      
      <div className='language__skills'>
          <h2 className='section__title'>Bilýän Dillerim</h2>
          {languages.map((language, index) => (
            <div className='language' key={index}>
              <div className='language__container'>
                <span>{language.name}</span>
                <div className='progress'>
                  <div 
                    className='progress-bar' 
                    style={{ width: `${language.percent}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      <div className='mycertificate'>
        <div className='certificate__title'>
          <h1>Sertifikatlar</h1>
        </div>
        
        {/* First row of two certificates */}
        <div className='sertifikatlar-row top-row'>
          {[{
            img: csscf,
            name: 'freeCodeCamp: Responsive Web Design'
          }, {
            img: digitalmarketing,
            name: 'Future Learn: Digital Marketing'
          }].map((certificate, index) => (
            <div key={index} className='sertifikat-guty'>
              <img src={certificate.img} alt={certificate.name} className='surat'/>
              <h3 className='certificate-name'>{certificate.name}</h3>
            </div>
          ))}
        </div>

        {/* Second row of stretched certificates */}
        <div className='sertifikatlar-row middle-row'>
          {[{
            img: uncc,
            name: 'UN CC:Learn: Human Health'
          }, {
            img: grip,
            name: 'WHO: Influenza prevention and control'
          }].map((certificate, index) => (
            <div key={index} className='sertifikat-guty stretched'>
              <img src={certificate.img} alt={certificate.name} className='surat'/>
              <h3 className='certificate-name'>{certificate.name}</h3>
            </div>
          ))}
        </div>

        {/* Bottom row of two certificates */}
        <div className='sertifikatlar-row bottom-row'>
          {[{
            img: javacf,
            name: 'freeCodeCamp: JavaScript'
          }, {
            img: marburg,
            name: 'WHO: Marburg Virus Disease'
          }].map((certificate, index) => (
            <div key={index} className='sertifikat-guty'>
              <img src={certificate.img} alt={certificate.name} className='surat'/>
              <h3 className='certificate-name'>{certificate.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className='sertifikatlar-row top-row'>
          {[{
            img: informationsecurity,
            name: 'Open University: Information security'
          }, {
            img: reactcf,
            name: 'freeCodeCamp: Front End Development Libraries'
          }].map((certificate, index) => (
            <div key={index} className='sertifikat-guty'>
              <img src={certificate.img} alt={certificate.name} className='surat'/>
              <h3 className='certificate-name'>{certificate.name}</h3>
            </div>
          ))}
        </div>



      <div className='akylly'>
      <div data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="easy" data-aos-once="true" className='akyllygurleyanmi'>
      <FaQuoteLeft className='gosadyrnak' />
        <p className='sozlerim'>
        Döredijilikli pikirlenişim we meseläni çözmek ukybym bilen, 
        her bir kynçylygy pursat hökmünde görýärin. Emeli aň we täze tehnologiýalara eýerip, yzygiderli öwrenýän 
        we özümi kämilleşdirýärin.
        </p>
        <spam className="men">Nurýagdy Aşyrgeldiýew</spam>
      </div>
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default About
