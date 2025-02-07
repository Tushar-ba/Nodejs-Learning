const express = require ('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Hellooooooo!!!! This is tushar ")
})

app.get('/products/:ID',(req,res)=>{
    const products = [
       {"id":"1",
         "Name":"Fan",
         "Description":"this is a fan"
       },
       {"id":"2",
        "Name":"Table",
        "Description":"this is a Table"
      },
      {"id":"3",
        "Name":"Desk",
        "Description":"this is a desk"
      }
    ]

    const fileter = req.params.ID;
    const getProduct = products.find((x)=>x.id === fileter);
    if(getProduct){
        res.json(getProduct)
    }else{
        res.json("Cannot find the product");
    }
})

const port = 3000
app.listen(port,()=>{
    console.log("This is port 3000")
})