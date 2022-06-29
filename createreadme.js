let fs=require("fs");
let path=require("path");
let input= process.argv.slice(2);
let firstInput=input[0];
let secondInput =input[1];
let newFolderPath = path.join(process.cwd(),"Web Dev",firstInput);
// check kro 
if(fs.existsSync(newFolderPath)){
    console.log(firstInput,"alredy exist");

}
else{
    // nya folder banane ke liye path use krna pdta hai
    // path is liye dete hain taki requre folder me hi bne

    fs.mkdirSync(newFolderPath);
}
for(let i=1;i<=secondInput;i++){
    let creatlecture="lecture-"+i;

      let insidefolder =path.join(newFolderPath,creatlecture)

if(fs.existsSync(insidefolder)){
    console.log(creatlecture,"aready exist");
}
else{
    // actual creation
    fs.mkdirSync(insidefolder);
}
let pathfile=path.join(insidefolder,"readme.md");
if(fs.existsSync(pathfile)){
    console.log("already exist")
}
else{
    fs.writeFileSync(pathfile,"");
}
}
