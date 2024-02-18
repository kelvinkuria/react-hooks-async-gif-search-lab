import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = 'dogs') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=YOUR_API_KEY&rating=g`)
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({ gifs: data.slice(0, 3) });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
