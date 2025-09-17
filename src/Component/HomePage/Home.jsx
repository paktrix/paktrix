import React from 'react';
import HomeAbout from './HomeAbout';
import "../../assets/css/Home.css"
import VideoEnergy from './VideoEnergy';
import IndustrySec from './IndustrySec';
import HOC from '../../HOC';
import HomeSlider from './HomeSlider';
import BlogPost from './BlogPost';

function Home() {
  return (
    <div>
      <HomeSlider />
      <HomeAbout />
      <div className="sustainable-section overflow-hidden mt-2 mb-3">
        <div className="container p-0" data-aos="zoom-out"
          data-aos-duration="1500"
          data-aos-once="true">

          <div className="sustainable-img-box">
            <img
              src={require("../../assets/images/sustainable and recyclable  box.jpeg")}
              alt="Sustainable Planet"
              className="img-fluid w-100"
            />

            <div className="sustainable-img-text">
              Creating <div>Sustainable <div>Planet</div></div>
            </div>
          </div>

        </div>
      </div>
      <VideoEnergy />
      <IndustrySec />
      <BlogPost />
    </div>
  );
}

export default HOC(Home)