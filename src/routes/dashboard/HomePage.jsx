import { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";
import MovieCard from "../../components/movies/MovieCard.jsx";
import Filter from "../../components/movies/Filter.jsx";
import Button from "../../components/general/Button.jsx";

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [minYear, setMinYear] = useState(1970);
    const [maxYear, setMaxYear] = useState(2022);
    const [genres, setGenres] = useState([]);
    const [sort, setSort] = useState("");
    const [title, setTitle] = useState("");
    const [page, setPage] = useState(1);

    const loadMovies = (pageNum) => {
        const token = localStorage.getItem("accessToken");
        axios.get("/api/titles/advancedsearch", {
            headers: { Authorization: `Bearer ${token}` },
            params: {
                minYear,
                maxYear,
                genres: genres.join(","),
                title,
                sort,
                page: pageNum,
            },
        })
            .then((res) => {
                const data = Array.isArray(res.data) ? res.data : res.data.titles || [];
                if (pageNum === 1) {
                    setMovies(data);
                } else {
                    setMovies((prev) => [...prev, ...data]);
                }
            })
            .catch(() => {});
    };

    useEffect(() => {
        setPage(1);
        loadMovies(1);
    }, [minYear, maxYear, genres, title, sort]);

    const handleLoadMore = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        loadMovies(nextPage);
    };

    return (
        <div className="home-page">
            <Filter
                minYear={minYear}
                setMinYear={setMinYear}
                maxYear={maxYear}
                setMaxYear={setMaxYear}
                sort={sort}
                setSort={setSort}
                genres={genres}
                setGenres={setGenres}
                title={title}
                setTitle={setTitle}
            />
            <ul className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbId} movie={movie} />
                ))}
            </ul>
            <div className="load-more">
                <Button label="Load More.." onClick={handleLoadMore} />
            </div>
        </div>
    );
}

export default HomePage;
