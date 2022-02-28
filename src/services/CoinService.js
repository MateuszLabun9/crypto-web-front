import axios from "axios";

const COIN_API_URL="http://localhost:8080/coin/";

class CoinService{

    getCoins(){
        return axios.get(COIN_API_URL);
    }

    getCoin(id){
        return axios.get(COIN_API_URL + id);
    }

}

export default new CoinService()