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
                            {
                                exchanges.map((item, i) => {
                                    return (<>

                                        <div className='table-responsive hello'>
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr >
                                                        <th scope="col" >Logo</th>
                                                        <th scope="col" >CryptoCurrency_Exchange_Name</th>

                                                        <th scope="col" >Market_Cap_Change</th>
                                                        <th scope="col" >Rank</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className='hello'>

                                                        <td className='hello1'>
                                                            <img src={item.image} height={"80px"} alt="CRYPTOCOIN IMAGE..." />
                                                        </td>
                                                        <td className='hello1'>
                                                            <Link to={item.url} style={{ textDecoration: "none", color: 'gold' }}>{item.name}   </Link>
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
