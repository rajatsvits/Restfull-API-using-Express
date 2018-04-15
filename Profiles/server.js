const express = require('express')
const app = express()
const bodyParser= require('body-parser')

app.use(bodyParser.json())

let profile = [{
    username:'rajat',
    email:'[reducted]',
    url:'https://github.com/rajatsvits'

}]
app.get('/profile',(req,res)=>{
    if(req.query.id) return res.send(req.query.id)
    res.send(profile)
})

app.post('/profile',(req,res)=>{
    // profile = req.body//if one object is present
    if(!(req.body.first_name.trim()&&req.body.last_name.trim()))
        return res.sendStatus(400)
    //What if we have more data
    //trim is a javascript function which removes white spaces as hacker can hack in 
    let obj ={
        first_name:req.body.first_name,
        last_name:req.body.last_name
    }
    //Instead of defining your owm validator use express validator
    profile.push(obj)
    // profile.push(req.body)
    console.log('\n created \n',profile)
    res.sendStatus(201)
})

// app.put('/profile',(req,res)=>{
app.put('/profile/:id',(req,res)=>{
    // object.assign(profile,req,body)
    Object.assign(profile[req.params.id],req.body)
    // console.log('\n updated \n',profile)
    console.log('\n updated \n',profile[req.params.id])
    
    res.sendStatus(204)
})

// app.delete('/profile',(req,res)=>{
app.delete('/profile/:id',(req,res)=>{
    // profile={}
    // profile[req.params.id]={} we can also use splice here
    profile.splice(req.params.id,1/*number of element deleted*/)
    // console.log('\n deleted \n',profile)
    console.log('\n deleted \n',profile)
    res.sendStatus(204)
})
app.listen(3000)

console.log('server is listing to port 3000')