class Identity{
    name;
    id;

    constructor(name,id){
        this.name = name;
        this.id = id;
    }

    newJob(id){
        console.log(this.name, 'Software Engineer');
    }
}

const bishal = new Identity('Bishal', 34);

const joy = new Identity('Joy', 43);



// console.log(bishal);

bishal.newJob();
