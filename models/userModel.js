import mongoose from "mongoose";

const schema = mongoose.Schema ({
    username:String,
    email:String,
    password:String,
});

const userModel = mongoose.model("usercollection", schema);

export default userModel;