import React from 'react';
import { link } from 'fs';
import './OutComeOfBetterFuture.css';


function OutComeOfBetterFuture() {

  const universities = [
    {
      "name": "University of Karachi",
      "type": "Public",
      "specialization": ["Sciences", "Social Sciences", "Business", "Computer Science"],
      "degree": ["Graduation ", "Masters", "M.Phil", "PHD"],
      "website-link": "http://www.uok.edu.pk/"
    },
    {
      "name": "NED University of Engineering and Technology",
      "type": "Public",
      "specialization": ["Engineering", "Computer Science"],
      "degree": ["Graduation ", "Masters", "M.Phil", "PHD"],
      "website-link": "https://www.neduet.edu.pk/"

    },
    {
      "name": "Federal Urdu University, Karachi campus",
      "type": "Public",
      "specialization": ["Sciences", "social Sciences", "Business", "Computer Science"],
      "degree": ["Graduation ", "Masters", "M.Phil"],
      "website-link": "https://fuuast.edu.pk/"
    }
  ];
  return (
    <div className="OutComeOfBetterFuture">

      { universities.map(results =>(
        
    <ul className="results">
        <li className="results-li"> University Name: {results.name} </li>
        <li className="results-li"> Type Of University:{results.type} </li>
        <li className="results-li"> Disciplines available in University: {results.specialization}  </li>
        <li className="results-li"> Providing Degree in: {results.degree}</li>
        <li className="results-li" className="none"> University website-link: { results.website-link} </li>
      </ul>)
      
        )}
    </div>
  )
}


export default OutComeOfBetterFuture;