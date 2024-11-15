function greet(user:{name:string,age:number}){
    console.log(`hello ${user.age},you  are ${user.age}`)
}

greet({
    name:"kunal",
    age:20
})

let user={
    name:"mmunna",
    age:18
}

greet(user);