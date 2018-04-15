const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use((req,res,next)=>{
    console.log(`${req.method}: ${req.url} `)
    next()
})


app.use((req,res,next)=>{
    if(req.query.api_key){//Here we have to check a database call and actually check for that value but let keep it simple here
        next()
    }
    else{
        res.status(401).send({msg:'Not authorized'})
    }
})


app.get('/',(req,res)=>{
    // res.send('hello world')
    // res.send({"msg":'hello world'})
    res.send({msg:'hello world'})
    // res.end('hello world')
})


app.get('/accounts',(req,res,next)=>{
    console.log('account inline middleware')
    next( new Error('opps'))//this error define will skip everything and will go to error handler
},(req,res)=>{
    res.send({msg:'accounts'})
})

app.get('/transactions',(req,res)=>{
    console.log(req.body)
    res.send({msg:'transactions'})
})

app.post('/transactions',(req,res)=>{
    console.log(req.body)
    res.send({msg:'post transactions'})
})

app.use((error,req,res,next)=>{
    res.status(500).send(error)
})
app.listen(3000)