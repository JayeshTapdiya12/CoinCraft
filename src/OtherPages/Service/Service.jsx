import React from 'react'
import image1 from './s1.png'
import image2 from './s2.png'
import image3 from './s3.png'
import './service.css'
const Service = () => {
    return (
        <>



            <section id="about" className="aboutSec">
                <center>
                    <h2 className="heading1">Services</h2>
                </center>
                <div className="about">
                    <div className="details">
                        <h2 className="heading1">Currency Wallet</h2>
                        <p className="para">At CoinCraft, we offer a secure and convenient currency wallet service to help you manage your digital assets with ease. Our currency wallet provides a safe and reliable solution for storing, sending, and receiving cryptocurrencies, allowing you to take full control of your finances in the fast-paced world of digital currencies.
                        </p>
                    </div>
                    <div className="composition">
                        <img className="images" src={image1} alt="about" />
                    </div>

                </div>
                <br />
                <hr />
                <br />
                <div className="about">
                    <div className="details">
                        <h2 className="heading1">Security Storage</h2>
                        <p className="para">At CoinCraft,we understand the importance of keeping your digital assets safe and secure. That's why we offer a state-of-the-art security storage service designed to protect your cryptocurrencies from unauthorized access and cyber threats. With our secure storage solutions, you can have peace of mind knowing that your funds are safeguarded by the highest standards of security and encryption.
                        </p>
                    </div>
                    <div className="composition">
                        <img className="images" src={image2} alt="about" />
                    </div>

                </div>
                <br />
                <hr />
                <br />
                <div className="about">
                    <div className="details">
                        <h2 className="heading1"> Expert Support</h2>
                        <p className="para">At CoinCraft,we understand that navigating the world of cryptocurrencies can sometimes be challenging. That's why we offer expert support services to help you with any questions, concerns, or issues you may encounter along the way. Our team of experienced professionals is dedicated to providing you with personalized support and guidance, so you can make informed decisions and maximize your success in the cryptocurrency market.
                        </p>
                    </div>
                    <div className="composition">
                        <img className="images" src={image3} alt="about" />
                    </div>

                </div>
            </section>




        </>

    )
}

export default Service
