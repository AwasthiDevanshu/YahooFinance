const axios = require("axios").default;
const config = require("../constant/config");
getAnalysis = async function (symbol) {
    var options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis',
        params: { symbol: symbol, region: 'US' },
        headers: {
            'x-rapidapi-key': config.APIKEY,
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };
    let response = await axios.request(options)
    return response.data
}

getNews = async function (symbol) {

    var options = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete',
        params: { q: symbol, region: 'US' },
        headers: {
            'x-rapidapi-key': config.APIKEY,
            'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };

    let response = await axios.request(options)
    return response.data
}
module.exports.getNews = getNews;
module.exports.getAnalysis = getAnalysis;