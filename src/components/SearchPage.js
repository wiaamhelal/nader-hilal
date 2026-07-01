import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function SearchPage() {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const navicate = useNavigate();
  useEffect(() => {
    const fetchSearch = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=5cb3971f2ed6c001df1ae772ee291eb2&query=${query}`
      );

      setResults(data.results);
    };

    fetchSearch();
  }, [query]);

  return (
    // <div>
    //   <h2>Search Results for: {query}</h2>

    //   {results.map((item) => (
    //     <div key={item.id}>{item.title || item.name}</div>
    //   ))}
    // </div>
    // <Main className="row">
    //   {results?.map((movie) => (
    //     <div
    //       key={movie.id}
    //       className="box col-5 col-sm-4 col-md-2"
    //       onClick={() => navicate(`/movie/${movie.id}`)}
    //     >
    //       <img
    //         src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    //         alt={movie.title}
    //         loading="lazy"
    //       />

    //       <p className="time">{movie.release_date?.split("-")[0]}</p>

    //       <p className="title">{movie.title}</p>

    //       <div className="type-container">
    //         <span>Movie</span>
    //         <span>⭐ {movie.vote_average?.toFixed(1)}</span>
    //       </div>
    //     </div>
    //   ))}
    // </Main>
    <Main className="row">
      <h2>Search Results for: {query}</h2>
      {results
        ?.filter(
          (item) => item.media_type === "movie" || item.media_type === "tv"
        )
        .map((item) => (
          <div
            key={item.id}
            className="box col-5 col-sm-4 col-md-2"
            onClick={() => {
              if (item.media_type === "movie") {
                navicate(`/movie/${item.id}`);
              } else if (item.media_type === "tv") {
                navicate(`/tv/${item.id}`);
              }
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${
                item.poster_path || item.profile_path
              }`}
              alt={item.title || item.name}
              loading="lazy"
            />

            <p className="time">
              {(item.release_date || item.first_air_date)?.split("-")[0]}
            </p>

            <p className="title">{item.title || item.name}</p>

            <div className="type-container">
              <span>
                {item.media_type === "movie"
                  ? "Movie"
                  : item.media_type === "tv"
                  ? "TV Show"
                  : "Person"}
              </span>

              <span>⭐ {item.vote_average?.toFixed(1) || "N/A"}</span>
            </div>
          </div>
        ))}
    </Main>
  );
}
const Main = styled.div`
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
`;
export default SearchPage;
