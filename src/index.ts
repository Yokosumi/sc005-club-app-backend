import express from 'express'
import cors from 'cors'
import { MemberType } from '../types'

const app = express()
const port = 3311

app.use(cors())

const members: MemberType[] = [
    {
        id: 1,
        name: 'Robert Hammerschmidt',
    },
    {
        id: 2,
        name: 'Angela Wasserturm',
    },
]

app.get('/members', (req, res) => {
    res.json(members)
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

console.log(`typescript backend is running`)
