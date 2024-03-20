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
                                    return (
                                        <div key={i} className="ex-cards">
                                            <div className="image" style={{ marginTop: "10px", marginBottom: "10px" }}>
                                                {/* <h1>icon</h1> */}
                                                <img src={item.image
                                                } height={"80px"} alt="CRYPTOCOIN IMAGE..." />
                                            </div>
                                            <div className="name">
                                                <Link to={item.url} style={{ textDecoration: "none", color: 'gold' }}>{item.name
                                                }   </Link>
                                            </div>
                                            <div className="price">
                                                {item.trade_volume_24h_btc.toFixed(0)
                                                }
                                            </div>
                                            <div className="rank" >
                                                {item.trust_score_rank}
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div> </>
                }
            </div>
        </>
    )
}

export default Exchanges
