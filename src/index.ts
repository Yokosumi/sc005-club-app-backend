import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { MemberType } from '../types'

const app = express()
const port = 3311

app.use(cors())
app.use(bodyParser.json())

const members: MemberType[] = [
    {
        id: 'iwj33j',
        name: 'Robert Hammerschmidt',
        age: 55,
    },
    {
        id: 'daj23m',
        name: 'Angela Wasserturm',
        age: 34,
    },
]

app.get('/members', (req, res) => {
    res.json(members)
})

app.post('/members', (req, res) => {
    const newMember: MemberType = req.body
    if (!newMember.id || !newMember.name || typeof newMember.age !== 'number') {
        return res.status(400).json({error: 'Invalid member data'})
    }
    const duplicateMember = members.find(member => member.id === newMember.id)
    if (duplicateMember) {
        return res.status(409).json({ error: 'Member with this ID already exists'})
    }
    members.push(newMember)
    res.status(201).json(req.body)
})



app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

console.log(`typescript backend is running`)
