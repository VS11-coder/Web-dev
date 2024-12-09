const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://vasudevsarraf11:Va100sa1@cluster0.ooh1h.mongodb.net/User");
const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post("/signup", async function(req,res) {
  const name = req.body.name;
  const username = req.body.username;
  const password = req.body.password;
  const existingUser = await User.findOne({email:username});
  if ( existingUser ) {
    return res.status(400).send("Username already exists");
  }
  await User.create({ name, email:username, password});
  // const user = new User({
  //   name : name,
  //   email : username,
  //   password : password
  // });
  // user.save();
  res.send({
    "msg" : "User created successfully"
  })
})

app.listen(3000, function() {
  console.log("Server is running on port 3000");
})







// const upiTransactionSchema = new mongoose.Schema({
//   amount: { type: Number, required: true },
//   upiId: { type: String, required: true },
//   orderId: { type: String, required: true },
//   status: { type: String, required: true, default: 'initiated' },
//   createdAt: { type: Date, default: Date.now },
// });
// const UpiTransaction = mongoose.model('UpiTransaction', upiTransactionSchema);
// module.exports = {
//   User,
//   UpiTransaction,
// };


