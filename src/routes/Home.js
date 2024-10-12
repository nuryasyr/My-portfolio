import React, { useState, useRef} from 'react';
import Navbar from '../components/Navbar';
import "./Home.css";
import CV from '../assets/Nuryagdy.pdf';
import Info from '../components/Info';
import Frontend from '../components/Frontend';
import Design from '../components/Design';
import { GoArrowRight } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import { FiEdit } from "react-icons/fi";
import { BiExpandHorizontal } from "react-icons/bi";
import { BsCreditCard2Front } from "react-icons/bs";
import { HiOutlinePhone } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import { BiRightArrowAlt } from "react-icons/bi";
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();







const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_88ifxva', 'template_1vna7ri', form.current, {
        publicKey: 'hqEZqH87Y_JpKnPYE',
      })
      e.target.reset()
  };

  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    
    <div >
      <Navbar/>
      
       <section className='home section' id='home'>
        <div className='home__container container grid'>
          <div className='home__content grid'>
            <div className='home__social'>
              <a 
              href='https://www.instagram.com/nuryagdy1400'
              rel="noreferrer"
              className='footer__social-link'
              target='_blank'><FaInstagram /> </a>
                <a 
              href='https://github.com/nuryasyr'
              rel="noreferrer"
              className='footer__social-link'
              target='_blank'><FaGithub /> </a>
                <a 
              href='https://www.linkedin.com/'
              rel="noreferrer"
              className='footer__social-link'
              target='_blank'><FaLinkedinIn /></a>
            </div>

            <div className='home__img'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-QzRAcIHB-8SyK0CB_Xue99PGVmYUZFXEA&s' alt='dd' className='qa'></img>
            </div>
            <div className='home__data'>
              <h1 className='home__title'>Nurýagdy Aşyrgeldiýew</h1>
              <h3 className='home__subtitle'>Frontent developer</h3>
              <p className='home__description'>Dizýan dünýäsi bilen iç-içe ýaşap,
                döredijilikli pikirlerim bilen işimi hyjuwly edýärin.
                Elmydama ulanyjy tejribesini we wizual estetikany ileri tutup
                häzirki zaman hem-de ulanyjy üçin amatly web sahypalaryny
                ösdürmäge çalyşýaryn </p>
            </div>
          </div>
        </div>
       </section>
       <section  className='about section' id='about'>
        
        <h2  className='section__title'>Men Barada</h2>
        <span className='section__subtitle'>Men hakda gysgaça</span>

        <div className='about__container container grid'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-QzRAcIHB-8SyK0CB_Xue99PGVmYUZFXEA&s' alt='dd' className='qa'></img>
          <div className='about__data'>
            <Info />

            <p className='about__description'>Kotlamakdan başga-da dizaýnerçilik ugrundan
              azda-kände tejribäm bar. Şeýlelik bilen, programist we dizaýner hökmünde
              taslamalara täze innowasion çözgütleri hödürläp bilerin.
              <span style={{  fontWeight: 'bold' }}> Maksadym ulanyjylaryň özara täsirini artdyrýan ýönekeý we täsirli interfeýsleri döretmek</span>
            </p>
            <button data-aos="fade-up" data-aos-duration="1000" data-aos-easing="easy" className='CV'>
              <a download="" href={CV} 
                className='cv'>
                CV-ni ÝÜKLE
              </a>
            </button>
          </div>
        </div>
       </section>
       <section className='skills section' id='skills'>
        <h2 className='section__title'>Hünärler</h2>
        <span className='section__subtitle'>Meniň azda-kände başarnyklarym</span>

        <div className='skills__container container grid'>
          <Frontend />
          <Design />
        </div>
       </section>
       <section className='services section' id='services'>
        <h2 className='section__title'>Hyzmatlar</h2>
        <span className='section__subtitle'>Men size nähili hyzmatlary hödürleýän?</span>

        <div className='services__container container grid'>
          <div className='services__content' data-aos="fade-down"  data-aos-duration="1000" data-aos-easing="ease-in-out" >
            <div>
            <BsCreditCard2Front className='services__icon'/>
              <h3 className='services__title'>
                Frontend
              </h3>
            </div>

            <span className='services__button' onClick={() => toggleTab(1)}>Köpüräk gör
              <GoArrowRight className='services__button-icon'/>
            </span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
              <div className='services__modal-content'>
                <LiaTimesSolid onClick={() => toggleTab(0)} className='services__modal-close'/>
                <h3 className='services__modal-title'>Frontend</h3>
                <p className='services__modal-description'>Kotlama tejribämden peýdalanyp
                  size we firmaňyza edip biljek hyzmatlarym:
                </p>
                <ul className='services__modal-services grid'>
                  <li className='services__modal-service'>
                  <FaRegCheckCircle className='services__modal-icon'/>
                  <p className='services__modal-info'>Şahsy web sahypaňyzyň frontend bölegini döretmek
                  </p>
                  </li>
                  <li className='services__modal-service'>
                  <FaRegCheckCircle className='services__modal-icon'/>
                  <p className='services__modal-info'>Firmaňyza gerekli web sahypary döretmek
                  </p>
                  </li>
                  <li className='services__modal-service'>
                  <FaRegCheckCircle className='services__modal-icon'/>
                  <p className='services__modal-info'>Web sahypaňyzda ýüze çykan näsazlyklary sazlamak
                  </p>
                  </li>
                  
                  <li className='services__modal-service'>
                  <FaRegCheckCircle className='services__modal-icon'/>
                  <p className='services__modal-info'>Ulanyjy üçin amatly interfeýsli
                    web dizaýnlary hödürlemek
                  </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='services__content' data-aos="fade-up"  data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div>
            <BiExpandHorizontal className='services__icon'/>
              <h3 className='services__title'>Dizaýn</h3>
            </div>

            <span className='services__button' onClick={() => toggleTab(2)}>Köpüräk gör {" "}
              <GoArrowRight className='services__button-icon'/>
            </span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
              <div className='services__modal-content'>
                <LiaTimesSolid onClick={() => toggleTab(0)} className='services__modal-close'/>
                <h3 className='services__modal-title'>Dizaýn</h3>
                <p className='services__modal-description'>Dizýnerçilik tejribämden peýdalanyp
                size we firmaňyza edip biljek hyzmatlarym:
                </p>
                <ul className='services__modal-services grid'>
                  <li className='services__modal-service'>
                  <FaRegCheckCircle className='services__modal-icon'/>
                  <p className='services__modal-info'>Şahsy we firmaňyz üçin logotipleri ýasamak
                  </p>
                  </li>
                  <li className='services__modal-service'>
                  <FaRegCheckCircle className='services__modal-icon'/>
                  <p className='services__modal-info'>Gaplama we mocup dizaýnlary
                  </p>
                  </li>
                  <li className='services__modal-service'>
                  <FaRegCheckCircle className='services__modal-icon'/>
                  <p className='services__modal-info'>CV dizaýn
                  </p>
                  </li>
                  <li className='services__modal-service'>
                  <FaRegCheckCircle className='services__modal-icon'/>
                  <p className='services__modal-info'>Wizitka we tanyşdyryş broşuralary
                  </p>
                  </li>
                  <li className='services__modal-service'>
                  <FaRegCheckCircle className='services__modal-icon'/>
                  <p className='services__modal-info'>Katalog, menýu, etiketka...
                  </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='services__content' data-aos="fade-down"  data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div>
            <FiEdit className='services__icon'/>
              <h3 className='services__title'>
                Mahabat
              </h3>
            </div>

            <span onClick={() => toggleTab(3)} className='services__button'>Köpüräk gör
              <GoArrowRight className='services__button-icon'/>
            </span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
              <div className='services__modal-content'>
                <LiaTimesSolid onClick={() => toggleTab(0)} className='services__modal-close'/>
                <h3 className='services__modal-title'>Mahabat</h3>
                <p className='services__modal-description'>Söwdagärlik tejribämden peýdalanyp
                size we firmaňyza edip biljek hyzmatlarym:
                </p>
                <ul className='services__modal-services grid'>
                  <li className='services__modal-service'>
                  <FaRegCheckCircle className='services__modal-icon'/>
                  <p className='services__modal-info'>Mahabat üçin bannerler, flaýerleri ýasamak
                  </p>
                  </li>
                  <li className='services__modal-service'>
                  <FaRegCheckCircle className='services__modal-icon'/>
                  <p className='services__modal-info'>Wideo rolikler üçin seslendirmeler
                  </p>
                  </li>
                  <li className='services__modal-service'>
                  <FaRegCheckCircle className='services__modal-icon'/>
                  <p className='services__modal-info'>Sosiýal mediýalar üçin postlar, bildirşler
                  </p>
                  </li>
                  <li className='services__modal-service'>
                  <FaRegCheckCircle className='services__modal-icon'/>
                  <p className='services__modal-info'>Sosiýal mediýa hasaplaryňyzy dolandyrmak, aktiw saklamak
                  </p>
                  </li>
                  <li className='services__modal-service'>
                  <FaRegCheckCircle className='services__modal-icon'/>
                  <p className='services__modal-info'>Target reklama üçin tazeçillikler
                  </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
       </section>
       <section className='contact-section' id='contact'>
        <h2 className='section__title'>Habarlaşmak</h2>
        <span className='section__subtitle'>Meniň bilen nähili habarlaşyp bilersiňiz ?</span>

        <div className='contact__container container grid'>
          <div className='contact__content'>
            <h3 className='contact__title'>Habarlaşmak üçin:</h3>

            <div className='contact__info'>
              <div className='contact__card' data-aos="slide-right" data-aos-duration="1000" data-aos-easing="easy">
              <IoMailOutline className='contact__card-icon'/>
              <h3 className='contact__card-title'>Email</h3>
              <span className='contact__card-data'>nuryasyr5@gmail.com</span>
              <a href='mailto:nuryasyr5@gmail.com' className='contact__button'>
                SMS yaz <BiRightArrowAlt className='contact__button-icon'/>
              </a>
              </div>

              <div className='contact__card' data-aos="slide-left" data-aos-duration="1000" data-aos-easing="easy">
              <HiOutlinePhone className='contact__card-icon'/>
              <h3 className='contact__card-title'>Telefon</h3>
              <span className='contact__card-data'>+99361852997</span>
              
              </div>

              <div className='contact__card' data-aos="slide-right" data-aos-duration="1000" data-aos-easing="easy">
              <FaInstagram className='contact__card-icon'/>
              <h3 className='contact__card-title'>Instagram</h3>
              <span className='contact__card-data'>nuryagdy1400</span>
              
              </div>
            </div>
          </div>
          <div className='contact__content'>
            <h3 className='contact__title'>Öz proýektiň hakynda ýaz</h3>

            <form ref={form} onSubmit={sendEmail} className='contact__form'>
              <div className='contact__form-div'>
                <label className='contact__form-tag'>Adyňyz</label>
                <input 
                  type='text' name='name' 
                  className='contact__form-input'
                  placeholder='Adyňyzy ýazyň'
                />
              </div>

              <div className='contact__form-div'>
                <label className='contact__form-tag'>elektorn poctaňyz</label>
                <input 
                  type='email' name='email' 
                  className='contact__form-input'
                  placeholder='elektron poçtaňyzy ýazyň'
                />
              </div>

              <div className='contact__form-div contact__form-area'>
                <label className='contact__form-tag'>Proyektiňiz</label>
                <textarea 
                  name='project' cols="30" rows="10"
                  className='contact__form-input' 
                  placeholder='Özüňizň proýektiňiz barada ýazyň'>
                </textarea>
              </div>
              <button  data-aos="fade-up" data-aos-duration="1000" data-aos-easing="easy" className='CV'>
              <a 
                className='cv'>
                SMS ugrat
              </a>
            </button>
            </form>
          </div>
        </div>
       </section>
      
          <Footer />
    </div>
    
  )
}

export default Home
