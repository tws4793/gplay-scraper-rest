const gplay = require('google-play-scraper')
const store = require('app-store-scraper')

const router = (app) => {
    app.get('/', (req, res) => {
        res.send('Hello World')
    })

    app.get('/play/reviews', (req, res) => {
        gplay.reviews({
            appId: req.query.id,
            lang: req.query.lang,
            page: req.query.page,
            throttle: 10,
        }).then(response => {
            res.send(response)
        })
    })

    app.get('/appstore/reviews', (req, res) => {
        store.reviews({
            appId: req.query.id,
            country: req.query.country,
            page: req.query.page,
        }).then(response => {
            res.send(response)
        })
    })
}

module.exports = router