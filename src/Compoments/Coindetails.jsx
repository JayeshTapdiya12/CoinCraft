import React from 'react'
import { useEffect, useState } from 'react'
import Loader from './Loader'
import { BaseUrl } from './BaseUrl'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import './CoinDetail.css'
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi'
import { IoPulseOutline } from 'react-icons/io5'
import CoinChart from './CoinChart'


const Coindetails = () => {
    const [currency, setCurrency] = useState("inr")
    const currencySymbol = currency === 'inr' ? '₹' : '$';

    const [coin, setCoin] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const profit = coin.market_data?.price_change_percentage_24h > 0
    useEffect(() => {
        const getCoin = async () => {
            try {
                const { data } = await axios.get(`${BaseUrl}/coins/${id}`)
                console.log(data)
                setCoin(data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        getCoin()
    }, [id])



    return (
        <>
            {
                loading ? <Loader /> : <>

                    <div className="coin-detail">
                        <div className="coin-info">
                            <div className="btncoins">
                                <Link to={"/coins"}><button>Back</button></Link>
                                <button onClick={() => setCurrency('usd')}>USD</button>
                                <button onClick={() => setCurrency('inr')}>INR</button>

                            </div>
                            <div className="time">
                                {coin.last_updated}
                            </div>
                            <div className="coin_image">
                                <img src={coin.image.large} height={"150px"} alt="The Image Of Coin" />
                            </div>
                            <div className="coin-name">
                                {coin.symbol}
                            </div>
                            <div className="coin-name">
                                {coin.name}
                            </div>
                            <div className="coin-price">
                                {currencySymbol}   {coin.market_data.current_price[currency]}
                            </div>
                            <div className="coin-profit">
                                {profit ? <BiSolidUpArrow style={{ color: "green" }} /> : <BiSolidDownArrow style={{ color: "red" }} />} {coin.market_data.price_change_percentage_24h} %
                            </div>
                            <div className="market-rank">
                                <IoPulseOutline color='orange' />  # {coin.market_cap_rank}
                            </div>
                            <div className="coin-desc">
                                <p>
                                    {coin.description['en'].split('.')[0]}

                                </p>
                            </div>
                        </div>
                        <CoinChart currency={currency} />

                    </div>

                </>
            }
        </>
    )
}

export default Coindetails
