const http=require("http");
const server=http.createServer((req,res)=>{
    // console.log(req);
    // res.write("welcome to our 1st server!!!")
    // res.end();........... this above 3 lines code for home page only it retuns every time only one answer
    console.log(req);
    if(req.url==="/"){
        res.end("hello!!!, Welcome to our first server");
        //res.end();
    }
    if(req.url==="/about"){
        res.end("this is MAilwar Akshaya!!! ");
       
        //res.end();
    }
    else {
    
    res.end(`
        <h1>Oops!!!</h1>
        <p> sorry!! the content you searched is not available in our webpage</P>
        <a href="/">home_page</a>
        
        
        `);
    }


}


);
server.listen(5000);