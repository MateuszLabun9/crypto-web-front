import axios from "axios";
import authHeader from "./AuthHeader";

const HOLDINGS_API_URL="http://localhost:8080/holdings/";

class HoldingsService {


    getHoldings(){
        return axios.get(HOLDINGS_API_URL, {headers: authHeader() });
    }

    getHolding(id){
        return axios.get(HOLDINGS_API_URL + id, {headers: authHeader() });
    }
}
export default new HoldingsService()