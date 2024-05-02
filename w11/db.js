import mongoose from 'mongoose';

const url = "mongodb://localhost:27017/student"


const connectToDB = () => {
  mongoose.connect(url)
  .then(() => {
    console.log('Database connection successfully')
  }).catch(err => {
    console.log('Error while connecting to DB')
    console.log(err)
  })
}

export {connectToDB}