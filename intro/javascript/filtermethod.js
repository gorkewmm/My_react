/*
JavaScript'teki Array.prototype.filter metodu, iki parametre alabilen bir callback fonksiyonunu kabul eder. 
Bu iki parametre sırasıyla şu şekilde tanımlanır:

İlk Parametre: Dizinin mevcut elemanını temsil eder.
İkinci Parametre: Dizinin mevcut elemanının indeksini temsil eder. */

// const numbers = [10, 20, 30, 40];

// const method = numbers.filter((n,i)=>i!==0)
// console.log(method)


const languages = ["JavaScript", "Python", "Ruby", "C", "C++", "Swift", "PHP", "Java"];
const method =languages.filter((s,i)=>s.toLowerCase().includes("ub".toLowerCase()))
console.log(method) /* ['Ruby'] */
