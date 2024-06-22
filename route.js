let express=require('express')
let app=express()
let path=require('path')
let directory=path.join(__dirname,"files2")

app.use(express.static(directory))
app.listen(5000)