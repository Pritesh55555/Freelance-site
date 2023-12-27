import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },

    avatar : {
        type : String,
        default : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    password : {
        type : String,
        required : true,
       
    }
},{timestamps : true});

const User = mongoose.model('User',userschema);

export default User;