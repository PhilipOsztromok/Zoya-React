import express from "express";
import cors from "cors";
import router from "./routes/api_router.js";
import config from './config/config.js';

const app = express();
app.use(express.json());
app.use(cors({
    origin: config.CORS_ORIGIN,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

const onListening =() => {
    console.log("Listening on port 5000");
}

app.use("/api", router);

app.listen(5000, onListening)

app.all('*', (req, res) => {
    res
    .status(404)
    .json({
        success: false,
        message: 'Route not found!',
    });
});