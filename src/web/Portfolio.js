import * as React from "react";
import {makeStyles, Typography} from "@material-ui/core";
import MainPage from "./MainPage";
import CoinService from "../services/CoinService";
import {Box, Grid, Paper} from "@mui/material";
import Container from "@mui/material/Container";
import Chart from "../components/Chart";
import Deposits from "../components/Deposit";
import Holdings from "../components/Holdings";


const useStyle = makeStyles(theme => ({
    text: {
        color: "#fff"
    }
}));


class Portfolio extends React.Component {

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
            <React.Fragment>
                <Box sx={{display: 'flex'}}>
                    {/*<Typography>*/}
                    {/*    JEDEN*/}
                    {/*    <div></div>*/}
                    {/*    {this.state.oneCoin.id}*/}
                    {/*    {this.state.oneCoin.name}*/}
                    {/*    {this.state.oneCoin.description}*/}

                    {/*    <div></div>*/}
                    {/*    WIELE*/}
                    {/*    {this.state.coin.id}*/}

                    {/*</Typography>*/}

                    {/*{this.state.coin.map((coin, id) => (*/}
                    {/*    <Typography>*/}
                    {/*        {coin.id}*/}
                    {/*        {coin.name}*/}
                    {/*        {coin.description}*/}
                    {/*    </Typography>*/}
                    {/*))*/}
                    {/*}*/}
                    <Box
                        component="main"
                        sx={{

                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                        }}
                    >
                        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                            <Grid container spacing={3}>
                                {/* Chart */}
                                <Grid item xs={12} md={8} lg={9}>
                                    <Paper
                                        sx={{
                                            backgroundColor: '#fff', // #17283D #19355e
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: 240,
                                        }}
                                    >
                                        <Chart/>
                                    </Paper>
                                </Grid>
                                {/* Recent Deposits */}
                                <Grid item xs={12} md={4} lg={3}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: 240,
                                        }}
                                    >
                                        <Deposits/>
                                    </Paper>
                                </Grid>
                                {/* Holdings*/}
                                <Grid item xs={12}>
                                    <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                                        <Holdings/>

                                    </Paper>
                                </Grid>
                            </Grid>

                        </Container>
                    </Box>
                </Box>
            </React.Fragment>
        )
    }

}

export default Portfolio

// export default function Portfolio() {
//
//     const style = useStyle();
//
//
//     return (
//         <Typography classes={{root: style.text}}>
//             portfolio
//         </Typography>
//
//     );
//
// }
