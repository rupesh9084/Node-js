let express=require('express')
let app=express();

const reqFilter=(req,resp,next)=>{
  if(!req.query.age){
    resp.send("please provide age")       //middleware use it ia a use to perform os some operation on routes
  }
     else if(req.query.age<18){
      resp.send("you cannto acces page")
     }
     else{
      next()
     }
}

// app.use(reqFilter)  application leavel middleware
app.get('',(req,res)=>{

res.send(`<h1>this is a home page </h1><a href="/about">go to about </a> ${req.query.name}`)
})
app.get('/about',(req,res)=>{
res.send(`<h1>this is a about page</h1> <a href="/contact">go to contact page </a>`)
})
app.get('/contact',reqFilter,(req,res)=>{
    res.send(`<h1>this is a contact from</h1> <a href="/input">go to input page </a>`)
})
app.get('/input',reqFilter,(req,res)=>{          //routes leavel middleware
  res.send(`<input type="text" placeholder="user name"/>    
    <button>click me</button>
     <a href="/api">go to api page </a> `)
})
app.get('/api',(req,res)=>{
  res.send(`[{name:"rupesh gupta",course:"mca"},
    {name:"atul gupta",course:"mba"},
    {name:"keerti gupta",course:"mba"},
    {name:"love gupta",course:"btech"},
    {name:"harsh gupta",course:"mtech"},
    ] <a href="/">go to home page </a>`
  )
})
app.get('*',(req,res)=>{
res.send(`<h1>oops 404 error found </h1> <a href="/">go to home page </a>`)
})




app.listen(5000)