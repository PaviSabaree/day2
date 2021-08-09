async function myFn(){
    return new Promise((resolve, reject)=> setTimeout(()=>{
        resolve("success")
    },1000))
}
async function awaitFn(){
    myFn().then(console.log);
}
awaitFn()