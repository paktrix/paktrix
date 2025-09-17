import React from 'react'
import { Link } from 'react-router-dom'

const blogData = [
    {
        id: 1,
        image: require("../../assets/images/sustainable-packing-image.jpg"),
        title: "Sustainable Packaging : A Competitive Advantage For Forward-Thinking Businesses",
        description:
            "In today’s marketplace, sustainability is no longer optional—it’s a competitive necessity. Consumers, regulators, and investors increasingly expect companies to adopt eco-friendly practices.",
        link: "/SustainablePackagingBlog",
    },
    {
        id: 2,
        image: require("../../assets/images/fd3ebafa-3fd4-435d-bd74-43e2d92c32d5.jpg"),
        title: "Plastic Plague : Robbing Our Children Of Clean Air",
        description:
            "Plastic was once hailed as a miracle material—lightweight, durable, and convenient. Today, it has transformed into a global environmental catastrophe.",
        link: "/PlasticPlagueBlog",
    },
]

function BlogPost() {
    return (
        <div className='container my-4'>
            <div className='text-center'>
                <div
                    className="titlecolor fs-1"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-once="true"
                >
                    Blog Posts
                </div>
            </div>
            <div className='row justify-content-center mt-2'>
                {blogData.map((blog) => (
                    <div key={blog.id} className='col-12 col-md-6 col-lg-4 mb-4'>
                        <div
                            className='h-100 shadow d-flex flex-column'
                            style={{ borderRadius: "10px", border: "3px ridge #008a43" }}
                        >
                            <div>
                                <img
                                    src={blog.image}
                                    className='img-fluid w-100'
                                    alt={blog.title}
                                    style={{
                                        borderRadius: "7px 7px 0px 0px",
                                        height: "200px",
                                        objectFit: "cover",
                                        backgroundColor: "#f8f8f8"
                                    }}
                                />
                            </div>
                            <div className='p-3 d-flex flex-column flex-grow-1'>
                                <div
                                    className='titlecolor fw-bold blog-title'
                                    style={{ wordBreak: "break-word", fontSize: "17px" }}
                                >
                                    {blog.title}
                                </div>
                                <div className='flex-grow-1'>
                                    <div className='pera mt-2' style={{ textAlign: "justify" }}>
                                        {blog.description}
                                    </div>
                                </div>
                                <Link to={blog.link} className="mt-auto">
                                    <button className="bubbles py-2 px-4 mt-2">
                                        <span className="text">Read More</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogPost