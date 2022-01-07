const router= require('express').Router();
const player = require('../model/player')

//GET PLAYER INFO
router.get('/playerinfo', async (req, res) => {
    player.find().then(foundPlayers => res.json(foundPlayers))
})

module.exports = router;