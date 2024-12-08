import React from 'react'
import { useNavigate } from 'react-router-dom';

function CountryCard({country}) {
    const navigate = useNavigate();
    const countryName = country.name.common.toLowerCase();

    const handleMoreDetails = () => {
        navigate(`/country/${countryName}`)
    };

  return (
    <div className='flex flex-col gap-5 p-5 bg-[#d8d7d7] rounded-xl'>
        <img src={country.flags.png} className='w-28'/>
        <h1 className='text-xl font-bold'>{country.name.common}</h1>
        <p><span className='font-bold'>Population:</span> {country.population}</p>
        <p><span className='font-bold'>Region:</span> {country.region}</p>
        <p><span className='font-bold'>Capital:</span> {country.capital}</p>
        <button 
        className='bg-red-400 rounded-xl py-1 px-2 font-semibold hover:bg-red-500'
        onClick={handleMoreDetails}
        >
            More Details
        </button>
    </div>
  )
}

export default CountryCard;