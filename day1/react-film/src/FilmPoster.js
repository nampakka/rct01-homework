import React, { Component } from 'react';

class FilmPoster extends Component {
  render() {
    let posterUrl = this.props.pUrl;
    return (
      <img src={posterUrl} alt="" />
    );
  }
}

export default FilmPoster;
