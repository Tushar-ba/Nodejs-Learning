// setInterval(()=>{
//     for(i=0; i<11;i++){
//         console.log(i)
//     }
// },1000);
// setTimeout(()=>{
//     console.log("counting done")
// },10000)


let i = 1;
const intervalId = setInterval(() => {
    console.log(i);
    if (i >= 10) {
        clearInterval(intervalId);
        console.log("counting done");
    }
    i++;
}, 1000);


