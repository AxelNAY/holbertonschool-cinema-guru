import { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard.jsx";

function Favorites() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        axios.get("/api/titles/favorite/", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => setMovies(res.data))
            .catch(() => {});
    }, []);

    return (
        <div className="favorites-page">
            <h1 className="page-title">Movies you like</h1>
            <ul className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbId} movie={movie} />
                ))}
            </ul>
        </div>
    );
}

export default Favorites;
