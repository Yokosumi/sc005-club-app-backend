import express from 'express'
import cors from 'cors'
import { MemberType } from '../types'

const app = express()
const port = 3311

app.use(cors())

const members: MemberType[] = [
    {
        id: 'iwj33j',
        name: 'Robert Hammerschmidt',
    },
    {
        id: 'daj23m',
        name: 'Angela Wasserturm',
    },
]

app.get('/members', (req, res) => {
    res.json(members)
})

app.post('/members', (req, res) => {
    res.status(201).json(req.body)
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

console.log(`typescript backend is running`)
