import React from 'react'
import HOC from '../../HOC'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { IoMdCheckbox } from 'react-icons/io'

function PlasticPlagueBlog() {

    const MaterialsData = [
        {
            year: "1950",
            global: "2",
            waste: "Negligible"
        },
        {
            year: "2000",
            global: "213",
            waste: "8"
        },
        {
            year: "2023",
            global: "400+",
            waste: "14+"
        }
    ]

    const chartdata = [
        {
            Affected: "Sea Turtles",
            Harms: "Entangled in nets, ingest bags",
            Annually: "1,000s"
        },
        {
            Affected: "Seabirds",
            Harms: "Mistake microplastics for fish",
            Annually: "1 million+"
        },
        {
            Affected: "Marine Mammals",
            Harms: "Starvation from blocked digestive tracts",
            Annually: "100,000+"
        },
        {
            Affected: "Land Mammals (Cows, etc.)",
            Harms: "Stomach impaction from plastic bags",
            Annually: "Untold thousands"
        }
    ]

    return (
        <>
            <div className='aboutus_bg pb-4 pt-2 pt-lg-3'>
                <div className='container text-center'>
                    <div className='aboutus_content mx-auto'>
                        <div className='text-center'>
                            <h2 className="fw-bold titlecolor" data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-once="true">Plastic Plague : Robbing Our Children of Clean Air
                            </h2>
                        </div>
                        <div className="text-center mt-4 mb-4" data-aos="zoom-in"
                            data-aos-duration="1500"
                            data-aos-once="true">
                            <img
                                src={require('../../assets/images/fd3ebafa-3fd4-435d-bd74-43e2d92c32d5.jpg')}
                                alt=""
                                className="img-fluid aboutus_content about_image"
                            />
                        </div>
                        <div className='text-start'>
                            <h2 className="fw-bold text-start"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-once="true">
                                🌍 <span className="titlecolor">A World Suffocating on Plastic</span>
                            </h2>
                            <p className='blogCont mt-3' style={{ wordBreak: "break-all" }}>Plastic was once hailed as a miracle material—lightweight, durable, and convenient. Today, it has transformed into a global environmental catastrophe. From the air we breathe to the food we eat, plastics have infiltrated every corner of our lives. The most alarming reality? Our children are paying the heaviest price.</p>
                            <p className='blogCont' style={{ wordBreak: "break-all" }}>This blog explores how plastic pollution is endangering our air, water, soil, and health—with a sharp focus on its hidden impact on our youngest generation. Business owners, policymakers, parents, and eco-enthusiasts must recognize the scale of this crisis—and act decisively.</p>
                        </div>
                        <div className='mt-2 text-start'>
                            <h2 className='fw-bold text-start' data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-once="true">🌐 <span className='titlecolor'>The Global Plastic Pollution Crisis</span></h2>
                            <p className='blogCont' style={{ wordBreak: "break-all" }}>Plastic production has skyrocketed from 2 million tons in 1950 to over 400 million tons annually today. Nearly half is single-use plastic, discarded within minutes but lingering for centuries.</p>
                            <div className='fw-bold fs-5 titlecolor text-center'>The Rising Tide of Plastic Pollution</div>
                            <div className="table-container my-3 overflow-hidden">
                                <table className="eco-table">
                                    <thead>
                                        <tr className='text-center blogCont'>
                                            <th>Year</th>
                                            <th>Global Plastic Production (Million Tons)</th>
                                            <th>Waste Ending in Oceans (Million Tons)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {MaterialsData.map((row, index) => (
                                            <tr key={index} className='text-center blogCont'>
                                                <td className='fw-medium'>{row.year}</td>
                                                <td className='fw-medium'>{row.global}</td>
                                                <td className='fw-medium'>{row.waste}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="text-start mt-2">
                            <h2
                                className="fw-bold text-start"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-once="true"
                            >
                                🧠 <span className="titlecolor">Microplastics in the Human Brain & Heart Health Risks</span>
                            </h2>
                            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 custom-about-container">
                                <div className="custom-image-section mt-2 mt-lg-4 order-2 order-lg-1">
                                    <div
                                        className="text-center"
                                        data-aos="zoom-in"
                                        data-aos-duration="1500"
                                        data-aos-once="true"
                                    >
                                        <img
                                            src={require('../../assets/images/482af10e-e4a5-4858-bda2-2d39c5c562e8.png')}
                                            alt=""
                                            className="img-fluid aboutus_content about-blog_image"
                                        />
                                    </div>
                                </div>

                                <div className="custom-content-section mt-lg-4 order-1 order-lg-2">
                                    <p className="blogCont" style={{ wordBreak: "break-word" }}>
                                        Recent studies reveal microplastics—tiny fragments of broken-down plastic—have been found in human brains and even in bloodstreams. Once inside, they may trigger inflammation, oxidative stress, and cardiovascular risks.
                                    </p>
                                    <div className="text-start" style={{ wordBreak: "break-word" }}>
                                        <div className="blogCont mt-2">
                                            <span className="fw-medium">
                                                <MdKeyboardDoubleArrowRight /> Brain :
                                            </span> Microplastics cross the blood-brain barrier, linked to neurological inflammation.
                                        </div>
                                        <div className="blogCont mt-2">
                                            <span className="fw-medium">
                                                <MdKeyboardDoubleArrowRight /> Heart :
                                            </span> Found in arterial plaque, possibly accelerating heart disease.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-start my-4'>
                            <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center gap-0 gap-lg-4'>
                                <div className=''>
                                    <h2 className='fw-bold text-start' data-aos="fade-up"
                                        data-aos-duration="1500"
                                        data-aos-once="true">🐬 <span className='titlecolor'>Plastic’s Toll on Animals & Marine Life</span></h2>

                                    <p className='blogCont mt-3' style={{ wordBreak: "break-all" }}>Our oceans are choking on plastic : 100 million marine animals die each year from plastic-related causes. Land animals are no safer—elephants, cows, and deer often ingest plastic waste, mistaking it for food.</p>
                                </div>
                                <div className=''>
                                    <div className="text-center" data-aos="zoom-in" data-aos-duration="1500" data-aos-once="true">
                                        <img
                                            src={require('../../assets/images/a5cccef3-5808-43a8-ae0d-402a6b21e1f6.jpg')}
                                            alt=""
                                            className="img-fluid Plastic’s-img circle"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-2 text-start'>
                            <h2 className='fw-bold text-start' data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-once="true">📊 <span className='titlecolor'>Comparison Chart : Plastic’s Deadly Impact on Wildlife</span></h2>
                            <div className="table-container my-4 overflow-hidden">
                                <table className="eco-table">
                                    <thead>
                                        <tr className='text-center blogCont'>
                                            <th>Species Affected</th>
                                            <th>How Plastic Harms Them</th>
                                            <th>Estimated Deaths Annually</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {chartdata.map((row, index) => (
                                            <tr key={index} className='text-center blogCont'>
                                                <td className='fw-medium'>{row.Affected}</td>
                                                <td className='fw-medium'>{row.Harms}</td>
                                                <td className='fw-medium'>{row.Annually}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='mt-4 pt-1'>
                            <h2 className='fw-bold text-start' data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-once="true">🧸 <span className='titlecolor'>Plastic Toys : A Hidden Danger in Homes</span></h2>
                            <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4'>
                                <div className='text-start mt-2 w-100 w-lg-50'>
                                    <p className='blogCont' style={{ wordBreak: "break-all" }}>
                                        Bright, cheap, and durable—plastic toys dominate the market. Yet, they often contain phthalates, BPA, and toxic dyes that can leach into children’s hands and mouths. Children are uniquely vulnerable. Plastic burning, incineration, and even indoor microplastics from carpets, toys, and packaging release toxic fumes.
                                    </p>
                                    <div className='text-start' style={{ wordBreak: "break-all" }}>
                                        <div className='blogCont'><MdKeyboardDoubleArrowRight /> Kids breathe faster → inhale more pollutants per body weight.</div>
                                        <div className='blogCont mt-1'><MdKeyboardDoubleArrowRight /> Studies link early exposure to asthma, allergies, and impaired lung growth.</div>
                                        <div className='blogCont mt-1'><MdKeyboardDoubleArrowRight /> Schools and playgrounds near waste-burning sites are high-risk zones.</div>
                                    </div>
                                </div>
                                <div className='mt-2 w-100 w-lg-50'>
                                    <div className="text-center"
                                        data-aos="zoom-in"
                                        data-aos-duration="1500"
                                        data-aos-once="true">
                                        <img
                                            src={require('../../assets/images/b63374fe-c812-4e53-8967-6ace6ce95e20.png')}
                                            alt=""
                                            className="img-fluid Plastic’s-img3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 text-start'>
                            <h2 className='fw-bold text-start' data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-once="true">🏠 <span className='titlecolor'>Plastic in Every Household</span></h2>
                            <p className='blogCont' style={{ wordBreak: "break-all" }}>From food packaging to synthetic clothes, plastic has infiltrated every corner of our homes. Invisible microplastics shed into the air we breathe, water we drink, and food we serve our kids.</p>
                            <div className='text-start' style={{ wordBreak: "break-all" }}>
                                <div className='blogCont mt-2'><MdKeyboardDoubleArrowRight /> Tap water samples globally show 83% contain microplastics.</div>
                                <div className='blogCont mt-1'><MdKeyboardDoubleArrowRight /> Plastic fibers are released when washing polyester clothes.</div>
                                <div className='blogCont mt-1'><MdKeyboardDoubleArrowRight /> Cooking in plastic containers may release harmful chemicals.</div>
                            </div>
                        </div>
                        <div className='mt-4 text-start'>
                            <h2 className='fw-bold titlecolor' data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-once="true"><IoMdCheckbox className='fs-2' style={{ color: "#008a43" }} /> Practical Measures : Fighting Back Against Plastic</h2>
                            <p className='blogCont' style={{ wordBreak: "break-all" }}>While the problem is colossal, solutions exist—and individuals, businesses, and governments must step up.</p>
                            <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4'>
                                <div className='w-100 w-lg-50'>
                                    <div className="text-center" data-aos="zoom-in"
                                        data-aos-duration="1500"
                                        data-aos-once="true">
                                        <img
                                            src={require('../../assets/images/33b500d9-aa5d-4ab3-b133-8c9e33e3fea4.jpg')}
                                            alt=""
                                            className="img-fluid aboutus_content about_image w-100"
                                        />
                                    </div>
                                </div>
                                <div className='w-100 w-lg-50'>
                                    <div className='text-start'>
                                        <div className='fw-bold fs-5'>For Individuals :</div>
                                        <div style={{ wordBreak: "break-all" }}>
                                            <div className='blogCont mt-2'><MdKeyboardDoubleArrowRight /> Switch to reusable bags, bottles, and containers.</div>
                                            <div className='blogCont mt-1'><MdKeyboardDoubleArrowRight /> Choose toys made of wood, fabric, or certified safe plastics.</div>
                                            <div className='blogCont mt-1'><MdKeyboardDoubleArrowRight /> Support local zero-waste shops.</div>
                                        </div>
                                    </div>
                                    <div className='my-3 text-start'>
                                        <div className='fw-bold fs-5'>For Businesses & Decision-Makers :</div>
                                        <div style={{ wordBreak: "break-all" }}>
                                            <div className='blogCont mt-2'><MdKeyboardDoubleArrowRight /> Invest in biodegradable packaging and circular economy models.</div>
                                            <div className='blogCont mt-1'><MdKeyboardDoubleArrowRight /> Ban single-use plastics in corporate supply chains.</div>
                                            <div className='blogCont mt-1'><MdKeyboardDoubleArrowRight /> Innovate with eco-friendly product designs.</div>
                                        </div>
                                    </div>
                                    <div className='text-start'>
                                        <div className='fw-bold fs-5'>For Governments :</div>
                                        <div style={{ wordBreak: "break-all" }}>
                                            <div className='blogCont mt-2'><MdKeyboardDoubleArrowRight /> Enforce stricter bans on harmful plastics.</div>
                                            <div className='blogCont mt-1'><MdKeyboardDoubleArrowRight /> Fund research on sustainable materials.</div>
                                            <div className='blogCont mt-1'><MdKeyboardDoubleArrowRight /> Launch awareness campaigns targeting parents and schools.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-3 text-start'>
                            <h2 className='fw-bold titlecolor' data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-once="true"><IoMdCheckbox className='fs-2' style={{ color: "#008a43" }} /> Conclusion : Our Children Deserve Better</h2>
                            <p className='blogCont' style={{ wordBreak: "break-all" }}>The plastic plague is not just an environmental issue—it’s a public health crisis, a business risk, and a moral failing. The evidence is undeniable: plastic is robbing our children of clean air, safe play, and a healthy future.</p>
                            <p className='blogCont' style={{ wordBreak: "break-all" }}>The good news? Change is possible—if we act now. Every business decision, every household choice, every government policy can tip the scale towards a cleaner, safer world. Let’s unite to ensure that our children inherit fresh air, thriving oceans, and a plastic-free tomorrow.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(PlasticPlagueBlog)