import express from "express";
import morgan from "morgan";
import homeRoute from "./router/homeRoute";
import productsRoute from "./router/productsRoute"
const app = express();
app.use(express.json());
app.use(morgan("tiny"));
    
//router
app.use(homeRoute);
app.use("/api",productsRoute);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});