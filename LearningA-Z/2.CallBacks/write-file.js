const fs = require('fs');

fs.readFile('input.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data);

    const modifyData = data.toUpperCase();
    fs.writeFile('output.txt',modifyData,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Written data");
    })
})