import React from 'react';
import { FaPlug, FaTree, FaOilCan } from 'react-icons/fa';
import { BsCloud, BsBagFill } from 'react-icons/bs';

function Sustainability() {

  const data = [
    { icon: <BsBagFill size={40} />, text: "60,000 TONS OF SINGLE-USE PLASTIC" },
    { icon: <BsCloud size={40} />, text: "125,000 TONS OF Co2" },
    { icon: <FaPlug size={40} />, text: "4.30 MILLION KWH OF ELECTRICITY" },
    { icon: <FaOilCan size={40} />, text: "115,000 BARRELS OF OIL" },
    { icon: <FaTree size={40} />, text: "3+ MILLION TREES" }
  ];

  return (
    <div className='container my-5 sustainability_bg py-5'>
      <div className="text-center mb-5">
        <h1 className="text-white w-75 mx-auto" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
          Using Sustainable
          Energy, We have
          Saved Pollution
        </h1>
      </div>

      <div className="container card_width">
        <div className="row g-3 justify-content-center">
          {data.map((item, index) => (
            <div className="col-6 col-sm-6 col-md-4 col-lg-4" data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="true"
              data-aos-delay={index * 200} key={index}>
              <div className="sustainability-card text-center p-2 ">
                <div className="iconhover mb-3 text-white">{item.icon}</div>
                <div className="text-white fw-bold small">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sustainability