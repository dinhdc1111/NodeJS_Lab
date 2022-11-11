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
export const updateProduct = async (req, res) => {
    const condition = {_id : req.params.id}
    const update = req.body;
    const options = {new : true} //defaut : options return False
    try {
        const product = await Product.findOneAndUpdate(condition, update, options).exec();
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({
            message: "Cập nhật sản phẩm thất bại"
        })
    }
}
export const removeProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete({_id: req.params.id}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Xóa sản phẩm thất bại"
        })
    }
}