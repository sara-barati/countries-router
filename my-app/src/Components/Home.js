import Card from './Card'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../styles/Home.scss"
// import "./Home.css"
import { Link,Outlet } from 'react-router-dom'
import { BsSearch } from "react-icons/bs";

import Details from './Details'



export default function Home() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
       axios.get('https://restcountries.com/v2/all').then((res)=>setCountries(res.data))
    }, [])

    const filterByRegion =  (region) => {
        if(region=== '') return
       axios.get(`https://restcountries.com/v2/region/${region}`).then((res)=>setCountries(res.data))
    }
    const searchCountry =  (term) => {
        if(term === '') return
       axios.get(`https://restcountries.com/v2/name/${term}`).then((res)=>setCountries(res.data))
 
    }
    return (    
        <div className="container1">
  
                <div className="header">
                    <h2 className="font-bold text-xl">Where in the world?</h2>

                </div>
          
            <div className="search">
            <div className="searches2">
     <span>  { < BsSearch/>} </span>
                <input type="text" placeholder="Search for a country..." className="pl-10 p-2 shadow-md rounded-md w-1/3 dark:bg-gray-700"  onChange={ term => searchCountry(term.target.value)} />
</div>
                <select onChange={ val => filterByRegion(val.target.value)}>
                    <option value="" > Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
            <div className="containerd">
                




                {countries.map( (country,index) => 
              <Link to={`${country.alpha2Code}`} className='link'>
            
                    <Card 
                title={country.name} 
                image_url={country.flag} 
                population={country.population}
                region={country.region}
                capital={country.capital}
            />
           
         </Link> 
            )}
 
                                            
            </div>
{/* <Outlet/> */}
        </div>
    )
}

