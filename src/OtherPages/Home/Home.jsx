import React from 'react'
import image from './top_img.png'
import "./Home.css"
import Service from '../Service/Service'

const Home = () => {
    return (
        <>
            {/* Home */}
            {/* TOP section */}
            <div className="home">
                <div className='top_section'>
                    <div class="bluid">
                        <h1>Progress<br /> Your Bitcoin Money Success</h1>
                        <p>There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered
                        </p>

                    </div>
                    <figure><img class="img_responsive" src={image}
                        alt="#" /></figure>

                    {/* <div class="bit"> */}

                    {/* </div> */}
                    {/* TOP Section End */}
                </div>
                <hr />
                <Service />

            </div>
        </>
    )
}

export default Home
