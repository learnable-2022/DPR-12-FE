import React from 'react'

import Logo from './logo.js'
import SearchBar from './searchbar.js'
import Link from './link.js'
import Details from './details.js'
import './sidebar.css'


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <Logo />
      <SearchBar />
      <Link />
      <Details />

      
    </div>
  )
}
