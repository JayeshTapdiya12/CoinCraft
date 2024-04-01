import React from 'react'
import image from './top_img.png'
import "./Home.css"
import "./Home.css"

const Home = () => {
    return (
        <>
            <section id="about" className="aboutSec">

                <div className="about">

                    <div className="details">
                        <h3 className="heading">
                            {" "}
                            <i>EMPOWER YOUR FUTURE </i>
                        </h3>
                        <h2 className="mainheading">CoinCraft AWAITS YOU!</h2>
                        <p className="para">CoinCraft is your gateway to the world of cryptocurrencies and blockchain technology. Whether you're a seasoned trader, a curious investor, or a newcomer exploring the possibilities of digital currencies, we're here to empower you with the knowledge, tools, and resources you need to succeed.</p>
                        <br />
                        <hr />
                    </div>

                    <div className="composition">
                        <img className="images" src={image} alt="about" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home

