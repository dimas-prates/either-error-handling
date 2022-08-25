import { randomUUID } from "crypto"

type ProductRequest = {
    barCode: string
    price: number
    quantity: number
    name: string
}

type ProductResponse = ProductRequest & {
    id: string
}

export class CreateProductUseCase {
    async execute(data: ProductRequest): Promise<ProductResponse> {
        if (!data.barCode) {
            throw new Error(`Código de barras é obrigatório`)
        }
        return {
            ...data,
            id: randomUUID()
        }
    }
}