import React from 'react'

function CountryCard({country}) {
  return (
    <div className='flex flex-col gap-5 p-5 bg-[#d8d7d7] rounded-xl'>
        <img src={country.flags.png} className='w-28'/>
        <h1 className='text-xl font-bold'>{country.name.common}</h1>
        <p><span className='font-bold'>Population:</span> {country.population}</p>
        <p><span className='font-bold'>Region:</span> {country.region}</p>
        <p><span className='font-bold'>Capital:</span> {country.capital}</p>
    </div>
  )
}

export default CountryCard;