import React, { useState, useRef } from 'react';
import Navbar from './../components/Navbar';
import frontend from "../assets/frontend.png"
import grafik from "../assets/grafik.jpg"
import mahabat2 from "../assets/mahabat2.jpg"
import ses from "../assets/ses.png"
import '../routes/Services.css';
import Footer from './../components/Footer';
import emailjs from '@emailjs/browser';

const Services = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_88ifxva', 'template_1vna7ri', form.current, {
        publicKey: 'hqEZqH87Y_JpKnPYE',
      })
      e.target.reset()
  };

  const [flippedCards, setFlippedCards] = useState([false, false, false, false]);

  const handleFlip = (index) => {
    setFlippedCards(prev => prev.map((flip, i) => i === index ? !flip : flip));
  };

  return (
    <div>
      <Navbar />
      <div className='hyzmat'>
        <div className='hyzmatuly'>
          {[frontend, grafik, mahabat2, ses].map((image, index) => (
            <div key={index} className='hyzmatkici'>
              <div className={`card ${flippedCards[index] ? 'flip' : ''}`} onClick={() => handleFlip(index)}>
                <div className="front-side">
                  <img src={image} alt={`Service ${index}`} />
                  <div className="text-content">
                    {index === 0 && 'Frontend Development'}
                    {index === 1 && 'Grafiki Dizaýn'}
                    {index === 2 && 'Mahabat'}
                    {index === 3 && 'Seslendirmek'}
                  </div>
                </div>
                <div className="back-side">
                   
                     <h4>Tamamlanan prýektlerimi görmek üçin <span className='sary'>şuýere</span> basyň</h4>
                    
                </div>
              </div>
            </div>
          ))}
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
                <label className='contact__form-tag'>elektorn poçtaňyz</label>
                <input 
                  type='email' name='email' 
                  className='contact__form-input'
                  placeholder='elektron poçtaňyzy ýazyň'
                />
              </div>

              <div className='contact__form-div contact__form-area'>
                <label className='contact__form-tag'>Proýektiňiz</label>
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
          <div className="scrolling-container">
            <p className='scrolling-text'>Eger-de siz hem öz şahsy web sahypaňyz bolmasyny isleseňiz meniň bilen habarlaşyň. Habarlaşmak üçin telefon belgim: +99361852997  +99365498098 elektron poçtam: nuryasyr5@gmail.com</p>
          </div>
      <Footer/>
    </div>
  );
}

export default Services;
