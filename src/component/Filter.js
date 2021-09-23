import React from 'react'
import ReactStars from 'react-rating-stars-component'

export const Filter = ({filterText, filterRate}) => {
    return (
        <div className='search'>
            <h3>search by text</h3>
            <input type='text' onChange={(e) => filterText(e.target.value)} />
            <h3>search by rate</h3>

            <ReactStars
              count={5}
              size={24}
              activeColor='#ffd700'
              onChange={(newRating) => filterRate(newRating)}
            />
        </div>
    )
}
