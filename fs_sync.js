const {readFileSync, writeFileSync}=require("node:fs")
const first=readFileSync("./content/first.txt","utf8");
const second=readFileSync("./content/second.txt","utf8");
writeFileSync("./content/final_result.txt",`the final result is ${first},${second}`,{flag:"a"});