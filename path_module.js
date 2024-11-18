const path=require("node:path")
const baseName=path.basename("module/filename/Akshaya.html")
const dirName=path.dirname("module/filename/Akshaya.html")
const extlName=path.extname("module/filename/Akshaya.html");
console.log(process.env.path);
process.env.path.split(path.delimiter);
const format=path.format(
    {
        dir:"module/filename/Akshaya.html",
        root:"module/filename/Akshaya.html",
        base:"module/filename/Akshaya.html",
        name:"module/filename/Akshaya.html",
        ext:"module/filename/Akshaya.html"
    }
)
//const matches=path.matchesGlob("module/filename/Akshaya.html","module/filename/Akshaya.html")
const absolute=path.isAbsolute("module/filename/Akshaya.html")
const join=path.join("module/filename/Akshaya.html","module/filename/Akshaya.css","module/filename/Akshaya.js")
const normalization=path.normalize("module////filename//manideep....////Akshaya.html")
const parse=path.parse("module/filename/Akshaya.html");
const sep="module/filename/Akshaya.html";
const sepOrg=sep.split(path.sep);
const resolve=path.resolve("module/filename/Akshaya.html","module/filename/Akshaya.css","module/filename/Akshaya.js")
const relate=path.relative("module/filename/Akshaya.html","module/filename/Akshaya.css");
//const nameSpace=path.tonamespacedpath("module/filename/Akshaya.html");
//console.log(baseName);
//console.log(dirName);
//console.log(extlName);
//console.log(format);
//console.log(matches);
// console.log(absolute);
 //console.log(join);
 //console.log(normalization);
 //console.log(parse);
 //console.log(sepOrg);
 //console.log(resolve);
 console.log(relate);
// //console.log(nameSpace);

















