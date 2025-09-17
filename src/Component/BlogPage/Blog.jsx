import React, { useState } from 'react';
import HOC from '../../HOC';
import "../../assets/css/Blog.css";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaRegCopy } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { SiWhatsapp } from 'react-icons/si';

const blogData = [
  {
    image: require("../../assets/images/sustainable-packing-image.jpg"),
    title: "Sustainable Packaging : A Competitive Advantage For Forward-Thinking Businesses",
    content: "In today’s marketplace, sustainability is no longer optional—it’s a competitive necessity. Consumers, regulators, and investors increasingly expect companies to adopt eco-friendly practices.",
    link: "/SustainablePackagingBlog",
  },
  {
    image: require("../../assets/images/fd3ebafa-3fd4-435d-bd74-43e2d92c32d5.jpg"),
    title: "Plastic Plague : Robbing Our Children Of Clean Air",
    content: "Plastic was once hailed as a miracle material—lightweight, durable, and convenient. Today, it has transformed into a global environmental catastrophe. From the air we breathe to the food we eat, plastics have infiltrated every corner of our lives. The most alarming reality? Our children are paying the heaviest price.",
    link: "/PlasticPlagueBlog",
  },
];

function Blog() {

  const [activeIndex, setActiveIndex] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const toggleSharePopup = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const shareUrl = (link) => {
    return window.location.origin + link;
  };

  const copyLink = (url, index) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      }).catch((err) => {
        console.error("Could not copy text: ", err);
      });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = url;
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      } catch (err) {
        console.error("Fallback: Unable to copy", err);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className='container mt-3 mt-lg-4'>
      <div className='row justify-content-center p-2'>
        {blogData.map((blog, index) => (
          <div className='col-12 col-lg-10 mb-4 mb-lg-5' key={index}>
            <div data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="true"
              data-aos-delay={index * 250}
              className='blog-card d-flex flex-column flex-md-row overflow-hidden rounded-4 bg-white'>

              <div className='blog-image flex-shrink-0'>
                <img src={blog.image} alt={blog.title} />
              </div>

              <div className='blog-content p-3 d-flex flex-column justify-content-center'>

                <div className="options-icon" onClick={() => toggleSharePopup(index)}>
                  <BsThreeDotsVertical />
                </div>

                {activeIndex === index && (
                  <div className="share-popup p-3 rounded shadow bg-white position-absolute">
                    <div className="share-title mb-2">Share Blog</div>
                    <div className="social-icons d-flex gap-2">
                      <a className='social-icon' href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl(blog.link))}`} target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className='fs-6' />
                      </a>
                      <a className='social-icon' href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl(blog.link))}`} target="_blank" rel="noopener noreferrer">
                        <SiWhatsapp className='fs-6' />
                      </a>
                      <a className='social-icon btn-copy' onClick={() => copyLink(shareUrl(blog.link), index)}>
                        <FaRegCopy className='fs-6' />
                      </a>
                    </div>
                    {copiedIndex === index && <div className="copy-feedback mt-2 fs-6 text-success text-end">Link copied!</div>}
                  </div>
                )}

                <div className='titlecolor fw-bold fs-4 blog-title' style={{ wordBreak: "break-word" }}>
                  {blog.title}
                </div>
                <div className='pera mt-2' style={{ textAlign: "justify" }}>
                  {blog.content}
                </div>
                <Link to={blog.link}>
                  <button className="bubbles py-2 px-4 mt-3">
                    <span className="text">Read More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HOC(Blog)