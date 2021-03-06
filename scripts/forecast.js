const key = 'L4VH67x7fXbM77AHpEqvTgxEQnlF1VbK';

const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch (base + query);
    const data = await response.json();
    return data[0];
}

//get city information
const getCity = async (city) => {

    //base, apikey, cityname - 
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

//this call the function 'getcity'
/*getCity('abuja')
    .then(data => getWeather(data.Key))
    .then(data => console.log(data)) 
    .catch(err => console.log(err)); 
*/
//getWeather('254085');