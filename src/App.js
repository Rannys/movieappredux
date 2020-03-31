import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchMovie from './container/search'
import MovieList from './container/movieList'

function App() {
  return (
    <div className="App">
      <SearchMovie/>
      <MovieList/>
    </div>
  );
}

export default App;
