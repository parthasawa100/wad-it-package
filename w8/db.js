import mongoose from "mongoose";

export const connectToDB = () => {
  mongoose.connect("mongodb://localhost:27017/music").then(() => {
    console.log("Connection sucess ");
  }).catch(err=> {
    console.log(err)
  })
}