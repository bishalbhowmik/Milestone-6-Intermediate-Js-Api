

const showCountry=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data =>display(data));
}

showCountry();
const display= (country)=>{

    const countryInfo = document.getElementById('country');

    for(const c of country){
       const countryName = document.createElement('div');
       countryName.classList.add('counrty');
       countryName.innerHTML = ` <h3> Country Name:  ${c.name.common} </h3> 
       <p>Capital Name: ${c.capital} </p>
       <button onclick= "showCountryDetails('${c.name.common}')"> Country Details </button>
        `;
       
       countryInfo.appendChild(countryName);

       
    }
}


const showCountryDetails= (countryN)=> {

    const url  = `https://restcountries.com/v3.1/name/${countryN}`;
    fetch(url)
    .then(res => res.json())
    .then(data => getCountryDeatils(data[0]));
    
}

const getCountryDeatils =(con) => {

    const countryD = document.getElementById('country-details');

    countryD.innerHTML = `<h4>Country Name: ${con.name.common}</h4>
                            <p> Population: ${con.population} </p>
                            <img width='100px' src='${con.flags.svg}'>
    `;
    
}