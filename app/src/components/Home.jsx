import React, { useEffect, useState } from 'react'
import getAllCountry from '../hooks/getAllCountry'
import CountryCard from './CountryCard';
import { ThemeProvider } from '../context/theme';
import Header from './Header';

function Home() {
    const [countries, setCountries] = useState([]);
    const allCountries = getAllCountry(); 

    const handleSort = (value) => {
        const sortedCountries = allCountries.filter(country => country.region.toLowerCase() === value);
        setCountries(sortedCountries);
    };

    const handleFilter = (value) => {
        const sortedByPopulation = [...allCountries].sort((a, b) => {
            if (value === 'ASC') {
                return a.population - b.population;
            }
            return b.population - a.population;
        });
        setCountries(sortedByPopulation);
    };

    useEffect(() => {
        setCountries(allCountries); 
    }, [allCountries]); 

  return (
    <ThemeProvider value={{ handleFilter, handleSort }}>
        <Header />
        <div className='w-full flex flex-wrap gap-10'>
            {
                countries.map((country) => (
                    <div key={country.name.common}>
                        <CountryCard country={country} />
                    </div>
                ))
            }
        </div>
    </ThemeProvider>
  );
}

export default Home;
