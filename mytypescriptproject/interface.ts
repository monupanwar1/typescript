// interface UserType{
//     firstName: string,
//     lastName:string,
//     age:number,
// };
// function greet(user:UserType){
//     console.log(`hello ${user.firstName} ${user.lastName} ${user.age}`);
// }
// let user:UserType={
//     firstName:"Muskan",
//     lastName:"Munna",
//     age:25
// }

// greet(user);



// interface Manager{
//     name:string,
//     age:number
// }


// interface Employee{
//     name:string,
//     department:string
// }



// type TeamLeader =Manager & Employee;

// let teamLeader:TeamLeader={
//     name:"Munna",
//     age:25,
//     department:"IT"
// }

// console.log(teamLeader);






// function greet(name:string):string{
//     return "Hello"+name;
// }


// let greeting = greet("kunal")
// console.log(greeting);



// function sum(a:number,b:number):number{
//     return a+b;
// }

// let anss = sum(10,20);
// console.log(anss)







interface Address{
    city: string;
    country: string;
    pincode: number;
}
interface User {
    name: string; 
    age: number;
    address?: Address; // address is Optional property using "?"
}

interface Office {
    address: Address; // interface inside interface
}


let users: User = {
    name: "kunal",
    age: 22,
    address: {
        city: "haryana",
        country: "India",
        pincode: 847105
    }
}



console.log(users);