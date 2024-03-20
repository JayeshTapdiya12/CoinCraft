import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FcCurrencyExchange } from "react-icons/fc";

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <h1>CryptoCraft

                </h1>
                <FcCurrencyExchange size={"35"} />

                {/* <br /> */}
                {/* <p style={{ marginTop: "100px" }}>Exploring The Crypto World</p> */}
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/service'>Service</Link>
                    <Link to='/team'>Team</Link>
                    {/* <Link to='/why'>Why Us</Link> */}
                    <Link to='/exchange'>Exchanges Coins</Link>
                    <Link to='/coins'>Coins</Link>

                </li>
            </ul>
        </div>
    )
}

export default Navbar
