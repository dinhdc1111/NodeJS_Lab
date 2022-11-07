import { Router } from "express";
import { addProduct, getAllProducts, getProduct, removeProduct, updateProduct } from "../controllers/productControllers";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);
router.post("/products", addProduct);
router.put("/products/:id/:userId",checkAuth, updateProduct);
router.delete("/products/:id", removeProduct);

export default router;