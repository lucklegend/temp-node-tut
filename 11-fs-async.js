const {readFile, writeFile, write} = require('fs')

console.log('start');
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    //console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        //console.log(result);
        const second = result;
        writeFile(
            './content/result-async.txt', 
            `Here is the result: ${first}, ${second} `,
            (err, result)=>{
                if(err){
                    console.log(err);
                    return;
                }else{
                    console.log('done with this task');
                }
            }
        )
    })
})
console.log('starting the next task');