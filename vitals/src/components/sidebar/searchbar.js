import React from 'react'
import './searchbar.css'


export default function SearchBar() {
  return (
    <div>
        <div className='container'>
            
            <form  className='searchbar'>
                <input type="text" />
                <button type='submit'>Search</button>
            </form>
        </div>  
    </div>
  )
}
