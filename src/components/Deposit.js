import * as React from 'react';
import {Typography, Link, Grid, Box} from "@material-ui/core";
import {useEffect, useState} from "react";
import CoinService from "../services/CoinService";
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}


export default function Deposits() {
    const today = new Date();
    const date = today.getDate() + "/" + today.getUTCMonth() + "/" + today.getFullYear();

    const [coins, setCoins] = useState([]);

    // Funkcja wykonywana podczas renderowania komponentu
    useEffect(() => {
        CoinService.getCoins().then((response) => {
            setCoins(response.data);
        })

    }, []);

return (
        // <React.Fragment>
        //     <Grid container spacing={1} >
        //     {coins.map ((coin, id) => (
        //         <React.Fragment>
        //
        //         <Grid item xs={3}>
        //             <Box sx={{ backgroundColor: "#b08968" }}  >
        //     <Typography component="p" variant="h4"> {coin.id}</Typography>
        //     <Typography color="text.secondary" sx={{ flex: 1 }}>
        //         {coin.name}
        //     </Typography>
        //     <div>
        //         <Link color="primary" href="#" onClick={preventDefault}>
        //             {coin.description}
        //         </Link>
        //     </div>
        //         </Box>
        //         </Grid>
        //
        //         </React.Fragment>
        //         ))}
        //     </Grid>
        // </React.Fragment>
        <React.Fragment>
            <Title>Recent Deposits</Title>
            <Typography component="p" variant="h4">

                {coins.map ((coin, id) => (
                    <React.Fragment>
                {coin.name}
                    </React.Fragment>
                    ))}
            </Typography>
            <Typography color="textSecondary" sx={{ flex: 1 }}>

                on {date}
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View balance
                </Link>
            </div>
        </React.Fragment>
    );
}