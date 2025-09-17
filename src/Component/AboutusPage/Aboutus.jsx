import React from 'react';
import HOC from '../../HOC';
import "../../assets/css/About.css";

function Aboutus() {
  return (
    <>
      <div className='aboutus_bg'>
        <div className="container text-center pt-3 pt-lg-4">
          <div className="abou_image text-center" data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="true">
            <img
              src={require('../../assets/images/Packtrix box packing factory image.png')}
              alt=""
              className="img-fluid aboutus_content about_image"
            />
          </div>

          <div className="aboutus_content mx-auto text-center">
            <h2 className="mt-4 fw-bold titlecolor" data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true">About Us</h2>
            <p className="pera aboutus_content mx-auto mt-1">
              With over 15 years of experience in the packaging industry, we at PAKTRIX have built a
              trusted reputation as both manufacturers and traders of high-quality corrugated boxes.
              Our journey has been driven by a commitment to excellence, reliability, and innovation,
              enabling us to serve a wide range of industries with packaging solutions that are not only
              durable but tailored to your brand’s identity.
            </p>
            <p className="pera aboutus_content mx-auto mt-1">
              At the core of our operations is our use of premium-grade paper, sourced through long-
              standing partnerships with some of the best paper mills in the country. This ensures that
              every box we produce meets the highest standards of strength, sustainability, and finish.
            </p>
            <p className="pera aboutus_content mx-auto mt-1">
              As a manufacturer, we bring hands-on expertise to every project, while our strong network
              of packaging partners allows us to offer a comprehensive range of products—all under one
              roof. This unique advantage helps us cater to large-scale demands efficiently and ensures
              quicker turnarounds without compromising on quality.
            </p>
            <p className="pera aboutus_content mx-auto mt-1">
              Our belief in quality and customization drives everything we do. Whether you&#39;re a startup
              or an established brand, we work closely with you to create packaging that truly reflects your
              values and meets your functional needs.
            </p>
            <p className="pera aboutus_content mx-auto mt-1">
              Our dedicated customer care team is always ready to respond with clarity, speed, and
              genuine support—because we don’t just deliver boxes; we build long-term relationships
              based on trust, transparency, and service.
            </p>
            <p className="pera aboutus_content mx-auto mt-1">
              Choose PAKTRIX-where experience meets innovation, and your packaging vision becomes reality.
            </p>
          </div>

          <div className="aboutus_content mx-auto text-center">
            <h2 className="mt-2 fw-bold titlecolor" data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true">Our Mission</h2>
            <p className="pera aboutus_content mx-auto mt-1">
              To deliver sustainable, high-quality corrugated packaging solutions that are fully recyclable, customizable, and designed to meet the unique needs of every brand—while minimizing environmental impact and maximizing customer satisfaction.
            </p>
          </div>

          <div className="aboutus_content mx-auto text-center">
            <h2 className="mt-2 fw-bold titlecolor" data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true">Our Vision</h2>
            <p className="pera aboutus_content mx-auto mt-1">
              To become the most trusted partner in green packaging, transforming the industry with innovative, recyclable designs that protect products, elevate brands, and preserve the planet.
            </p>
          </div>

          <div className="aboutus_content mx-auto text-center">
            <h2 className="mt-2 fw-bold titlecolor" data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true">Why is this important?</h2>
            <p className="pera aboutus_content mx-auto mt-1">
              Plastic, once celebrated for its convenience, is now a global environmental crisis. Every year,
              we generate over 430 million tons of plastic, yet only 9% is recycled. The rest clogs
              landfills, chokes oceans, and pollutes the air. Each minute, the equivalent of a garbage truck
              full of plastic enters our oceans, leading to the death of over 100,000 marine animals and
              1 million seabirds annually. Microplastics have now invaded our food, water, air—and even
              our blood and lungs—raising serious health concerns. Shockingly, people inhale around 11
              plastic particles per hour, and plastic production alone could account for 10–13% of global
              carbon emissions by 2050, drastically worsening climate change. we must start choosing
              more and more greener alternatives over plastic as a business, individual or a nation to
              contribute to a better tomorrow.
            </p>
          </div>

          <div className='aboutus_content mx-auto text-center pb-4'>
            <h2 className="mt-2 fw-bold titlecolor" data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true">Meet Paktrix
            </h2>
            <div style={{ width: "200px" }} className='mx-auto'>
              <img
                src={require("../../assets/images/Meet paktrix logo.png")}
                alt=""
                className="img-fluid w-100 object-fit-cover"
                style={{ objectPosition: 'bottom center' }}
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default HOC(Aboutus)