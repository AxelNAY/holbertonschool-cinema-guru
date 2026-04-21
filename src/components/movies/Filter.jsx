import "./movies.css";
import SearchBar from "../general/SearchBar.jsx";
import Input from "../general/Input.jsx";
import SelectInput from "../general/SelectInput.jsx";
import Tag from "./Tag.jsx";

const GENRES = [
    "action", "drama", "comedy", "biography", "romance",
    "thriller", "war", "history", "sport", "sci-fi",
    "documentary", "crime", "fantasy"
];

const SORT_OPTIONS = [
    { value: "latest", label: "Latest" },
    { value: "oldest", label: "Oldest" },
    { value: "highestrated", label: "Highest Rated" },
    { value: "lowestrated", label: "Lowest Rated" },
];

function Filter({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) {
    return (
        <div className="filter">
            <SearchBar title={title} setTitle={setTitle} />
            <div className="filter-controls">
                <div className="filter-inputs">
                    <Input
                        label="Min Date:"
                        type="number"
                        value={minYear}
                        setValue={setMinYear}
                        inputAttributes={{ min: 1900, max: maxYear }}
                    />
                    <Input
                        label="Max Date:"
                        type="number"
                        value={maxYear}
                        setValue={setMaxYear}
                        inputAttributes={{ min: minYear, max: new Date().getFullYear() }}
                    />
                    <SelectInput
                        label="Sort:"
                        options={SORT_OPTIONS}
                        value={sort}
                        setValue={setSort}
                    />
                </div>
                <ul className="filter-tags">
                    {GENRES.map((genre) => (
                        <Tag
                            key={genre}
                            genre={genre}
                            filter={true}
                            genres={genres}
                            setGenres={setGenres}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Filter;
