import { Router } from "express";
const router = Router();
const products = [
    {id: 1, name: "Product 1", price : 2000},
    {id: 2, name: "Product 2", price : 2000},
];
// Products list
router.get("/products", (req, res) => {
    res.json(products)
})
// Product detail
router.get("/products/:id", (req, res) => {
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
router.post("/products", (req, res) => {
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
router.put("/products/:id", (req, res) => {
    const id  = req.params.id;
    const product = req.body;
    // Find products in the array and update
    const newProducts = products.map((item) => (item.id == id ? product : item));
    // Find product in new array and return
    const currentProduct = newProducts.find(item => item.id == id);
    res.json(currentProduct)
});
// Product delete
router.delete("/products/:id", (req, res) => {
    const id = req.params.id;
    res.json(products.filter(item => item.id != id))
})
export default router;