import React, { useState } from 'react'
import './SearchBar.scss'
const types=[buy,rent];
const SearchBar = () => {
  const [query, setQuery]=useState({
    type:"buy",
    location: "",
    minPrice:0,
    maxPrice:0
  })
  const switchType=(val)=>{
    setQuery((prev)=>({...prev, type:val}));
  };
  return (
  <div className="searchBar">
    <div className="type">
      <button>Buy</button>
    {types.map((type)=>(
      <button key={type} onClick={()=>switchType(type)} className={query.type===type?"active":""}>{type}</button>
    ))}
    </div>
    <form>
      <input 
      type='text'
      name='location'
      placeholder='City Location'
      min={0}
      max={10000000}
      ></input>
          <input 
      type='number'
      name='minPrice'
      placeholder='MinPrice'
      min={0}
      max={10000000}
      ></input>
          <input 
      type='number'
      name='maxPrice'
      placeholder='Max Price'
      min={0}
      max={10000000}
      ></input>
      <button>
        <img src='/search.png'/>
      </button>
    </form>
  </div>
  )
}

export default SearchBar
