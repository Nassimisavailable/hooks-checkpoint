import React, { useState } from 'react'
import { Filter } from './Filter';
import { MovieCard } from './MovieCard';

export const MovieList = ({movies}) => {
    const [text, settext] = useState("");

    const [rate, setrate] = useState("");

    const filterText = (text) => {
        settext(text);
    }

    const filterRate = (rate) => {
        setrate(rate);
    }

    console.log(movies);
    return (
        <div>
        <Filter filterText={filterText} filterRate={filterRate} />

           <div className='movie-list'>
            {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating >= rate).map((el)=> (<MovieCard movie={el}/>))}
           </div>


        </div>
        
        
        )
    
};
