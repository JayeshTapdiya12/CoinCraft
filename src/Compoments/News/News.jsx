import { React, useState, useEffect } from 'react'
import axios from 'axios';
import './News.css'

// mui card
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';


const News = () => {
    const [data, setData] = useState([]);
    // const [error, setError] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const options = {
                method: 'GET',
                url: 'https://crypto-news51.p.rapidapi.com/api/v1/crypto/articles',
                params: {
                    page: '1',
                    limit: '10',
                    time_frame: '24h',
                    format: 'json'
                },
                headers: {
                    'x-rapidapi-key': '3a4fe67cbfmshec9d6ba380e52dbp183e80jsnbb33aa7fd41e',
                    'x-rapidapi-host': 'crypto-news51.p.rapidapi.com'
                }
            };
            try {
                const response = await axios.request(options);
                setData(response.data);

                console.log(response)
            } catch (error) {
                // setError(error);
                console.log(error)
            }
        };
        getData();
    }, []);


    return (
        <>

            <section className="aboutSec">
                <div className="about">
                    {/* <div className="details"> */}

                    {/* yaha apne manas ka code add akr denge */}

                    <div className="gallery">
                        {data.map((ele, id) => {
                            return (<>
                                <Link to={ele.link} style={{ textDecoration: "none" }} >

                                    <div key={id} className="article" style={{ marginTop: "15px", color: "black" }}>
                                        {/* {article.urlToImage && <img src={article.urlToImage} alt={article.title} />} */}
                                        <h2>Title: {ele.title} .</h2>
                                        <h5>Date : {ele.published}</h5>
                                        <h2>Category: {ele.category}</h2>
                                        <p>Description: {ele.summary.split('.')[0]} .</p>
                                        {/* <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a> */}
                                    </div>


                                    {/* 
                                    <div class="card" style={{ width: "18 rem", padding: "5 rem", marginTop: "15 rem" }} >
                                        <div class="card-body" key={id} style={{ width: "18 rem", padding: "5 rem", marginTop: "15 rem", textDecoration: "none" }}>
                                            <h5 class="card-title" style={{ textDecoration: "none" }}></h5>
                                            <h6 class="card-subtitle mb-2 text-muted"></h6>
                                            <p class="card-text">{ele.description}</p>

                                        </div>
                                    </div> */}
                                </Link>

                            </>
                            )
                        })}
                        {/* </div>S */}
                    </div>
                </div>
            </section>

        </>
    )
}

export default News
