import { Router } from "express";
import { ProductController } from "./product/product.controller";

const router = Router()
router.post('/products', new ProductController().create)

export default router