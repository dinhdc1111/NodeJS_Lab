import { Router } from "express";
import { addProduct, getAllProducts, getProduct, removeProduct, updateProduct } from "../controllers/productControllers";
const router = Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);
router.post("/products", addProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", removeProduct);

export default router;