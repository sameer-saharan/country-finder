import React, { useContext } from 'react'
import useTheme from '../context/theme'
function Header() {
    const {toggleThemeMode, handleSort, handleFilter} = useTheme();

  return (
    <div className='flex items-center justify-center py-5 gap-x-5'>
        <div>
            <label htmlFor="sort" className='dark:text-white'>Sort by: </label>
            <select onChange={(e) => handleSort(e.target.value)} name="sort" id="sort" className='bg-slate-300 rounded-lg px-2 py-1 font-semibold ' >
                <option value="aisa">Asia</option>
                <option value="europe">Europe</option>
                <option value="america">America</option>
                <option value="africa">Africa</option>
            </select>
        </div>
        <div>
            <label htmlFor="filter" className='dark:text-white'>Filter by: </label>
            <select onChange={(e) => handleFilter(e.target.value)} name="filter" id="filter" className='bg-slate-300 rounded-lg px-2 py-1 font-semibold' >
                <option value="ASC">Low Population</option>
                <option value="DESC">High Population</option>
                
            </select>
        </div>
        <div>
            <button className='bg-slate-600 p-2 rounded-xl text-white font-semibold hover:bg-slate-700 dark:bg-slate-100 dark:hover:bg-slate-300 dark:text-black'
            onClick={toggleThemeMode}>Toggle Theme</button>
        </div>
    </div>
  )
}

export default Header