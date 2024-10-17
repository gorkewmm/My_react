//  Promise
// let check = true;
// const promise1 = new Promise((resolve, reject)=>{
//         if(check){
//             resolve("Promise Başarılı")
//         }
//         else{
//             reject("Promise Başarısız")
//         }
// })
// console.log(promise1)

let check = true;
function createPromise(){
    return new Promise((resolve, reject)=>{
       if(check){
        resolve("Promise te sıkıntı yok")
       }
       else{
        reject("Sıkıntı büyük")
       }
    })
}
createPromise()
.then((response)=>{
    console.log(response)
})

.catch((error)=>{
    console.log(error)
})

.finally(()=>console.log("her zaman çalışır"))