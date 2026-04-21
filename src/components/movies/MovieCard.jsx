import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";
import Tag from "./Tag.jsx";
import "./movies.css";

function MovieCard({ movie }) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        const headers = { Authorization: `Bearer ${token}` };

        axios.get("/api/titles/favorite/", { headers })
            .then((res) => {
                setIsFavorite(res.data.some((m) => m.imdbId === movie.imdbId));
            })
            .catch(() => {});

        axios.get("/api/titles/watchlater/", { headers })
            .then((res) => {
                setIsWatchLater(res.data.some((m) => m.imdbId === movie.imdbId));
            })
            .catch(() => {});
    }, [movie.imdbId]);

    const handleClick = (type) => {
        const token = localStorage.getItem("accessToken");
        const headers = { Authorization: `Bearer ${token}` };
        const isCurrent = type === "favorite" ? isFavorite : isWatchLater;
        const setState = type === "favorite" ? setIsFavorite : setIsWatchLater;
        const url = `/api/titles/${type}/${movie.imdbId}`;

        if (isCurrent) {
            axios.delete(url, { headers })
                .then(() => setState(false))
                .catch(() => {});
        } else {
            axios.post(url, {}, { headers })
                .then(() => setState(true))
                .catch(() => {});
        }
    };

    return (
        <li className="movie-card">
            <div className="movie-card-image">
                <img src={movie.image} alt={movie.title} />
                <div className="movie-card-actions">
                    <FontAwesomeIcon
                        icon={faClock}
                        className={`movie-card-icon ${isWatchLater ? "movie-card-icon-active" : ""}`}
                        onClick={() => handleClick("watchlater")}
                    />
                    <FontAwesomeIcon
                        icon={faStar}
                        className={`movie-card-icon ${isFavorite ? "movie-card-icon-active" : ""}`}
                        onClick={() => handleClick("favorite")}
                    />
                </div>
            </div>
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-synopsis">{movie.synopsis}</p>
                <ul className="movie-card-genres">
                    {movie.genres && movie.genres.map((genre) => (
                        <Tag
                            key={genre}
                            genre={genre}
                            filter={false}
                            genres={[]}
                            setGenres={() => {}}
                        />
                    ))}
                </ul>
            </div>
        </li>
    );
}

export default MovieCard;
