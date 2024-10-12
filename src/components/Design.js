import React from 'react';
import { LuBadgeCheck } from "react-icons/lu";

const Design = () => {
  return (
    <div className='skills__content' data-aos="slide-left" data-aos-duration="1000" data-aos-easing="easy">
        <h3 className='skills__title'>Dizaýn</h3>
        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data'>
                    <LuBadgeCheck className='badge'/>
                <div>
                    <h3 className='skills__name'>Web dizaýn</h3>
                    <span className='skills__level'>Ýokary dereje</span>
                </div>
                </div>

                <div className='skills__data'>
                    <LuBadgeCheck className='badge'/>
                <div>
                    <h3 className='skills__name'>UI/UX dizaýn</h3>
                    <span className='skills__level'>Orta dereje</span>
                </div>
                </div>

                <div className='skills__data'>
                    <LuBadgeCheck className='badge'/>
                <div>
                    <h3 className='skills__name'>Grafiki dizaýn</h3>
                    <span className='skills__level'>Ýokary dereje</span>
                </div>
                </div>
            </div>
            <div className='skills__group'>
                <div className='skills__data'>
                    <LuBadgeCheck className='badge'/>
                <div>
                    <h3 className='skills__name'>Önüm dizaýn</h3>
                    <span className='skills__level'>Ýokary dereje</span>
                </div>
                </div>

                <div className='skills__data'>
                    <LuBadgeCheck className='badge'/>
                <div>
                    <h3 className='skills__name'>Gaplama dizaýn</h3>
                    <span className='skills__level'>Orta dereje</span>
                </div>
                </div>

                <div className='skills__data'>
                    <LuBadgeCheck className='badge'/>
                <div>
                    <h3 className='skills__name'>Mahabat</h3>
                    <span className='skills__level'>Orta dereje</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Design