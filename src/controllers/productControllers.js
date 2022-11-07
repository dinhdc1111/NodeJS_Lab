// fake data
const products = [
    {id: 1, name: "Product 1", price : 2000},
    {id: 2, name: "Product 2", price : 2000},
];
export const getAllProducts = (req, res) => {
    res.json(products)
}
export const getProduct = (req, res) => {
    try {
        const id = req.params.id;
        const product = products.find(item => item.id == id);
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Product not found"
        })
    }
}
export const addProduct = (req, res) => {
    try {
        const product = req.body;
        products.push(product);
        res.json(product);
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