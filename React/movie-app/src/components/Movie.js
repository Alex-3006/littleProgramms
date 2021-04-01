import React from 'react';

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const tagcolor = (value) => {
    if (value >= 8) {
        return "green";
    } else if (value >= 6) {
        return "orange";
    } else {
        return "red";
    }
}

const Movie = ({ title, poster_path, vote_average, overview }) => {
    // const Movie = (props) => {
    // console.log(props);

    return (
        <div className="movie">
            <img src={poster_path ? (IMG_API + poster_path) : 
                "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80"} alt={title} />
            {/* <h3>{props.value.title}</h3> */}
            <div className="movie-info">
                <h3>{title}</h3>
                <span className={`tag ${tagcolor(vote_average)}`}>{vote_average}</span>
            </div>
            <span className="movie-over">{overview}</span>
        </div>
    );
};

export default Movie;