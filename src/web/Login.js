import * as React from 'react';
import {Component} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import {login} from "../actions/auth";
import {connect} from "react-redux";
import {Navigate} from 'react-router-dom';
import {history} from '../helpers/history';

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Cryptox
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();


class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.state = {
            username: "",
            password: "",
            loading: false,
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleLogin(e) {

        e.preventDefault();
        this.setState({
            loading: true,
        });
        this.form.validateAll();
        const {dispatch} = this.props;
        if (this.checkBtn.context._errors.length === 0) {
            dispatch(login(this.state.username, this.state.password))
                .then(() => {
                    history.push("/main");
                    window.location.reload();
                }).catch(() => {
                this.setState({
                    loading: false,
                });
            });
        } else {
            this.setState({
                loading: false,

            });
        }
    }

    componentDidMount() {
        const {isLoggedIn, message} = this.props;
        if (isLoggedIn) {
            console.log("siema3223")
            return <Navigate to="/main"/>;
        }
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{height: '100vh'}}>
                    <CssBaseline/>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(http://localhost:3000/img/background.jpg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                                <LockOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Form onSubmit={this.handleLogin} ref={(c) => {
                                this.form = c;
                            }}>
                                <Box sx={{mt: 1}}>
                                    <TextField
                                        value={this.state.username}
                                        onChange={this.onChangeUsername}
                                        validations={[required]}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                        validations={[required]}
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary"/>}
                                        label="Remember me"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{mt: 3, mb: 2}}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="#" variant="body2">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Copyright sx={{mt: 5}}/>

                                    <CheckButton
                                        style={{display: "none"}}
                                        ref={c => {
                                            this.checkBtn = c;
                                        }}
                                    />

                                </Box>
                            </Form>
                        </Box>
                    </Grid>
                </Grid>
                <a href='https://www.freepik.com/vectors/abstract'>Abstract vector created by starline -
                    www.freepik.com</a>
            </ThemeProvider>

        );


    }

}

function mapStateToProps(state) {
    const {isLoggedIn} = state.auth;
    const {message} = state.message;
    return {
        isLoggedIn,
        message
    };
}

export default connect(mapStateToProps)(Login);