import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import bodyParser from 'body-parser';

import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import hotelRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'

import cookieParser from 'cookie-parser'
import cors from 'cors'


const app = express()
dotenv.config()

app.use(bodyParser.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies
app.use(cors())

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error
  }
}

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
})

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
})


// MIDDLEWARES

app.use(cookieParser());
app.use(express.json())


app.use("/api/auth", authRoute);
app.use('/api/users', userRoute);
app.use('/api/hotels', hotelRoute);
app.use('/api/rooms', roomsRoute);

app.use((error, req, res, next) => {

  const errorStatus = error.status || 500
  const errorMessage = error.message || 'Something is broken from our end';

  return res.status(errorStatus).json(errorMessage)
})

app.listen(5000, () => {
  connect()
  console.log("Connected on port 5000");
})