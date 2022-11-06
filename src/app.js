import express from "express";

const app = express();
app.use(express.json())
    const products = [
        {id: 1, name: "Product 1", price : 2000},
        {id: 2, name: "Product 2", price : 2000},
    ];
// Products list
app.get("/products", (req, res) => {
    res.json(products)
})
// Product detail
app.get("/products/:id", (req, res) => {
    try {
        const id = req.params.id;
        const product = products.find(item => item.id == id);
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Product not found"
        })
    }
})
// Product add
app.post("/products", (req, res) => {
    try {
        const product = req.body;
        products.push(product);
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message : "Can't add products"
        })
    }
});
// Product update
app.put("/products/:id", (req, res) => {
    const id  = req.params.id;
    const product = req.body;
    // Find products in the array and update
    const newProducts = products.map((item) => (item.id == id ? product : item));
    // Find product in new array and return
    const currentProduct = newProducts.find(item => item.id == id);
    res.json(currentProduct)
});
// Product delete
app.delete("/products/:id", (req, res) => {
    const id = req.params.id;
    res.json(products.filter(item => item.id != id))
})
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});