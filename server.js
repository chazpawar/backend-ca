const express = require("express")
const app = express();
const port = process.env.PORT || 3000 ; 

app.get('/',(req,res)=>{
    res.send("server is running ")
})

app.listen(port, ()=>{
    console.log(`server  is running on the ${port}`)
})

const user = [
    {usename :"monkey", age: 100, email : "monkeyloverboy@gmail.com"  },
    {usename :"monkey", age: 100, email : "monkeyloverboy@gmail.com"},
    {usename :"monkey", age: 100, email : "monkeyloverboy@gmail.com"}

]


app.get("/user", (req,res)=>{
    const  {username}= req.body;
    if (!username){
        return res.status(400).josn({message:"user parameters cnanot be empty monkey "})
    }
    const user= user.find(u=> u.username.toLowerCase()=== username.toLowerCase())

    if (user){
        return res.josn({message:"user found monky ",data: user})
    }else{
        return res.status(404).json({message: "user not found monkey"})
    }
})