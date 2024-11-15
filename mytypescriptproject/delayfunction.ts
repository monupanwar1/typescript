function delayCall(anotherFnc:()=>void){
    setTimeout(anotherFnc,1000)
}

function log(){
    console.log("hello")
}


delayCall(log);