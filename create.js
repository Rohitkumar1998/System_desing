const { fstat } = require("fs");
let path = require("path");
let fs = require("fs");
let newModule = ["JavaScript", "Browser", "React", "Backennd", "git"]
//process.cwd->in which file folder you  are excutinng your file
let webDevDrivepath = path.join(process.cwd(), "Web Dev");
// console.log(webDevDrive)
if (fs.existsSync(webDevDrivepath)) {
    console.log("web dev","already exist")
}
else {
    // isase new web folder bnn jayega
    fs.mkdirSync(webDevDrivepath);
}
// add in new file under the web dev

for (let i = 0; i < newModule.length; i++) {
    let moduleverPath = path.join(webDevDrivepath, newModule[i])
    console.log(moduleverPath)

    if (fs.existsSync(moduleverPath)) {
        console.log(newModule[i], "already exist")
    }
    else {
        fs.mkdirSync(moduleverPath)
    }
    
    console.log(moduleverPath);
    //  ye path de deta hai

    
}