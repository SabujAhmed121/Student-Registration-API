const mongoose = require("mongoose");
const validator = require("validator");

const studentsSchema = new mongoose.Schema({
    name:{
        type : "string",
        required: "true",
        minlength: "3"
    },

email:{
    type : "string",
    required: "true",
    unique:(true, "email id already present"),
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Invalid Email")
        }
    }
},phone:{
    type : "number",
    required: "true"
    

},address:{
    type : "string",
    required: "true",
}

});

const Student = new mongoose.model("Student", studentsSchema);

module.exports = Student;