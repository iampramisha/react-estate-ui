import React from 'react'
import './homePage.scss'
import SearchBar from '../../components/SearchBar/SearchBar'
const Homepage = () => {
  return (
 <div className="homePage">
    <div className="textContainer">
      <div className="wrapper">
     
      <h1 className='title'>
        Find Real Estate & Get Your Dream Place
        </h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima ipsam quae assumenda unde, accusamus atque ab quisquam corrupti nobis mollitia quis similique rem eos nihil neque dolorum sint consequuntur eveniet!
        </p>
        <SearchBar/>
        <div className="boxes">
            <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
            </div>
          
            <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
                </div>
            <div className="box">
                <h1>2000+</h1>
                <h2>Property ready</h2>
                </div>

        </div>
      </div>
    </div>
    
    <div className="imgContainer">
        <img src='/bg.png' alt=''/>
    </div>
 </div>
  )
}

export default Homepage
