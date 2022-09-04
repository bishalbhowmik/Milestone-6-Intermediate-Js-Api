
const p =[1,3,5,2,3];

const q=[];

doubleIt = n=>n*2;

for(const x of p){
    const r= doubleIt(x);
    q.push(r);
}


console.log(q);