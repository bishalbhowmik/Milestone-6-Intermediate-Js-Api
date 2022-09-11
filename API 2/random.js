

const random=()=>{

    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => display(data));
}

random();

const display=(da) =>{
    const buddies = da.results;

    const newDiv = document.getElementById('buddies');

    for(const b of buddies){

      

        const div = document.createElement('div');

        div.innerText =b.email;

        newDiv.appendChild(div);

       
        
    }
    
}