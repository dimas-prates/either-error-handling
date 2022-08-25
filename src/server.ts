import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'
import { ProductController } from './product/product.controller'

const port = process.env.PORT || 3000
const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.post('/product', new ProductController().create)
app.listen(port, () => { console.log(`Server's running. Port:${port}`) })

process.on('SIGINT', () => {
    console.log(`Server terminated`)
    app.listen().close()
})