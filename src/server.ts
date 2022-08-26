import express from 'express'
import morgan from 'morgan'
import 'dotenv/config'
import router from './routes'

const port = process.env.PORT || 3000
const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(router)
app.listen(port, () => { console.log(`Server's running. Port:${port}`) })

process.on('SIGINT', () => {
    console.log(`Server terminated`)
    app.listen().close()
})