import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())



import BookRouter from "./routes/book.route.js"

app.use("/book", BookRouter)
export {app}