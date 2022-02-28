import axios from "axios";

const HOLDINGS_API_URL="http://localhost:8080/holdings/";

class HoldingsService {


    getHoldings(){
        return axios.get(HOLDINGS_API_URL);
    }

    getHolding(id){
        return axios.get(HOLDINGS_API_URL + id);
    }
}
export default new HoldingsService()