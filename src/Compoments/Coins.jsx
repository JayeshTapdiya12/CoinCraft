import React from 'react'
import { useState, useEffect } from 'react';
import { BaseUrl } from './BaseUrl';
import Loader from './Loader';
import axios from 'axios';
import Header from './Navbar';
import { Link } from 'react-router-dom';


const Coins = () => {

    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([])
    const [currency, setCurrency] = useState('usd')
    const currencySymbol = currency == 'inr' ? '₹' : '$';


    useEffect(() => {
        const getCoinsData = async () => {
            const { data } = await axios.get(`${BaseUrl}/coins/markets?vs_currency=${currency}`);
            console.log(data)
            setCoins(data)
            setLoading(false)
        }
        getCoinsData();
    }, [])
    return (
        <>
            {
                loading ? <Loader /> : <>

                    <div className="btns">
                        <button onClick={() => setCurrency('inr')}>INR</button>
                        <button onClick={() => setCurrency('usd')}>USD</button>

                    </div>
                    {
                        coins.map((coindata, i) => {
                            return (
                                <CoinCard coindata={coindata} i={i} id={coindata.id} currencySymbol={currencySymbol} />
                            )
                        })
                    }
                </>

            }
        </>
    )
}


const CoinCard = ({ coindata, i, currencySymbol, id }) => {
    const profit = coindata.market_cap_change_percentage_24h > 0;
    return (
        <Link to={`/coins/${id}`} style={{ textDecoration: "none", color: "white" }}>
            <div key={i} className="ex-cards">
                <div className="image">
                    {/* <h1>icon</h1> */}
                    <img src={coindata.image
                    } height={"80px"} alt="CRYPTOCOIN IMAGE..." />
                </div>
                <div className="name">
                    {coindata.name
                    }
                </div>
                <div className="price">
                    {currencySymbol} {coindata.current_price.toFixed(3)
                    }
                </div>
                <div style={profit ? { color: 'green' } : { color: 'red' }} className="rank">
                    {profit ? "+ " + coindata.market_cap_change_percentage_24h.toFixed(2) : coindata.market_cap_change_percentage_24h}
                </div>
                {/* <div className="url">
                     {coindata.url}
                                        </div> */}
            </div>
        </Link>
    )
}
export default Coins
