const arr =[
    {name: 'Joy', id: 23, age: 24},
    {name: 'ork', id: 5, age: 25},
    {name: 'Toufiq', id: 26, age: 22},
    {name: 'fairuz', id: 6, age: 30},
    {name: 'ork', id: 40, age: 46},
        
    
]




// const largeNum = arr.filter(num => num);
// const smallNum = arr.filter(n => n.id< '20');


// const na = arr.filter(nam => nam.name== 'ork');

// console.log(na);

// // console.log(largeNum);
// console.log(smallNum);


const bigNum = arr.find(num => num.id>20);

console.log(bigNum);