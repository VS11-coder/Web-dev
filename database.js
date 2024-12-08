const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://vasudevsarraf11:Va100sa1@cluster0.ooh1h.mongodb.net/User");
const User = mongoose.model('Client', { name: String, email: String, password: String});
const user = new User({
    name : 'Vasudev Sarraf',
    email : 'vasudevsarraf11@gmail.com',
    password : 'VS1100'
});
user.save();
