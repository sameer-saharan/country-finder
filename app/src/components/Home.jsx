import React from 'react'
import getAllCountry from '../hooks/getAllCountry'
import CountryCard from './CountryCard';

function Home() {
    const countries = getAllCountry();
  return (
    <div className='w-full flex flex-wrap gap-10'>
        {
            countries.map((country) => (
                <div key={country.name.common}>
                    <CountryCard country={country}/>
                </div>
            ))
        }
    </div>
  )
}

export default Home;