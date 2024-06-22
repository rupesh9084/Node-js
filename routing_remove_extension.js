let express=require('express')
let path=require('path')
let app=express()
let directory=path.join(__dirname,"files2")



app.set('view engine','ejs')
app.get("/",(req,res)=>{
    res.sendFile(`${directory}/index.html`)
})
app.get("/profile",(req,res)=>{
    let data={
        name:"rupesh gupta",
        course:"mca",
        roll_no:2300290140150,
        email:"rupeshgupta00001@gmail.com",
        skills:["c","html","css","javascript","react","node-js"]
    }
    res.render('profile',{data})
})
app.get("/mobile",(req,res)=>{
    res.sendFile(`${directory}/contact.html`)
})
app.get("/about",(req,res)=>{
    res.sendFile(`${directory}/about.html`)
})
app.get("*",(req,res)=>{
    res.sendFile(`${directory}/error.html`)
})

app.listen(5000)



