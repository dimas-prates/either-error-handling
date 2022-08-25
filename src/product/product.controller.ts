import { Request, Response } from "express";
import { request } from "http";
import { CreateProductUseCase } from "./create-product.useCase";
export class ProductController {
    async create(req: Request, res: Response) {

        const { body } = req
        const createProductUseCase = new CreateProductUseCase()
        const result = await createProductUseCase.execute(body)
        return res.json(result)
    }
}