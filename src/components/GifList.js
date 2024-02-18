import React from 'react';

const GifList = (props) => {
  return (
    <div>
      <ul>
        {props.gifs.map(gif => (
          <li key={gif.id}>
            <img src={gif.images.original.url} alt={gif.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GifList;
