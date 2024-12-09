const express = require("express");
const zod = require("zod");
const app = express();
function validateInput(obj) {
    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8).max(32)
    })
    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email : "xxxxxxxx@gmail.com",
    password : "XX100XXXX"
});

// app.post("/login", function(req,res) {
//     const response = validateInput(req.body)
//     if ( !response.success ) {
//         res.join({
//             msg : "Your inputs are invalid"
//         })
//         return;
//     }
// })
// app.listen(3000);

app.use( function(err,req,res,next) {
    res.status(500).send({ msg: err.message });
})
