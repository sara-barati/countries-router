

import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useHistory, useLocation } from 'react-router'
import { useParams } from "react-router-dom";


function Details() {
    let params = useParams();
    const [countryShow, setcountryShow] = useState([]);
    const [allCountry, setallCountry] = useState([]);
  
    useEffect(() => {
        axios.get("https://restcountries.com/v2/all").then((res) => {
          setallCountry(res.data);
       const Country =allCountry.filter((country) => country.alpha2Code == params.alpha2Code);
         
                setcountryShow(Country);
              }
           
        )
        },
       []);
    
 

    return (
        <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
            <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
                <div className="flex container mx-auto">
                    <h1 className="font-bold text-xl">Where in the world?</h1>
                    {/* <div className="ml-auto font-medium">
                        <button onClick={() => toggleDarkMode()} dangerouslySetInnerHTML={{__html: toggleBtn}}>
                        </button>
                    </div> */}
                </div>
            </div>
            {/* <div className="container mx-auto mb-16">
                <button className="px-8 py-2 bg-white text-gray-600 shadow-md dark:bg-gray-700 dark:text-white rounded-lg" onClick={() => goHomeBtn()}>
                    <i className="fa fa-arrow-left"></i> Back
                </button>
            </div> */}
            <div className="container flex mx-auto p-8 pl-0 pr-0">
                <img src={countryShow.flag} className="w-1/2 pr-8" alt={countryShow.name} />
                <div className="p-8 pl-8">
                    <h2 className="font-bold text-2xl mb-8">{countryShow.name}</h2>
                    <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                        <p>Native Name: <span className="dark:text-gray-400 text-gray-700 text-sm">{countryShow.nativeName}</span></p>
                        <p>Population: <span className="dark:text-gray-400 text-gray-700 text-sm">{countryShow.population}</span></p>
                        <p>Region: <span className="dark:text-gray-400 text-gray-700 text-sm">{countryShow.region}</span></p>
                        {/* <p>Sub Region: <span className="dark:text-gray-400 text-gray-700 text-sm">{countryShow.subregion}</span></p>
                        <p>Capital: <span className="dark:text-gray-400 text-gray-700 text-sm">{countryShow.capital}</span></p>
                        <p>Top Level Domain: <span className="dark:text-gray-400 text-gray-700 text-sm">{countryShow.topLevelDomain[0]}</span></p>
                        <p>Currencies: <span className="dark:text-gray-400 text-gray-700 text-sm">{countryShow.currencies.map(cur => cur.name)}</span></p>
                        <p>Languages: <span className="dark:text-gray-400 text-gray-700 text-sm">{countryShow.languages.map(lang => lang.name+', ')}</span></p> */}
                    </div>
                    <div className="flex mt-16">
                        <p className="font-bold">Border Countries: </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details