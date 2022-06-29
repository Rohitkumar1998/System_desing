function LibFn(){
    console.log("i am lib")
}
function Inner(){
    console.log("i am inner" )
}
let a=10;
// in java script we can only  send function, variable to another file
// file we cannot send whole
// node js
module.exports={
    fn:LibFn,
    varName:a
} 