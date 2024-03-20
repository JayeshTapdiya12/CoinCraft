import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <div className="container">
                <h1 className="brand"><span>CoinCraft</span></h1>
                <div className="wrapper">
                    {/* COMPANY INFORMATION */}
                    <div className="company-info">
                        <h3>CoinCraft</h3>
                        <ul>
                            <li><i className="fa fa-road"></i> Indore, india</li>
                            <li><i className="fa fa-phone"></i> +91 12345-67890</li>
                            <li><i className="fa fa-envelope"></i> Example@gamil.com</li>
                        </ul>
                    </div>
                    {/* End .company-info */}

                    {/* CONTACT FORM */}
                    <div className="contact">
                        <h3>E-mail Us</h3>
                        <form id="contact-form">
                            <p>
                                <label>Name</label>
                                <input type="text" name="name" id="name" required />
                            </p>
                            <p>
                                <label>Company</label>
                                <input type="text" name="company" id="company" />
                            </p>
                            <p>
                                <label>E-mail Address</label>
                                <input type="email" name="email" id="email" required />
                            </p>
                            <p>
                                <label>Phone Number</label>
                                <input type="text" name="phone" id="phone" />
                            </p>
                            <p className="full">
                                <label>Message</label>
                                <textarea name="message" rows="5" id="message"></textarea>
                            </p>
                            <p className="full">
                                <button type="submit">Submit</button>
                            </p>
                        </form>
                        {/* End #contact-form */}
                    </div>
                    {/* End .contact */}
                </div>
                {/* End .wrapper */}
            </div>
        </>
    )
}

export default Contact
