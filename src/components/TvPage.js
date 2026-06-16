import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Loading from "./Loading";
import { Helmet } from "react-helmet-async";

const TvPage = () => {
  const { id } = useParams();

  const [tv, setTv] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [imdbId, setImdbId] = useState("");

  useEffect(() => {
    const fetchTvShow = async () => {
      try {
        const API_KEY = "5cb3971f2ed6c001df1ae772ee291eb2";

        const [details, credits, videos, externalIds] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`),

          axios.get(
            `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`
          ),

          axios.get(
            `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`
          ),

          axios.get(
            `https://api.themoviedb.org/3/tv/${id}/external_ids?api_key=${API_KEY}`
          ),
        ]);

        setTv(details.data);

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

    fetchTvShow();
  }, [id]);

  if (!tv) {
    return <Loading />;
  }

  return (
    <Main className="container">
      <Helmet>
        <title>{tv?.name} | FlickDrive</title>

        <meta name="description" content={tv?.overview} />

        <meta property="og:title" content={tv?.name} />

        <meta property="og:description" content={tv?.overview} />

        <meta
          property="og:image"
          content={`https://image.tmdb.org/t/p/original${tv?.poster_path}`}
        />
      </Helmet>
      <div className="mt-5 pt-4 pb-4">
        <Link className="home-link" to="/">
          Home Page
        </Link>

        <span className="small-title">{tv.name}</span>
      </div>

      <div className="holder row">
        <img
          className="col-md-8"
          src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`}
          alt={tv.name}
          loading="lazy"
        />

        <div className="col-md-4">
          <h2 className="title">{tv.name}</h2>

          <div className="movie-info">
            <p>⭐ {tv.vote_average?.toFixed(1)}</p>

            <p>📅 {tv.first_air_date}</p>

            <p>📺 Seasons: {tv.number_of_seasons}</p>

            <p>🎬 Episodes: {tv.number_of_episodes}</p>

            <p>🎭 {tv.genres?.map((genre) => genre.name).join(", ")}</p>
          </div>

          <div className="desc-holder">
            <p className="desc">{tv.overview}</p>
          </div>

          {imdbId && (
            <button
              className="watch-btn"
              onClick={() =>
                window.open(
                  `https://streamimdb.ru/embed/tv/${imdbId}`,
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
export default TvPage;
