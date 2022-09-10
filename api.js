



album =() =>{
 fetch('https://jsonplaceholder.typicode.com/albums')
.then(res =>res.json())
.then(data =>displayAlbum(data));
}


displayAlbum=(album) =>{

    const sectionContainer = document.getElementById('section-container');

    for(const p of album){
        
        const newElement = document.createElement('div');
        const styleId = newElement.classList.add('bishal');

        newElement.innerHTML= `${p.id}`;

        sectionContainer.appendChild(newElement);
    }
}


album();

