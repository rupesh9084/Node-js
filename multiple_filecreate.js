
let fs=require('fs')
let path=require('path')
let directory=path.join(__dirname,"files")

for(i=0;i<5;i++){
    fs.writeFileSync(directory+"/hello"+i+".txt","a simple text");
}
// fs.readdir(directory,(err,files)=>{
//     files.forEach((value)=>{
//         console.log("file name is ",value)
//     })
// })