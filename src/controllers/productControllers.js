import Product from "../models/product"
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Product not found"
        })
    }
}
export const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOne({_id: id}).exec();
        res.status(200).json({product})
    } catch (error) {
        res.status(400).json({
            message: "Product not found"
        })
    }
}
export const addProduct = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message : "Can't add products"
        })
    }
}
export const updateProduct = (req, res) => {
    const id  = req.params.id;
    const product = req.body;
    // Find products in the array and update
    const newProducts = products.map((item) => (item.id == id ? product : item));
    // Find product in new array and return
    const currentProduct = newProducts.find(item => item.id == id);
    res.json(currentProduct)
}
export const removeProduct = (req, res) => {
    const id = req.params.id;
    res.json(products.filter(item => item.id != id))
}