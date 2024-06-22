let input=process.argv;
let file=require("fs")
if(input[2]=="add"){
    file.writeFileSync(input[3],input[4])
}else if(input[2]=="remove"){
    file.unlinkSync(input[3])
}else{
    console.log("invalid choice")
}