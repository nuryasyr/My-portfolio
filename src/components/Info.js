import React from 'react'
import { FiAward } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Info = () => {
  return (
    <div className='about__info grid'>
        <div className='about__box'>
        <FiAward className='about__icon'/>
            <h3 className='about__title'>Tejribe</h3>
            <span className='about__subtitle'>2 + ýyl</span>
        </div>
        <div className='about__box'>
        <BsBriefcase className='about__icon'/>
            <h3 className='about__title'>Tamamlanan</h3>
            <span className='about__subtitle'>4 + proyekt</span>
        </div>
        <div className='about__box'>
        <BiSupport className='about__icon'/>
            <h3 className='about__title'>Goldaw</h3>
            <span className='about__subtitle'>Online 24/7</span>
        </div>
    </div>
  )
}

export default Info