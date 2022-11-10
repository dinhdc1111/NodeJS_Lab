import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import homeRoute from "./router/homeRoute";
import productsRoute from "./router/productsRoute"
const app = express();
app.use(express.json());
app.use(morgan("tiny"));
    
//router
app.use(homeRoute);
app.use("/api",productsRoute);
// connection DB
mongoose.connect('mongodb://localhost:27017/we17201')
    .then(() => console.log("Kết nối database thành công"))
    .catch(error => console.log(error))
//connect
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});