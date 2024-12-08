import { useEffect, useState } from "react";

const getCountryInfo = (countryName) => {
    const [country, setCountry] = useState({});

    useEffect(() => {
        async function fetchData() {
            let newName = countryName.toLowerCase()
            const url = `https://restcountries.com/v3.1/name/${newName}`;
            const response = await fetch(url);
            const data = await response.json();

            const country = {
                fullname: data[0].name.nativeName.eng.official,
                subregion: data[0].subregion,
                languages: data[0].languages,
                currencies: data[0].currencies,
                borders: data[0].borders,
            };

            setCountry(country);

        };
        fetchData();
    }, []);
    
    return country;
}

export default getCountryInfo;