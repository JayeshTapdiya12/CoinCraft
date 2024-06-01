import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {


    const [name1, setName1] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setName1({
            ...name1,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        alert(`Name: ${name1.name}\nEmail: ${name1.email}\n Company: ${name1.comp}\n Contact Number: ${name1.phone}\n  Message: ${name1.message}`);
    };

    return (
        <>
            <div className='conact'>
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
                            <form id="contact-form" >
                                <p>
                                    <label>Name</label>
                                    <input type="text" name="name" id="name" required value={name1.name} onChange={handleChange} />
                                </p>
                                <p>
                                    <label>Company</label>
                                    <input type="text" name="company" id="company" value={name1.comp} onChange={handleChange} />
                                </p>
                                <p>
                                    <label>E-mail Address</label>
                                    <input type="email" name="email" id="email" required value={name1.email} onChange={handleChange} />
                                </p>
                                <p>
                                    <label>Phone Number</label>
                                    <input type="text" name="phone" id="phone" value={name1.phone} onChange={handleChange} />
                                </p>
                                <p className="full">
                                    <label>Message</label>
                                    <textarea name="message" rows="5" id="message" value={name1.message} onChange={handleChange}></textarea>
                                </p>
                                <p className="full">
                                    <button type="submit" onClick={handleSubmit}>Submit</button>
                                </p>
                            </form>
                            {/* End #contact-form */}
                        </div>
                        {/* End .contact */}
                    </div>
                    {/* End .wrapper */}
                </div>
            </div>
        </>
    )
}

export default Contact
