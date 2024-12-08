const getCountryInfo = async (countryName) => {
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    const response = await fetch(url);
    const data = await response.json();

    const country = {
        fullname: data[0].name.common,
        flag: data[0].flags.png,
        population: data[0].population,
        region: data[0].region,
        capital: data[0].capital[0],
    };

    return country;
}

export default getCountryInfo;