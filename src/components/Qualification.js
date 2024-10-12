import React from 'react';
import "../components/Qualification.css";
import { CiCalendarDate } from "react-icons/ci";

const Qualification = () => {
  return (
    <div className='qualification__section'>
        <div className='qualification__content'>
            <div className='qualification__data'>
                <div>
                    <h3 className='qualification__title'>Fizmat 21-nji mekdep</h3>
                    <span className='qualification__subtitle'>Daşoguz.ş.</span>
                    <div className='qualification__calendar'>
                        <CiCalendarDate /> 2012-2018
                    </div>
                </div>
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>
            </div>

            <div className='qualification__data'>
                <div></div>

                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>
                <div>
                    <h3 className='qualification__title'>Oguz han uniwersiteti</h3>
                    <span className='qualification__subtitle'>Aşgabat.ş.</span>
                    <div className='qualification__calendar'>
                        <CiCalendarDate /> 2018-2023
                    </div>
                </div>
                
            </div>

            <div className='qualification__data'>
                <div>
                    <h3 className='qualification__title'>Freecodecamp.org </h3>
                    <span className='qualification__subtitle'>Aşgabat.ş. online</span>
                    <div className='qualification__calendar'>
                        <CiCalendarDate /> 2023-2024
                    </div>
                </div>
                <div>
                    <span className='qualification__rounder'></span>
                    <span className='qualification__line'></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Qualification