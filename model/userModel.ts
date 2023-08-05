import mongoose from "mongoose"

interface iUser{
    email?:string;
    userName?:string;
    password?:string;
    friends?:Array<string>;
}


interface iUserData extends iUser,mongoose.Document{

}

const userModel = new mongoose.Schema({
    userName:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    friend:{
        type: Array<String>,
    },
},{timestamps:true})

export default mongoose.model<iUserData>("user",userModel)