import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { userRouter } from './src/user/user.controller.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(cors({ origin: 'http://localhost:5173' }))

app.use(express.json())

app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log(`API running in port ${PORT}`)
})