import * as React from 'react';
import {Link as LinkRouter} from 'react-router-dom';
import {Link} from "@material-ui/core";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import LoginIcon from '@mui/icons-material/Login';
import {white} from '@mui/material/colors';
import {
    Typography,
    Box,
    AppBar,
    Container,
    Toolbar,
    Button, makeStyles, Grid
} from "@material-ui/core";
import '../style/NavBar.css'


const pages = ['Home Page', 'Portfolio', 'News'];

const useStyle = makeStyles(theme => ({
    bar: {
        backgroundColor: '#0d131d',//#0d131d    #51709D
        color: "#90A8CA "//#90A8CA #0E1926
    },
    button: {
        color: 'white',
    },
    logo: {
        color: 'white',
        fontWeight: 'bold',
        underline: "none",
        fontSize: '36px'


    }
}));

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const style = useStyle();
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar classes={{root: style.bar}} position="static">

            <Container maxWidth={false} >
                <Toolbar disableGutters style={{width: '100%'}}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        p: 1,
                        m: 1,
                        borderRadius: 1,
                        width: '100%'
                    }}>
                        <Box sx={{justifyContent: 'space-around',
                        width: '80%'
                        }}>
                        <Link
                            underline="none"
                            href="/"
                            classes={{root: style.logo}}
                            style={{justifyContent: 'flex-start'}}
                            //style={{fontSize: 30}}
                        >
                            CRYPTOX
                        </Link>
                        </Box>
                        <Box>
                            <Button component={LinkRouter} to="/main">
                                <GridViewRoundedIcon style={{fill: 'white', fontSize: 40}}/>
                            </Button>


                            <Button component={LinkRouter} to="/portfolio">
                                <AccountBalanceWalletRoundedIcon style={{fill: 'white', fontSize: 40}}/>
                            </Button>
                            <Button component={LinkRouter} to="/news">
                                <NewspaperRoundedIcon style={{fill: 'white', fontSize: 40}}/>
                            </Button>
                            <Button component={LinkRouter} to="/login">
                                <LoginIcon style={{fill: 'white', fontSize: 40}}/>
                            </Button>

                        </Box>
                    </Box>


                </Toolbar>
            </Container>

        </AppBar>
    );
};
export default NavBar;
