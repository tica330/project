import React from "react";
import PropTypes from 'prop-types';
import './movies.css';

function Movie({id,year,title,summary,poster}){
    return(
        <div className="movie">
            <img src={poster} alt={title}/>
            <div>
            <h5 className="movie__title">{title}</h5>
            <h5 className="movie__year">{year}</h5>
            <h5 className="movie__summary">{summary}</h5>
            </div>
        </div>
    );
}
Movie.PropTypes={
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.number.isRequired,
    summary:PropTypes.number.isRequired,
    poster:PropTypes.number.isRequired
}
export default Movie;