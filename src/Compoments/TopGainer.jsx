import { React, useState, useEffect } from 'react'
import "./topgainer.css"
import axios from "axios"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const TopGainer = () => {
    const [data, setData] = useState([]);
    // const [error, setError] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const options = {
                method: 'GET',
                url: 'https://tokeninsight-crypto-api1.p.rapidapi.com/api/v1/coins/top-gainers',
                params: { range: '100' },
                headers: {
                    TI_API_KEY: 'c5da867677f042a99e660ad055c7c751',
                    'X-RapidAPI-Key': '3a4fe67cbfmshec9d6ba380e52dbp183e80jsnbb33aa7fd41e',
                    'X-RapidAPI-Host': 'tokeninsight-crypto-api1.p.rapidapi.com'
                }
            };


            try {
                const response = await axios.request(options);
                setData(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                // setError(error);
                // console.log(error)
            }
        };

        getData();
    }, []);


    // mmui table formate

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));



    function createData(name
        , price, price_change_24h, symbol, logo
    ) {
        return {
            name
            , price,
            price_change_24h,
            symbol
            , logo
        };
    }

    // idhar apne ko map method use karni hai jisse create data mei data aajaye

    // const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    // ];

    const rows = data.map((item, index) => createData(item.name
        , item.price, item.price_change_24h, item.symbol, item.logo
    ));

    const profit = data.price_change_24h > 0;

    return (
        <>
            <section id="about" className="aboutSec">
                <center>
                    <h2 className="heading1">Top Gainers</h2>
                </center>
                <div className="about">


                    <div className="details">

                        <TableContainer component={Paper} style={{ marginLeft: 25 }}>
                            <Table sx={{ minWidth: 1200 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Coin</StyledTableCell>
                                        <StyledTableCell align="right">Crypto Symbol</StyledTableCell>
                                        <StyledTableCell align="right">Crypto Logo</StyledTableCell>
                                        <StyledTableCell align="right">Price</StyledTableCell>

                                        <StyledTableCell align="right">Rise 24hr</StyledTableCell>


                                        {/* <StyledTableCell align="right">Volume 24hr</StyledTableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (

                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.symbol}</StyledTableCell>
                                            <StyledTableCell align="right"><img src={row.logo} alt={row.logo} width={"15px"} height={"15px"} /></StyledTableCell>
                                            <StyledTableCell align="right">{row.price.toFixed(3)}</StyledTableCell>
                                            <StyledTableCell align="right" style={profit ? { color: 'green' } : { color: 'red' }}>{profit ? "+ " + row.price_change_24h.toFixed(3) : row.price_change_24h.toFixed(3)} </StyledTableCell>


                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </div>


                </div>
            </section>
        </>
    )
}

export default TopGainer
