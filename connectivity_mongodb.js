// let {MongoClient}=require('mongodb')
// let database='e-commerce'
// let url ='mongodb://localhost:27017';
// let client= new MongoClient(url);

// let getdata=async()=>{
//     let result=await client.connect()
//   let db=result.db(database)
//   let collection=db.collection('products')
//   let resp=await collection.find({}).toArray()
//   console.log(resp)
// }

// getdata()




let {MongoClient}=require('mongodb');
let url='mongodb://localhost:27017'
let database='e-commerce'
let client=new MongoClient(url)
  

const getdata=async()=>{
     let result=await client.connect()
let db=result.db(database)
let collection=db.collection('products')
let response= await collection.find({}).toArray()
console.log(response)

}
getdata()