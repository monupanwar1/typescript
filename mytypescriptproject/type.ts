type sumInput =string|number;

function sum(a:sumInput,b:sumInput):sumInput{

    if(typeof a ==="string" || typeof b ==="string"){
        return a.toString()+b.toString();
    }
    return a+b;
}

console.log(sum(1,2));
console.log(sum("a","b"));



type Managers={
    name:string,
    department:string,
}



type Employees ={
    name:string,
    startDate:Date,
}


type team = Managers & Manager;



const team:team={
    name:"John Doe",
    department:"IT",
    startDate:new Date(),
}

console.log(team);