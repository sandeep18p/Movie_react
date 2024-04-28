import React from 'react';

function GenreFilter({ genres, onGenreSelect }) {
  return (
    <div className="genre-filter">
      <h3 className='one' id="two">Filter by Genre:</h3>
      <div className='one'>
        {genres.map((genre, index) => (
          <button 
            key={index} 
            className="genre-button"
            onClick={() => onGenreSelect(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
