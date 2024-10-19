import React, { useState } from 'react'
import './search.css'

export default function SearchData({user}) {

const [searchTerm,setSearchTerm]=useState('')



const handleSearchChange=(e)=>{
    setSearchTerm(e.target.value)
}


  return (
    <div>
        <div class="search-container">
        <input type="text" placeholder="Search..." className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}/>
        <button class="search-button">Search</button>
    </div>
    </div>
  )
}
