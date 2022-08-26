import { Request, Response } from "express";
import { CreateProductUseCase } from "./create-product.useCase";

export class ProductController {
    async create(req: Request, res: Response) {
        const { body } = req
        const createProductUseCase = new CreateProductUseCase()
        const result = await createProductUseCase.handle(body)

        if (result.isLeft()) {
            return res.status(result.value.statusCode).json(result.value.message)
        }
        return res.json(result.value)
    }
}