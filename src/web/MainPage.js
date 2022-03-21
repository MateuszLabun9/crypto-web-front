import CoinService from "../services/CoinService";
import * as React from "react";
import {makeStyles, Typography} from "@material-ui/core";
import Deposits from "../components/Deposit";
import Chart from "../components/Chart";
import {Box, Grid, Paper} from "@mui/material";
import Container from '@mui/material/Container';
import Holdings from "../components/Holdings";


class MainPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            coin: [],
            oneCoin: {}

        }

    }

    componentDidMount() {
        CoinService.getCoins().then((response) => {
            this.setState({coin: response.data});
        });
        CoinService.getCoin(2).then((response) => {
            this.setState({oneCoin: response.data});
        });
    }

    render() {
        return (
            <Typography >
                //             portfolio
                //         </Typography>
        )
    }
}

export default MainPage