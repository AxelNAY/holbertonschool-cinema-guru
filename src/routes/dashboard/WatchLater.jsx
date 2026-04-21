import { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard.jsx";

function WatchLater() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        axios.get("/api/titles/watchlater/", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => setMovies(res.data))
            .catch(() => {});
    }, []);

    return (
        <div className="watchlater-page">
            <h1 className="page-title">Movies to watch later</h1>
            <ul className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbId} movie={movie} />
                ))}
            </ul>
        </div>
    );
}

export default WatchLater;
