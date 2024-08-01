import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { dbConnection } from "./database/dbConnection.js"
import errorMiddleware from "./error/error.js"
import reservationRoute from "./routes/reservationRoute.js"
dotenv.config({path:"./config/config.env"})
const app = express()
app.use(cors({
    origin:[process.env.FRONTEND_URL,"http://localhost:5173"],
    methods:['POST'],
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/v1/reservation',reservationRoute)

app.use(errorMiddleware);

dbConnection();
export default app