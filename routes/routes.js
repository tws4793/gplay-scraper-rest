const router = (app) => {
    app.get('/', function (req, res) {
        res.send('Hello World')
    })

    app.get('/reviews', function (req, res) {
        const gplay = require('google-play-scraper')

        gplay.reviews({
            appId: req.query.id,
            lang: req.query.lang,
            page: req.query.page,
            throttle: 10,
        }).then((response) => {
            res.send(response)
        })
    })
}

module.exports = router