var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/demoDb');
var mongoSchema =   mongoose.Schema;
var userSchema  = {
    "deviceid": Number,
    "temperature": String,
    "humidity": String,
    "light": String,
    "pressure": String,
    "gas": String,
    "gas_raw": String,
    "peopleCount": String
};
module.exports = mongoose.model('userLogin',userSchema);;
