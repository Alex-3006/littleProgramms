import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';

const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const resp = fetch(FEATURED_API);
        resp.then((res) => {
            // console.log(res);
            return res.json();
        }).then((data) => {
            // console.log(data.results);
            setMovies(data.results);
        });
        // const fetchData = async () =>{
        //     setMovies((await (await fetch(FEATURED_API)).json()).results);
        // }
        // fetchData();
        // (async () => {setMovies((await (await fetch(FEATURED_API)).json()).results)})()

    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
            const resp = fetch(SEARCH_API + searchTerm);
            resp.then((res) => {
                // console.log(res);
                return res.json();
            }).then((data) => {
                // console.log(data.results);
                setMovies(data.results);
            });

            setSearchTerm('');
        }
    };

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <header>
                <form onSubmit={handleOnSubmit}>
                    <input
                        className="search"
                        type="search"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleOnChange}
                    />
                </form>
            </header>
            <div className="movie-container">
                {movies.length > 0 && movies.map((movie) => (
                    <Movie key={movie.id} {...movie} />
                ))}
            </div>
        </>
    );
};

export default App;