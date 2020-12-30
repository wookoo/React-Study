import React from 'react';
import Proptyeps from 'prop-types';
import axios from "axios";
import Movie from "./Movies";
import "./App.css";

class App extends React.Component{
  state = {
    isLoading : true,
    movies : [],
  }

  getMovies = async() =>{
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies,isLoading:false});
    //console.log(movies)
  }

  componentDidMount(){
    this.getMovies();
  }
 
  render(){
    const {isLoading,movies} = this.state;
    return (<section className="contioner">
       {isLoading ? (
         <div className="loader">
           <span className="loader__text">로딩중...</span>
         </div>
       ): (
          <div className = "movies">
            {movies.map(movies=>(
              <Movie
              key = {movies.id}
              id = {movies.id}
              year={movies.year}
              title={movies.title}
              summary={movies.summary}
              poster={movies.medium_cover_image}
              genres = {movies.genres}
            />)
            )}
            
          </div>
       )}
       </section>
    );
  }
}

export default App;
