import express from "express";

const app = express();
    const products = [
        {id: 1, name: "Product 1", price : 2000},
        {id: 2, name: "Product 2", price : 2000},
    ];
app.get("/", (req, res) => {
    res.json(products)
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});