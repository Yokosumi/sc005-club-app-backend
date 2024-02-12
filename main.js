import express from 'express'
import cors from 'cors'

const app = express()
const port = 3311

app.use(cors())

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})
