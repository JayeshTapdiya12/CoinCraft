import { React, useState, useEffect } from 'react'
import axios from 'axios';
import './News.css'

// mui card
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';


const News = () => {
    const [data, setData] = useState([]);
    // const [error, setError] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const options = {
                method: 'GET',
                url: 'https://crypto-news16.p.rapidapi.com/news/all',
                headers: {
                    'X-RapidAPI-Key': '5f40966cbcmsha854b49d2299cf0p17e114jsnecb141f5e249',
                    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setData(response);

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
            <section id="about" className="aboutSec">

                <div className="about">
                    {data.map((ele, id) => {
                        return (<>
                            <Link to={ele.url}>
                                <Card key={id} sx={{ maxWidth: 300, maxHeight: 350 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={ele.thumbnail}
                                            alt="Thumbnail"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {ele.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {ele.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Date : {ele.createdAt}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Link>
                        </>

                        )
                    })}

                </div>
            </section>
        </>
    )
}

export default News
