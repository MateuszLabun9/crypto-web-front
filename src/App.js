import MainPage from "./web/MainPage";
import Portfolio from "./web/Portfolio"
import News from "./web/News"
import Cryptox from "./web/Cryptox"
import Login from "./web/Login"
import CoinService from "./services/CoinService";
import {Box} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Route, Routes
} from 'react-router-dom';
import Deposits from "./components/Deposit";


function App() {
  return (


          <Routes>
              <Route path ="/main" exact element={<MainPage/>}></Route>
              <Route path ="/portfolio" exact element={<Portfolio/>}></Route>
              <Route path ="/news" exact element={<News/>}></Route>
              <Route path ="/login" exact element={<Login/>}></Route>
              <Route path ="/" exact element={<Cryptox/>}></Route>

          </Routes>

  );
}

export default App;

