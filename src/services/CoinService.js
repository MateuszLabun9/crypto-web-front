import axios from "axios";
import authHeader from "./AuthHeader";

const COIN_API_URL="http://localhost:8080/coin/";

class CoinService{

    getCoins(){
        return axios.get(COIN_API_URL, {headers: authHeader() });
    }

    getCoin(id){
        return axios.get(COIN_API_URL + id, {headers: authHeader() });
    }

}

export default new CoinService()