const express = requires('express')
const mongoose = requires('mongoose')
const cors = requires('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://adithyen:adhii@123@cluster0.5z4mm.mongodb.net/')

app.post('/add',(req, res =>{
    const task = req.body.task
    TodoModel.create((
        task: task
    )).then(result => res.json(result))
    .catch(err => res.json(err))
}))
app.listen(3001,()=>{
    console.log('server is running on p')

    })