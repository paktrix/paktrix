// import React, { useState, useRef, useEffect } from "react";
// import { AiFillMessage } from "react-icons/ai";
// import { GoDotFill } from "react-icons/go";

// const LetsChat = () => {

//     const [isOpen, setIsOpen] = useState(false);
//     const buttonRef = useRef(null);
//     const [position, setPosition] = useState({ bottom: 0, right: 0 });

//     const togglePopup = () => {
//         setIsOpen(!isOpen);
//     };

//     const closePopup = () => {
//         setIsOpen(false);
//     };

//     useEffect(() => {
//         if (buttonRef.current) {
//             const rect = buttonRef.current.getBoundingClientRect();
//             setPosition({
//                 bottom: window.innerHeight - rect.top + 10,
//                 right: window.innerWidth - rect.right
//             });
//         }
//     }, [isOpen]);

//     return (
//         <>
//             <div className="lets-chat-float py-2 py-md-3 px-4" onClick={togglePopup} ref={buttonRef}>
//                 <AiFillMessage size={22} className="me-2" />
//                 <span className="fw-bold" style={{ fontSize: "15px" }}>Get In Touch</span>
//             </div>

//             {isOpen && (
//                 <div
//                     className="chat-popup"
//                     style={{ bottom: `${position.bottom}px`, right: `${position.right}px` }}
//                 >
//                     <div className="chat-header d-flex px-3 py-2">
//                         <div>
//                             <div className="fw-medium" style={{ letterSpacing: "1px" }}>Let's Chat!</div>
//                             <div className="pera"><GoDotFill style={{ color: "#008a43" }} /> Online</div>
//                         </div>
//                         <div className="ms-auto">
//                             <button className="close-btn border-0 bg-white fs-5" onClick={closePopup}>×</button>
//                         </div>
//                     </div>
//                     <div style={{ border: "1px solid grey" }}></div>
//                     <div className="chat-body p-3" style={{ background: "#d3d3d399", borderRadius: "0px 0px 10px 10px" }}>
//                         <div className="pera bg-white p-2 rounded-3">Hi ! Fill out your details, so we can get back to you</div>
//                         <div className="pera bg-white p-2 rounded-3 my-2">Customer Detail's Form</div>
//                         <div className="pera bg-white px-3 pb-3 pt-1 rounded-3 fw-medium">
//                             <form className="chat-form">
//                                 <label>Name</label>
//                                 <input type="text" placeholder="Enter Name" />

//                                 <label>E-mail</label>
//                                 <input type="email" placeholder="Enter E-mail" />

//                                 <label>Phone No.</label>
//                                 <input type="tel" placeholder="Enter Phone No." />

//                                 <label>Message</label>
//                                 <textarea placeholder="Enter Message ..." rows="2"></textarea>

//                                 <button type="submit" className="fw-medium">Submit</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default LetsChat



import React, { useState, useRef, useEffect } from "react";
import { AiFillMessage } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const LetsChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ bottom: 0, right: 0 });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                bottom: window.innerHeight - rect.top + 10,
                right: window.innerWidth - rect.right
            });
        }
    }, [isOpen]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.send(
            "service_e54bwz9",
            "template_6uad1qt",
            {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message
            },
            "feYhDz-WDjNBgfnmB"
        ).then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            Swal.fire({
                icon: 'success',
                title: 'Thank you for connecting!',
                text: 'We will contact you soon.',
                showConfirmButton: false,
                timer: 2000
            });
            setFormData({ name: "", email: "", phone: "", message: "" });
            closePopup(); // Optionally close popup after submission
        }).catch((error) => {
            console.error("FAILED...", error);
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Failed to send message. Please try again.',
                confirmButtonText: 'OK'
            });
        });
    };

    return (
        <>
            <div className="lets-chat-float py-2 py-md-3 px-4" onClick={togglePopup} ref={buttonRef}>
                <AiFillMessage size={22} className="me-2" />
                <span className="fw-bold" style={{ fontSize: "15px" }}>Get In Touch</span>
            </div>

            {isOpen && (
                <div
                    className="chat-popup"
                    style={{ bottom: `${position.bottom}px`, right: `${position.right}px` }}
                >
                    <div className="chat-header d-flex px-3 py-2">
                        <div>
                            <div className="fw-medium" style={{ letterSpacing: "1px" }}>Let's Chat!</div>
                            <div className="pera"><GoDotFill style={{ color: "#008a43" }} /> Online</div>
                        </div>
                        <div className="ms-auto">
                            <button className="close-btn border-0 bg-white fs-5" onClick={closePopup}>×</button>
                        </div>
                    </div>
                    <div style={{ border: "1px solid grey" }}></div>
                    <div className="chat-body p-3" style={{ background: "#d3d3d399", borderRadius: "0px 0px 10px 10px" }}>
                        <div className="pera bg-white p-2 rounded-3">Hi ! Fill out your details, so we can get back to you</div>
                        <div className="pera bg-white p-2 rounded-3 my-2">Customer Detail's Form</div>
                        <div className="pera bg-white px-3 pb-3 pt-1 rounded-3 fw-medium">
                            <form className="chat-form" onSubmit={handleSubmit}>
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                                <label>E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter E-mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                                <label>Phone No.</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter Phone No."
                                    value={formData.phone}
                                    onChange={handleChange}
                                />

                                <label>Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Enter Message ..."
                                    rows="2"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>

                                <button type="submit" className="fw-medium">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LetsChat;
