let fs=require('fs')
let path=require('path')
let directory=path.join(__dirname,"crud")

let file_path=`${directory}/apple.txt`;


// fs.writeFileSync(file_path,`this is a simple text file`)
// fs.readFile(file_path,"utf8",(err,item)=>{
//     console.log(item)
// })
// fs.appendFile(file_path,`and apple is the always healthy fruits `,(err)=>{
//     if(!err){
//         console.log("file is updated")
//     }
// })
// fs.rename(file_path,`${directory}/fruits.txt`,(err)=>{
//     if(!err){
//         console.log("file name is updated")
//     }
// })
fs.unlinkSync(`${directory}/fruits.txt`)