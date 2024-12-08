import React from 'react'
import getCountryInfo from '../hooks/getCountryInfo'
import { useParams } from 'react-router-dom'

function CountryInfo() {
    const {countryName} = useParams();
    const country = getCountryInfo(countryName);
  return (
    <div className='flex flex-col items-center gap-5 bg-slate-500 rounded-xl p-5 text-white'
    >
        <h1 className='text-4xl font-bold'>{country.fullname}</h1>
        <p> <span className='font-semibold'>Sub-Region:</span> {country.subregion ? `${country.subregion}` : 'N/A'} </p>
        <div className='flex gap-x-1'>
            <span className='font-semibold'>Languages: </span>
            {!country.languages ? 'N/A' : ''}
            {country.languages && Object.entries(country.languages).map(([key, value]) => (
                <p key={key}>
                    {value}
                </p>
            ))}
        </div>
        <div className='flex gap-x-1'>
            <span className='font-semibold'>Currencies: </span>
            {!country.currencies ? 'N/A' : ''}
            {country.currencies && Object.entries(country.currencies).map(([key, value]) => (
                <p key={key}>
                    {value.name}
                </p>
            ))}
        </div>
        <div className='flex gap-x-1'>
            <span className='font-semibold'>Borders:</span>
            {!country.borders ? 'N/A' : ''}
            {country.borders && country.borders.map((borderCont, index) => (
                <p key={index}>
                    {borderCont}
                </p>
            ))}
        </div>
    </div>
  )
}

export default CountryInfo