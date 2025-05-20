import mongoose from "mongoose";
import userModel from "./userModel.js";

const schema = mongoose.Schema ({
    title:{type:String, required:true},
    description:{type:String, required:true},
    completed:{type:Boolean, default: false},
    duedate:{type:Date, required:true},
    owner:{type:mongoose.Schema.Types.ObjectId, ref:"usercollection"},
})

const taskModel = mongoose.model("taskModel", schema);

export default taskModel;