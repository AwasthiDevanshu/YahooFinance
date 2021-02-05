const router = require('express').Router();
const yahooApi = require('./api/yahooApi');
// Add this after the middleware part

router.get('/getAnalysis', async function (req, res, next) {
    // console.log(req.query);
    // var response = await yahooApi.getAnalysis("AMRN");
    var response = await yahooApi.getAnalysis(req.query.symbol);

    res.status(200).send(response);
});
router.post('/getAnalysis', async function (req, res, next) {
    console.log(req.query);
    // var response = await yahooApi.getAnalysis("AMRN");
    var response = await yahooApi.getAnalysis(req.body.symbol);

    res.status(200).send(response);
});
router.post('/getNews',async function (req, res, next) {
    var response = await yahooApi.getNews(req.body.symbol);

    res.status(200).send(response);
});
module.exports = router;