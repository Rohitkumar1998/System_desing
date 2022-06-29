// nodejs cli.js >print tree comand executed
let inputArr=process.argv.slice(2);
let command=inputArr[0]
let dirPath=inputArr[1]
switch(command){
    case "help":
        console.log("Help command executed");
}