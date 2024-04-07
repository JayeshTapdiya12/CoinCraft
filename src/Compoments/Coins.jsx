import * as React from 'react';
import { useState, useEffect } from 'react';
import { BaseUrl } from './BaseUrl';
import Loader from './Loader';
import axios from 'axios';
// import Header from './Navbar';
import { Link } from 'react-router-dom';
// import Pagination from 'react-js-pagination';


const Coins = () => {

    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([])
    const [currency, setCurrency] = useState('usd')
    const currencySymbol = currency === 'inr' ? '₹' : '$';
    const [search, setSearch] = useState('')



    useEffect(() => {
        const getCoinsData = async () => {
            const { data } = await axios.get(`${BaseUrl}/coins/markets?vs_currency=${currency}`);
            // console.log(data)
            setCoins(data)
            setLoading(false)
        }
        getCoinsData();
    }, [currency])



    return (
        <>
            {
                loading ? <Loader /> : <>

                    <div className="search-bar">
                        <input type="text"
                            placeholder='Search Your Coins '
                            onChange={(e) => setSearch(e.target.value)}
                            style={{ marginLeft: "40vw", backgroundColor: "black", color: "white", width: "15vw" }}

                        />
                    </div>

                    <div className="btns">
                        <button onClick={() => setCurrency('usd')}>USD</button>
                        <button onClick={() => setCurrency('inr')}>INR</button>

                    </div>

                    {
                        coins.filter((data, i) => {
                            if (data === '') {
                                return data
                            } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
                                return data
                            }
                        }).map((coindata, i) => {
                            return (
                                <>
                                    <CoinCard coindata={coindata} i={i} id={coindata.id} currencySymbol={currencySymbol} />

                                </>)
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
        <Link to={`/coins/${id}`} style={{ textDecoration: "none" }}>

            <div className='table-responsive'>
                <table className="table table-hover table-primary">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th scope="col">Logo</th>
                            <th scope="col">CryptoCurrency_Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Market_Cap_Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-success" style={{ fontWeight: "700" }}>
                            <td>{coindata.market_cap_rank}</td>
                            <td><img src={coindata.image} height={"80px"} alt="CRYPTOCOIN IMAGE..." /></td>
                            <td >{coindata.name}</td>
                            <td>{currencySymbol} {coindata.current_price.toFixed(3)}</td>
                            <td style={profit ? { color: 'green' } : { color: 'red' }}>{profit ? "+ " + coindata.market_cap_change_percentage_24h.toFixed(2) : coindata.market_cap_change_percentage_24h}</td>
                        </tr>
                    </tbody>
                </table>


            </div>


        </Link>
    )
}

export default Coins;
