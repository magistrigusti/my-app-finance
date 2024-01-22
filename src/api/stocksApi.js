import axios from 'axios';

const API_KEY = 'ck2ek1pr01qhd6ti9mn0ck2ek1pr01qhd6ti9mng';
const BASE_URL = 'https://finnhub.io/api/v1/';

const stocksApi = {
  getStocks: async () => {
    const response = await axios.get(`${BASE_URL}stock/symbol?exchange=US&token=${API_KEY}`);

    return response.data;
  }
}

export default stocksApi;