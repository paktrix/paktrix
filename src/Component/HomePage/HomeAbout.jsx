import React from 'react';
import { Link } from 'react-router-dom';

function HomeAbout() {
  return (
    <div className="container">
      <div className="row d-flex align-items-center mt-5 bg-white">
        <div className="col-12 col-lg-8 px-3 px-lg-0 order-2 order-lg-1 mb-3">
          <div className="h-100">
            <h1 className="titlecolor" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">Meet Paktrix</h1>
            <div className='pera pe-lg-5 pe-0 mt-1' style={{ textAlign: "justify" }}>
              In a world where packaging was once just an afterthought, a woman with vision, grit, and purpose saw an opportunity to reimagine the box—not just as a container, but as a canvas for brands and a commitment to the planet.
            </div>
            <div className='pera pe-lg-5 pe-0 py-3' style={{ textAlign: "justify" }}>
              What began as a small idea in a modest workspace has grown into a packaging brand that’s changing the way businesses think about corrugated boxes. Led by a woman entrepreneur who believed that sustainability and style could go hand in hand, our company was founded on the belief that every product deserves packaging that protects, tells a story, and leaves a lighter footprint on the Earth.
            </div>
            <div className='pera pe-lg-5 pe-0' style={{ textAlign: "justify" }}>
              We specialize in eco-friendly, fully recyclable corrugated solutions that are not only built to last, but designed to reflect your brand’s unique identity. With a passion for customization and a commitment to green practices, we empower businesses—big and small—to ship smarter, greener, and more beautifully.
            </div>
            <Link to={"/about"}>
              <button className="bubbles py-2 px-4 mt-3">
                <span className="text">About Us</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-12 col-lg-4 overflow-hidden bg-white order-1 order-lg-2 mb-3">
          <div className="h-100">
            <div className='text-center ms-auto' data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
              <img src={require("../../assets/images/earth_image.png")} alt="" className='img-fluid w-100 h-100' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout