const bodyParser = require('body-parser')
const express = require('express')
const errorhandler  =require('errorhandler')
const loggar = require('morgan')
let app = express()

let store = {}
store.account = []

app.use(bodyParser.json())

app.use(loggar('dev'))
app.use(errorhandler())

app.get('/accounts',(req,res)=>{
    res.status(200).send(store.account)
})

app.post('/accounts',(req,res)=>{
    let newAccount = req.body
    let id = store.account.length
    store.account.push(newAccount)
    res.status(201).send({id: id})
})


app.put('/accounts/:id',(req,res)=>{
    // let updateAccount = req.body
    // let updateID = updateAccount.id
    // store.account[req.params.id].put(updateAccount)
    // res.status(200).send({id:id})

    store.account[req.params.id] = req.body
    res.status(200).send(store.account[req.params.id])
})


app.delete('/accounts/:id',(req,res)=>{
    store.account.splice(req.params.id,1)
    res.status(204).send()
})

app.listen(3000)

console.log("server started at 3000")