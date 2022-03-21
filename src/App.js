import MainPage from "./web/MainPage";
import Portfolio from "./web/Portfolio"
import News from "./web/News"
import Cryptox from "./web/Cryptox"
import Login from "./web/Login"
import CoinService from "./services/CoinService";
import {Box} from "@material-ui/core";
import NavBar from "./components/NavBar";
import {
    BrowserRouter as Router,
    Route, Routes
} from 'react-router-dom';
import Deposits from "./components/Deposit";
import React, {Component} from "react";
import {logout} from "./actions/auth";
import {clearMessage} from "./actions/message";
import { history } from './helpers/history';



// class App extends Component{
//     constructor(props) {
//         super(props);
//         this.logOut = this.logOut.bind(this);
//         this.state = {
//             showModeratorBoard: false,
//             showAdminBoard: false,
//             currentUser: undefined,
//         };
//         history.listen((location) => {
//             props.dispatch(clearMessage()); // clear message when changing location
//         });
//     }
//     componentDidMount() {
//         const user = this.props.user;
//         if (user) {
//             this.setState({
//                 currentUser: user,
//                 showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
//                 showAdminBoard: user.roles.includes("ROLE_ADMIN"),
//             });
//         }
//     }
//     logOut() {
//         this.props.dispatch(logout());
//     }
//     render() {
//         const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
//         return (
//             <Router history={history}>
//
//                     <Route path ="/main" exact element={<MainPage/>}></Route>
//                     <Route path ="/portfolio" exact element={<Portfolio/>}></Route>
//                     <Route path ="/news" exact element={<News/>}></Route>
//                     <Route path ="/login" exact element={<Login/>}></Route>
//                     <Route path ="/" exact element={<Cryptox/>}></Route>
//
//
//
//             </Router>
//         );
//
//     }
// }
//
// export default App
//



function App() {
  return (

      <React.Fragment>
      <NavBar/>
          <Routes history = {history}>
              <Route path ="/main" exact element={<MainPage/>}></Route>
              <Route path ="/portfolio" exact element={<Portfolio/>}></Route>
              <Route path ="/news" exact element={<News/>}></Route>
              <Route path ="/login" exact element={<Login/>}></Route>
              <Route path ="/" exact element={<Cryptox/>}></Route>

          </Routes>
      </React.Fragment>
  );
}

export default App;

