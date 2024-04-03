import React, { useEffect, useState } from 'react'
// import Header from './Navbar'
import axios from 'axios';
import { BaseUrl } from './BaseUrl';
import Loader from './Loader';
import './Exchanges.css';
import { Link } from 'react-router-dom';

const Exchanges = () => {

    const [loading, setLoading] = useState(true);
    const [exchanges, setExchanges] = useState([])

    const [search, setSearch] = useState('')


    useEffect(() => {
        const getExhangesData = async () => {
            const { data } = await axios.get(`${BaseUrl}/exchanges`);
            console.log(data)
            setExchanges(data)
            setLoading(false)
        }
        getExhangesData();
    }, [])

    return (
        <>
            <div className="exchanges">
                {
                    loading ? <Loader /> : <>
                        <div >
                            <div className="search-bar">
                                <input type="text"
                                    placeholder='Search Your Coins '
                                    onChange={(e) => setSearch(e.target.value)}
                                    style={{ marginLeft: "40vw", backgroundColor: "black", color: "white", width: "15vw" }}

                                />
                            </div>
                            {
                                exchanges.filter((data) => {
                                    if (data == '') {
                                        return data
                                    } else if (data.name.toLowerCase().includes(search.toLowerCase())) {
                                        return data
                                    }
                                }).map((item, i) => {
                                    return (<>
                                        <div class="table-responsive" key={i}>
                                            <table class="table table-hover table-primary">

                                                <thead>
                                                    <tr >
                                                        <th scope="col" >Logo</th>
                                                        <th scope="col" >CryptoCurrency_Exchange_Name</th>

                                                        <th scope="col" >Market_Cap_Change</th>
                                                        <th scope="col" >Rank</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className='hello table-success'>

                                                        <td className='hello1'>
                                                            <img src={item.image} height={"80px"} alt="CRYPTOCOIN IMAGE..." />
                                                        </td>
                                                        <td className='hello1'>
                                                            <Link to={item.url} style={{ textDecoration: "none", color: 'green', fontWeight: "700" }}>{item.name}   </Link>
                                                        </td>
                                                        <td className='hello1'>{item.trade_volume_24h_btc.toFixed(0)}</td>
                                                        <td className='hello1'>{item.trust_score_rank}</td>
                                                    </tr>
                                                </tbody>
                                            </table>


                                        </div>



                                    </>)
                                })
                            }
                        </div> </>
                }
            </div>
        </>
    )
}

export default Exchanges
