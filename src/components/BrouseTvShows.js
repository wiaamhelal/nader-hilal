import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function BrouseTvShows() {
  const navicate = useNavigate();

  const API_KEY = "5cb3971f2ed6c001df1ae772ee291eb2";

  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const [loading, setLoading] = useState(true);

  const [genre, setGenre] = useState("");
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [year, setYear] = useState("");
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Genres
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setGenres(data.genres));
  }, []);

  // Movies
  useEffect(() => {
    async function loadMovies() {
      setLoading(true);

      let url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=${page}`;

      if (genre) url += `&with_genres=${genre}`;

      if (sortBy) url += `&sort_by=${sortBy}`;

      if (year) url += `&first_air_date_year=${year}`;

      if (country) url += `&with_origin_country=${country}`;

      if (rating) url += `&vote_average.gte=${rating}`;

      const res = await fetch(url);

      const data = await res.json();

      setMovies(data.results || []);
      setTotalPages(Math.min(data.total_pages, 500));
      setLoading(false);
    }

    loadMovies();
  }, [genre, sortBy, year, country, rating, page]);

  const resetFilters = () => {
    setGenre("");
    setSortBy("popularity.desc");
    setYear("");
    setCountry("");
    setRating("");
    setPage(1);
  };

  return (
    <Container>
      {/* <TitlePage>Browse Movies</TitlePage> */}

      <Filters>
        <select
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Genre</option>

          {genres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            setPage(1);
          }}
        >
          <option value="popularity.desc">Popular</option>

          <option value="vote_average.desc">Top Rated</option>

          <option value="primary_release_date.desc">Newest</option>

          <option value="primary_release_date.asc">Oldest</option>

          <option value="revenue.desc">Highest Revenue</option>

          <option value="vote_count.desc">Most Voted</option>
        </select>

        <select
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Year</option>

          {Array.from({ length: 45 }, (_, i) => {
            const y = new Date().getFullYear() - i;

            return (
              <option key={y} value={y}>
                {y}
              </option>
            );
          })}
        </select>

        <select
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Country</option>

          <option value="US">USA</option>
          <option value="GB">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
          <option value="JP">Japan</option>
          <option value="KR">Korea</option>
          <option value="CN">China</option>
          <option value="IN">India</option>
          <option value="ES">Spain</option>
          <option value="IT">Italy</option>
          <option value="TR">Turkey</option>
        </select>

        <select
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Ratings</option>

          <option value="9">9+</option>
          <option value="8">8+</option>
          <option value="7">7+</option>
          <option value="6">6+</option>
          <option value="5">5+</option>
        </select>

        <button onClick={resetFilters}>Reset</button>
      </Filters>

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="movies-container row">
            {movies?.map((movie) => (
              <div
                key={movie.id}
                className="box col-5 col-sm-4 col-md-2"
                onClick={() => navicate(`/tv/${movie.id}`)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.name}
                  loading="lazy"
                />

                <p className="time">{movie.first_air_date?.split("-")[0]}</p>

                <p className="title">{movie.name}</p>

                <div className="type-container">
                  <span>Movie</span>
                  <span>⭐ {movie.vote_average?.toFixed(1)}</span>
                </div>
              </div>
            ))}
          </div>
          <Pagination>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
              Previous
            </button>

            <span>
              {page} / {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </Pagination>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  margin-right: 20px;
  margin-left: 20px;
  // overflow-x: hidden;
  @media (max-width: 668px) {
    margin-right: 10px;
    margin-left: 10px;
  }

  & .movies-container {
    color: white;
    gap: 15px;
    justify-content: center;

    & .box {
      background: rgb(23, 23, 23);
      padding: 10px;
      border-radius: 10px;
      width: 164.33px;
      img {
        max-width: 100%;
        height: 225px;
        object-fit: cover;
        border-radius: 10px;
      }
      & .time {
        text-align: center;
        margin-top: 15px;
        color: #ffffff80;
        margin-bottom: 3px;
      }
      & .title {
        text-align: center;
        font-size: 17px;
        margin-bottom: 6px;
      }
      & .type-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 15px;
        color: #ffffff80;
        span {
        }
      }
    }
  }
`;

const TitlePage = styled.h1`
  color: white;
  font-size: 38px;
  margin-bottom: 35px;
  font-weight: 700;
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
  margin-top: 10px;

  select {
    background: #1c1c1c;
    color: white;
    border: 1px solid #303030;
    border-radius: 10px;
    padding: 12px 18px;
    /* min-width: 150px; */
    cursor: pointer;
    outline: none;
    transition: 0.3s;
    font-size: 15px;
    width: 110px;

    &:hover {
      border-color: #b89564;
    }

    &:focus {
      border-color: #b89564;
      box-shadow: 0 0 10px rgba(184, 149, 100, 0.25);
    }
  }

  button {
    background: #d93434;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 12px 25px;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 600;
    width: 110px;

    &:hover {
      background: #ef4444;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 28px;
`;

const Card = styled.div`
  cursor: pointer;
  transition: 0.35s;

  &:hover {
    transform: translateY(-8px);
  }

  &:hover img {
    transform: scale(1.08);
  }
`;

const Poster = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 18px;
  background: #1c1c1c;

  img {
    width: 100%;
    height: 330px;
    object-fit: cover;
    transition: 0.4s;
    display: block;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0) 50%
    );
    pointer-events: none;
  }
`;

const Quality = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 5;

  background: rgba(20, 20, 20, 0.95);
  color: white;

  padding: 5px 10px;
  border-radius: 7px;

  font-size: 12px;
  font-weight: bold;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: #9a9a9a;

  margin-top: 14px;

  font-size: 13px;
`;

const Title = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-top: 8px;
  line-height: 1.4;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Pagination = styled.div`
  margin-top: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;

  span {
    color: white;
    font-weight: 600;
    font-size: 17px;
  }

  button {
    background: #b89564;
    color: white;

    border: none;

    padding: 12px 22px;

    border-radius: 10px;

    cursor: pointer;

    transition: 0.3s;

    font-weight: 600;

    &:hover:not(:disabled) {
      background: #a17d48;
    }

    &:disabled {
      opacity: 0.45;
      cursor: not-allowed;
    }
  }
`;

const Loading = styled.div`
  color: white;
  font-size: 24px;
  text-align: center;
  margin-top: 120px;
`;
