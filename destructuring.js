/* const person = {
    nam:'joy', id: 45, phone: 32432
};

const {nam, id, phone} = person;

console.log(nam,id,phone);
 */

const company = {
    name: 'Gp', 
    ceo: {
        id:34, name: 'Tom', salary: '$4000',
        cto:{
            id:43, name: 'jon', salary: '3000'
        }
    }
}

const {name,id,salary} = company.ceo.cto;

console.log(name,id,salary);



