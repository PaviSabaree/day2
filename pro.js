var x= new Promise((resolve,reject)=>{
    resolve("testing");
});
x.then(x=>console.log("then",x))
.catch(x=>console.log("error",x))
.finally(()=>console.log("finally"));