//Select the form
const cityForm = document.querySelector('form');

//get city details & weather
const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.key);

    //returns city and weather response
    return {
        cityDets: cityDets,
        weather: weather
    };
};

//prevent default action
cityForm.addEventListener('submit', e => {
    e.preventDefault

    //trim any whitespace & get city value
    //cityForm.city.value = selection + input name + input value
    const city = cityForm.city.value.trim();

    //remove the previous entry
    cityForm.reset();

    //update the UI withcity info
    updateCity(city)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
