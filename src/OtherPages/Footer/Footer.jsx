import React from 'react'
import "./Footer.css"
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';
const Footer = () => {
    return (
        <>
            <MDBFooter className='text-center footer' color='white' >
                <MDBContainer className='p-4'>




                    <section className='mb-4'>
                        <p>
                            Welcome to CoinCraft, your premier destination for all things related to cryptocurrencies and blockchain technology. At CoinCraft, we're dedicated to providing you with accurate information, useful resources, and exceptional services to help you navigate the exciting world of digital currencies.
                        </p>
                    </section>

                    <section className=''>
                        <MDBRow>
                            <MDBCol lg='6' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0' >
                                    <li><a href="/" style={{ textDecoration: "none", color: "white" }}>Home</a></li>
                                    <li><a href="/coins" style={{ textDecoration: "none", color: "white" }}>Coins</a></li>
                                    <li><a href="/about" style={{ textDecoration: "none", color: "white" }}>About Us</a></li>
                                    <li><a href="/contact" style={{ textDecoration: "none", color: "white" }}>Contact Us</a></li>
                                    <li><a href="/news" style={{ textDecoration: "none", color: "white" }}>News</a></li>

                                </ul>
                            </MDBCol>

                            <MDBCol lg='6' md='6' className='mb-4 mb-md-0'>
                                {/* <h5 className='text-uppercase'>Links</h5> */}

                                {/* <ul className='list-unstyled mb-0'> */}
                                <h4>Contact Us</h4>
                                <p>Email: jayesh121220@gmail.com</p>
<p>Email: kanhaiyasoni0212@gmail.com</p>
                                <p>Phone: +91 78691-48854, 96697-61446</p>
                                <p>Address: Medi-Caps University, Indore, MP</p>
                                {/* </ul> */}
                            </MDBCol>




                        </MDBRow>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024  Copyright
                    {/* <a className='text-white' href='https://mdbootstrap.com/'> */}
                    :    CoinCraft
                    {/* </a> */}
                </div>
            </MDBFooter>
        </>
    )
}

export default Footer
