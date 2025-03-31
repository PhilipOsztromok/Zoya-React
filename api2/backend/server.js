import express from "express";
import cors from "cors";
import router from "./routes/api_router.js";

const app = express();
app.use(express.json());
app.use(cors());

const onListening =() => {
    console.log("Listening on port 5000");
}

app.use("/api", router);

app.listen(5000, onListening)