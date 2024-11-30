const express = require("express");
const app = express();

const users = [{
    name : 'John',
    kidneys: [{
        healthy: false
    }]
}];
 
app.use(express.json());

app.get("/", function(req,res) {
    const JohnKidneys = users[0].kidneys;
    const NoOfKidneys = JohnKidneys.length;
    let NoOfHealthyKidneys = 0;
    for ( let i=0; i<JohnKidneys.length; i++ ) {
        if ( JohnKidneys[i].healthy) {
            NoOfHealthyKidneys = NoOfHealthyKidneys + 1;
        }
    }
    const NoOfUnhealthyKidneys = NoOfKidneys - NoOfHealthyKidneys;
    res.json({
        // JohnKidneys,
        NoOfKidneys,
        NoOfHealthyKidneys,
        NoOfUnhealthyKidneys
    })
    // console.log(JohnKidneys);
})

app.post("/", function (req,res) {
    // console.log(req.body);  
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put( "/", function(req,res) {
    for ( let i=0; i<users[0].kidneys.length; i++ ) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", function(req,res) {
    if ( isThereAtLeastOneUnhealthyKidney()) {
        const newKidneys = [];
        for ( let i=0; i<users[0].kidneys.length; i++ ) {
            if ( users[0].kidneys[i].healthy) {
                newKidneys.push({
                healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"})
    }
    else {
        res.status(411).json({
            msg: "No unhealthy kidneys to delete!"
        })
    }
}) 

app.listen(3000);

function isThereAtLeastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for ( let i=0; i<users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy === false) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

// const express = require("express");
// // const bodyParser = require("body-parser");
// const app = express();
// const port = 3000;
// // app.use(bodyParser.json());
// function sum(n) {
//     let a = 0;
//     for ( let i=0; i<n; i++ ) {
//         a += i;
//     }
//     return a;
// }
// app.get('/', (req, res) => {
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send('hi your answer is '+ans);
//     // console.log(req.body);
//     // res.send('Hello Multiverse!')
// })
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })

// // app.get("/route-handler", function(req, res) {
// //     res.json({
// //         name: 'Vasudev',
// //         age:19
// //     })
// // })