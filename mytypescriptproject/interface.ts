interface UserType{
    firstName: string,
    lastName:string,
    age:number,
};
function greet(user:UserType){
    console.log(`hello ${user.firstName} ${user.lastName} ${user.age}`);
}
let user:UserType={
    firstName:"Muskan",
    lastName:"Munna",
    age:25
}

greet(user);



interface Manager{
    name:string,
    age:number
}


interface Employee{
    name:string,
    department:string
}



type TeamLeader =Manager & Employee;

let teamLeader:TeamLeader={
    name:"Munna",
    age:25,
    department:"IT"
}

console.log(teamLeader);