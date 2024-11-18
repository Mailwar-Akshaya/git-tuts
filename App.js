const Amount=12;
if(Amount<10){
    console.log("Small Amount")
}
else{
    console.log("big Amount")
}
console.log("Hello!!")

//global variables
// console.log(__dirname)
// console.log(__filename)
// console.log(require)
// console.log(module);
// console.log(process)

//built in function
setInterval(()=>{
    console.log("hello")
},3000);
setTimeout(()=>{
    console.log("hi!!");
},5000)

//Arrow function
const Surname="Mailwar"
const name="Akshaya";
const ArrowFunction=(hello)=>{
    console.log(`${hello}`)
}
ArrowFunction(Surname);
ArrowFunction(name);

