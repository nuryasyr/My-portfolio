import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css"

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Nurýagdy</h1>

            <div className='footer__social'>
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
            <span className='footer__copy'>&#169; Nurýagdy. Ähli hukuklar goralan</span>
        </div>
    </footer>
  )
}

export default Footer