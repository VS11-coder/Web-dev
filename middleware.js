const express = require("express");
const app = express();
app.get("/health-checkup", function(req,res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    if ( username != 'Vasudev' || password != "pass" ) {
        res.status(400).send("Unauthorized");
        return
    }

    if ( kidneyId != 1 && kidneyId != 2 ) {
        res.status(400).send("Invalid Kidney ID");
        return
    }
    res.json({
            msg : "Your kidney is fine!"
        })
});
app.listen(3000);