import React from 'react'
import img from './about.png'
import "./about.css"

const About = () => {
    return (
        <div>
            {/* About */}
            <section class="about_section">
                <div class="container ">
                    <div class="heading_container heading_center">
                        <center><h2>
                            About <span>Us</span>
                        </h2></center>

                    </div>
                    <div class="row">
                        <div class="col-md-6 ">
                            <div class="img-box">
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="detail-box">
                                <h3>
                                    We Are CoinCraft
                                </h3>
                                <p>
                                    Welcome to CoinCraft, your premier destination for all things related to cryptocurrencies and blockchain technology. At CoinCraft, we're dedicated to providing you with accurate information, useful resources, and exceptional services to help you navigate the exciting world of digital currencies.
                                </p>
                                <p>
                                    At CoinCraft, the security of your assets and personal information is paramount. We employ industry-leading security measures, including encryption, multi-factor authentication, and cold storage solutions, to safeguard your funds and data against unauthorized access and cyber threats. Your privacy and security are our top priorities, and we continuously invest in advanced technologies and best practices to ensure the integrity of our platform. With CoinCraft, you can trade with confidence, knowing that your assets are protected by the highest standards of security and compliance.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About
