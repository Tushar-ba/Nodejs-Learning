
function after2Seconds(time){
    return new Promise ((resolve)=>{
        setTimeout(resolve,time)
    })
}

console.log("First");
after2Seconds(10000).then(()=>{
    console.log("Finished executing the promise")
}).catch((err)=>{
    console.log(err);
});