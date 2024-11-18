const {readFile , writeFile} =require("fs");
readFile("./content/first.txt","utf8",(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
        const first=result;
    readFile("./content/second.txt","utf8",(err,result)=>{

    if(err){
        console.log(err);
        return;
        
    }
        const second=result;
        
    console.log(first,second)
    writeFile("./content/final_result2.txt",`the final result is ${first},${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
            
        }
        console.log(result);
        

    });
})


})
