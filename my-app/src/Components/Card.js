import React from 'react'
import "../styles/card.scss"


function Card({ image_url, title, population, region, capital }) {
    return (
        <div className="card" >
            
            <img src={image_url} className="h-1/2 w-full rounded-tl-lg rounded-tr-lg" alt={title}   width= "270px" height="150px"/>
            <div className="card-content">
                <h3 className="font-bold mb-4">{title}</h3>
                <p className="text-xs">Population: <span className="text-gray-700 dark:text-gray-300">{population}</span></p>
                <p className="text-xs">Region: <span className="text-gray-700 dark:text-gray-300">{region}</span></p>
                <p className="text-xs">Capital: <span className="text-gray-700 dark:text-gray-300">{capital}</span></p>  
            </div>
        </div>
    )
}

export default Card

//   return (
//     <div className="wrapper">
//         <div className="search-wrapper">
//             <label htmlFor="search-form">
//                 <input
//                     type="search"
//                     name="search-form"
//                     id="search-form"
//                     className="search-input"
//                     placeholder="Search for..."
//                     value={q}
//                     /* 
//                     // set the value of our useState e
//                     //  anytime the user types in the search box
//                     */
//                     onChange={(e) => setQ(e.target.value)}
//                 />
//                 <span className="sr-only">Search countries here</span>
//             </label>
//         </div>
//         <ul className="card-grid">
//             {searches(items).map((item) => (
//                 <li>
//                     <article className="card" key={item.callingCodes}>
//                         <div className="card-image">
//                             <img src={item.flag} alt={item.name} />
//                         </div>
//                         <div className="card-content">
//                             <h2 className="card-name">{item.name}</h2>
//                             <ol className="card-list">
//                                 <li>
//                                     population:{" "}
//                                     <span>{item.population}</span>
//                                 </li>
//                                 <li>
//                                     Region: <span>{item.region}</span>
//                                 </li>
//                                 <li>
//                                     Capital: <span>{item.capital}</span>
//                                 </li>
//                             </ol>
//                         </div>
//                     </article>
//                 </li>
//             ))}
//         </ul>
//     </div>
// );
// }

