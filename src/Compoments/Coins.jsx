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
                        <button onClick={() => setCurrency('usd')}>USD</button>
                        <button onClick={() => setCurrency('inr')}>INR</button>


                    </div>
                    {/* 
                    <div className='table-responsive'>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Logo</th>
                                    <th scope="col">CryptoCurrency_Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Market_Cap_Change</th>
                                </tr>
                            </thead>
                        </table>
                    </div> */}

                    {
                        coins.map((coindata, i) => {
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

    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 10; // Change this value according to your preference

    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = Math.min(startIndex + itemsPerPage, 100);
    // const currentData = coindata.slice(startIndex, endIndex);

    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    // };

    return (
        <Link to={`/coins/${id}`} style={{ textDecoration: "none" }}>

            <div className='table-responsive'>
                <table class="table table-hover">
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
                        <tr>
                            <td>{coindata.market_cap_rank}</td>
                            <td><img src={coindata.image} height={"80px"} alt="CRYPTOCOIN IMAGE..." /></td>
                            <td>{coindata.name}</td>
                            <td>{currencySymbol} {coindata.current_price.toFixed(3)}</td>
                            <td style={profit ? { color: 'green' } : { color: 'red' }}>{profit ? "+ " + coindata.market_cap_change_percentage_24h.toFixed(2) : coindata.market_cap_change_percentage_24h}</td>
                        </tr>
                    </tbody>
                </table>
                {/* 
                <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={itemsPerPage}
                    totalItemsCount={100}
                    pageRangeDisplayed={10} // Adjust this value according to your preference
                    onChange={handlePageChange}
                /> */}
            </div>


        </Link>
    )
}

export default Coins;
