import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-center py-5 gap-x-5'>
        <div>
            <label htmlFor="sort">Sort by: </label>
            <select name="sort" id="sort" className='bg-slate-300 rounded-lg px-2 py-1 font-semibold'>
                <option value="">Helo</option>
            </select>
        </div>
        <div>
            <label htmlFor="filter">Filter by: </label>
            <select name="filter" id="filter" className='bg-slate-300 rounded-lg px-2 py-1 font-semibold'>
                <option value="">Helo</option>
            </select>
        </div>
        <div>
            <button className='bg-slate-600 p-2 rounded-xl text-white font-semibold'>Toggle Theme</button>
        </div>
    </div>
  )
}

export default Header