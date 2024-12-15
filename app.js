class Person{
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

class Admin extends Person{
    constructor(name, surname, age, role, salary){
        super(name, surname, age)
        this.role = role;
        this.salary = salary;
    }
}

class Admin2 extends Person{
    constructor(name, surname, age, id){
        super(name, surname, age)
        this.id = id;
    }
}
let person = new Person("Azad", "Ehmedov", 32 );
console.log(person); 

let admin = new Admin("Vusal", "Eliyev", 25, "Marketing", 2000 );
console.log(admin);

let admin2 = new Admin2("Eli", "Memmedov", 20, "AR19832" );
console.log(admin2);
