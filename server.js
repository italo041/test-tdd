const express = require('express')
const app = express()
const axios = require("axios")
const { users } = require("./endpoints")
const port = 3000

app.use(express.json())

const usersHandlers = users({ axios });

app.get('/', usersHandlers.get)

app.post('/', async (req, res) => {
    const data = await axios.post('https://jsonplaceholder.typicode.com/users', req.body) 
    res.status(201).json(data.data)
}) 

app.put('/:id', async (req, res) => {
    const { id } = req.params;
    const data = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, req.body) 
    res.status(204).json(data.data)
}) 

app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`) 
    res.status(204).json(data.data)
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})