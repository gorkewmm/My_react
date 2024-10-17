
// async function hello() {
//     return "hello world"
// }

// hello()
// .then((data)=>console.log(data))

// document.querySelector("#btn").addEventListener("click",()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response)=>{
//         return response.json()
//     })

//     .then((data)=>console.log(data))

// })

// document.querySelector("#btn").addEventListener("click", () => {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((data) => {
//       fetch(`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`)
//         .then((response) => response.json())
//         .then((taken) => console.log(taken));
//     });
// });

// ASYNC AWAIT
// Aynı örneğin ASYNC AWAİT ile yapılışı
// document.querySelector("#btn").addEventListener("click", async() => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const data = await response.json() 
//     const comments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`)
//     const taken = await comments.json()
//     console.log(data,taken);

// });

  
// ASYNC AWAIT
// Yukaridaki kodun daha kısa hali
document.querySelector("#btn").addEventListener("click", async() => {
    const response = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${response.id}`)).json()
    console.log(response,comments);

});

