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
                url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',
                headers: {
                    'X-RapidAPI-Key': '3a4fe67cbfmshec9d6ba380e52dbp183e80jsnbb33aa7fd41e',
                    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setData(response.data);
                // console.log(response.data)
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
