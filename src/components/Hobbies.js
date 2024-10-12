import React from 'react';
import "../components/Hobbies.css";
import { GiRead } from "react-icons/gi";
import { IoFootballOutline } from "react-icons/io5";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa6";
import { SiBinance } from "react-icons/si";
import { MdSettingsVoice } from "react-icons/md";
import { MdBiotech } from "react-icons/md";
import { IoGameController } from "react-icons/io5";

const skillsArray = [
  <GiRead />,
  <IoFootballOutline />,
  <MdOutlinePhotoCamera />,
  <FaPersonWalkingLuggage />,
  <FaHeadphones />,
  <FaBookMedical />,
  <SiBinance />,
  <MdSettingsVoice />,
  <MdBiotech />,
  <IoGameController />
];

const descriptionsArray = [
  'Kitap Okamak',
  'Footbol Oýnamak',
  'Surata Düşürmek',
  'Syýahat',
  'Aýdym Diňlemek',
  'Lukmançylyk',
  'Kripto Pul',
  'Seslendirmek',
  'Biotehnologiýa',
  'Oýun Oýnamak'
];

const Hobbies = () => {
  return (
    <div>
      <div className='ulanyanlarym'>
        <h1>Gyzyklanmalar</h1>
      </div>
      <section className="hobbies-container">
        <div className="hobbies-wrapper">
          {skillsArray.map((skill, index) => (
            <div className="hobbi-box" key={index}>
              {skill}
              <div className="hobbi-text">{descriptionsArray[index]}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hobbies;
