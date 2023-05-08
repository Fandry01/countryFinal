import axios from "axios";

//haal input van zoekveld
const searchedCountry = document.getElementById('input-field');
const submitform = document.getElementById('submit-form');
const countrylist = document.getElementById('country-info');
submitform.addEventListener('submit',(event)=>{
    event.preventDefault();
    countrylist.innerHTML = null;
    getOneCountry(searchedCountry.value);
    searchedCountry.value ='';
})


// maak een async function haal specifieke data op met als velden land image vlag currency

async function getOneCountry(){
    try {
        const response = await axios.get(`https://restcountries.com/v2/name/${searchedCountry.value}`);
        const countries = response.data;
        countrylist.innerHTML = countries.map((country)=>{
             return `<li>
            <img src="${country.flag}" alt="Vlag van ${country.name}" class="flag" />
            <p>${country.name} is situated in ${country.subregion} <br/>it has a population of ${country.population} people.</p>
            <p>and you can pay with ${country.currencies.name}</p>
            </li>`

        })
        console.log(countries)
    }catch (e){
    console.log(e)
    }
}

// schrijf een functie waarin currencies array binnekomt waarbij ik daarna kan kiezen welke in presenteer
function allCurrency(currentCurrency){
if(currentCurrency > 0){
    currentCurrency.map((currency)=>{

    })
}


}


