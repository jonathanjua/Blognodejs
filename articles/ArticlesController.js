const express = require('express');
const router = express.Router();

router.get("/articles", (req, res) => {
    res.send("Listagem de artigos");
})

module.exports = router;