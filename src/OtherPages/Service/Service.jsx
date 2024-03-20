import React from 'react'
import image1 from './s1.png'
import image2 from './s2.png'
import image3 from './s3.png'
import './service.css'
const Service = () => {
    return (
        <>
            <div className='service'>
                {/* service */}

                <div class="row">
                    <div class="col-md-4 ">
                        <div class="box ">
                            <div class="img-box">
                                <img src={image1} alt="" />
                            </div>
                            <div class="detail-box">
                                <h5>
                                    Currency Wallet
                                </h5>
                                <p>
                                    fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    The
                                    point of using
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 ">
                        <div class="box ">
                            <div class="img-box">
                                <img src={image2} alt="" />
                            </div>
                            <div class="detail-box">
                                <h5>
                                    Security Storage
                                </h5>
                                <p>
                                    fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    The
                                    point of using
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 ">
                        <div class="box ">
                            <div class="img-box">
                                <img src={image3} alt="" />
                            </div>
                            <div class="detail-box">
                                <h5>
                                    Expert Support
                                </h5>
                                <p>
                                    fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    The
                                    point of using
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn-box">
                    {/* <a href="">
                        View All
                    </a> */}
                </div>
            </div>

        </>

    )
}

export default Service
