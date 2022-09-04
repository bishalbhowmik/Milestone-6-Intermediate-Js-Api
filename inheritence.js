class Person{
    name;
    id;

    constructor(name,id){
        this.name =name;
        this.id= id;
    }
}


class Person1 extends Person{


    jobTitle(){
        console.log(`${this.name} is a JavaScript Software Engineer.`);
    }
}

class Person2 extends Person{

    salary;

    constructor(name,id,salary){
        super(name,id);

        this.salary=salary;
    }

}

class Person3 extends Person{
    jobDesignation;

    constructor(name,id,desig){
        super(name,id);
        this.jobDesignation= desig;
    }
}

const bishal = new Person1('Bishal', 1);
const joy = new Person2('Joy', 3, 40000);
const ork = new Person3('Ork', 5, 'Software Testing');

console.log(joy);
console.log(ork);

bishal.jobTitle();


