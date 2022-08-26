import { randomUUID } from "crypto"
import { Either, left, right } from "../errors/either"
import { RequiredParamsError } from '../errors/required-params-error'

type ProductRequest = {
    barCode: string
    price: number
    quantity: number
    name: string
}

type ProductResponse = ProductRequest & {
    id: string
}

type Response = Either<RequiredParamsError, ProductResponse>;

export class CreateProductUseCase {
    async handle(data: ProductRequest): Promise<Response> {
        if (!data.barCode) {
            // throw new Error(`Código de barras é obrigatório`)
            // trow new RequiredParamsError(`Código de barras é obrigatório`, 400)
            return left(new RequiredParamsError(`Código de barras é obrigatório`, 400))
        }
        return right({
            ...data,
            id: randomUUID()
        });
    }
}