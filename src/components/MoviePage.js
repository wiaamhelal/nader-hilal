import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Loading from "./Loading";
import { Helmet } from "react-helmet-async";
const MoviePage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [imdbId, setImdbId] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const API_KEY = "5cb3971f2ed6c001df1ae772ee291eb2";

        const [details, credits, videos, externalIds] = await Promise.all([
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
          ),

          axios.get(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
          ),

          axios.get(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
          ),

          axios.get(
            `https://api.themoviedb.org/3/movie/${id}/external_ids?api_key=${API_KEY}`
          ),
        ]);

        setMovie(details.data);

        setCast(credits.data.cast.slice(0, 10));

        setImdbId(externalIds.data.imdb_id);

        const trailerVideo = videos.data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        if (trailerVideo) {
          setTrailer(trailerVideo.key);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovie();
  }, [id]);
  if (!movie) {
    return <Loading />;
  }

  return (
    <Main className="container">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Movie",
            name: movie?.title,
            description: movie?.overview,
            image: `https://image.tmdb.org/t/p/original${movie?.poster_path}`,
            datePublished: movie?.release_date,
          })}
        </script>
        <title>{movie?.title} | FlickDrive</title>

        <meta name="description" content={movie?.overview} />

        <meta property="og:title" content={movie?.title} />

        <meta property="og:description" content={movie?.overview} />

        <meta
          property="og:image"
          content={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
        />
      </Helmet>
      <div className="mt-5 pt-4 pb-4">
        <Link className="home-link" to="/">
          Home Page
        </Link>

        <span className="small-title">{movie.title}</span>
      </div>

      <div className="holder row">
        <img
          className="col-lg-8"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          loading="lazy"
        />

        <div className="col-lg-4">
          <h2 className="title">{movie.title}</h2>

          <div className="movie-info">
            <p>⭐ {movie.vote_average?.toFixed(1)}</p>

            <p>📅 {movie.release_date}</p>

            <p>⏱ {movie.runtime} min</p>

            <p>🎭 {movie.genres?.map((genre) => genre.name).join(", ")}</p>
          </div>

          <div className="desc-holder">
            <p className="desc">{movie.overview}</p>
          </div>

          {imdbId && (
            <button
              className="watch-btn"
              onClick={() =>
                window.open(
                  `https://streamimdb.ru/embed/movie/${imdbId}`,
                  "_blank"
                )
              }
            >
              Watch Now
            </button>
          )}
        </div>
      </div>

      {trailer && (
        <div className="trailer-section">
          <h3>Trailer</h3>

          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${trailer}`}
            title="Trailer"
            allowFullScreen
          />
        </div>
      )}

      <div className="cast-section">
        <h3>Cast</h3>

        <div className="row">
          {cast.map((actor) => (
            <div key={actor.id} className="col-6 col-md-3 col-lg-2 text-center">
              {actor.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                  loading="lazy"
                />
              )}

              <p>{actor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  min-height: 100vh;

  .home-link {
    color: #b89564;
    text-decoration: none;
  }

  .small-title {
    color: rgb(205 192 177);
    margin-left: 10px;
  }

  .holder img {
    width: 100%;
    border-radius: 20px;
  }

  .title {
    color: #b89564;
    margin-top: 15px;
  }

  .movie-info {
    color: white;
    margin-top: 20px;
  }

  .movie-info p {
    margin-bottom: 10px;
  }

  .desc-holder {
    margin-top: 20px;
  }

  .desc {
    color: rgb(205 192 177);
    line-height: 1.8;
  }

  .watch-btn {
    width: 100%;
    border: none;
    background: #b89564;
    color: white;
    padding: 10px;
    border-radius: 8px;
    margin-top: 20px;
    font-weight: bold;
    cursor: pointer;
  }

  .trailer-section {
    margin-top: 60px;
  }

  .trailer-section h3,
  .cast-section h3 {
    color: #b89564;
    margin-bottom: 20px;
  }

  .cast-section {
    margin-top: 60px;
  }

  .cast-section img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .cast-section p {
    color: white;
    font-size: 14px;
  }
`;

export default MoviePage;
