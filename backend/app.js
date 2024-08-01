import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { dbConnection } from "./database/dbConnection.js"
import errorMiddleware from "./error/error.js"
import reservationRoute from "./routes/reservationRoute.js"
dotenv.config({path:"./config/config.env"})
const app = express()
// CORS configuration
const corsOptions = {
    origin: [process.env.FRONTEND_URL, "http://localhost:5173"],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/v1/reservation',reservationRoute)

app.use(errorMiddleware);

dbConnection();
// Handle preflight requests
app.options('*', cors(corsOptions));
export default app