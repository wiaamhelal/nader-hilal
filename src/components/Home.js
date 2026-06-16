import React, { useDebugValue, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import star from "../img/star-svgrepo-com (2).svg";
import { fetchHomeData } from "../redux/slices/movieSlice";
import Loading from "./Loading";
import trendingImg from "../img/trending-up-svgrepo-com.svg";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const API_KEY = "5cb3971f2ed6c001df1ae772ee291eb2";
  const {
    trending,
    popular,
    topRated,
    upcoming,
    loading,
    latestMovies,
    latestTvShows,
    TopRatedTvShows,
  } = useSelector((state) => state.movies);

  console.log(TopRatedTvShows);
  console.log(popular);
  console.log(topRated);
  console.log(upcoming);

  const navicate = useNavigate();
  const dispatch = useDispatch();

  const tabs = [
    { id: "all", label: "REVIEW ALL" },
    { id: "Hall Apartment", label: "REVIEW BY PROJECT" },
    { id: "One Room", label: "REVIEW BY CATEGORY" },
  ];
  const [activeTab, setActiveTab] = useState("all");
  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
      );

      setMovies(response.data.results.slice(0, 5));
    };

    fetchMovies();
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!movies.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);
  if (loading) return <Loading />;
  return (
    <Main>
      {/* <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ marginTop: "10px" }}>
          {trending?.map((movie, index) => (
            <div
              key={movie.id}
              className={`carousel-item ${
                index === 0 ? "active" : ""
              } position-relative`}
              style={{ maxHeight: "600px" }}
              onClick={() => navicate(`/movie/${movie.id}`)}
            >
              <img
                className="d-block w-100"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
              />

              <div
                className="movie-details"
                style={{
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  background: "rgba(255,255,255,0.1)",
                }}
              >
                <div className="head-div">
                  <span className="rate">
                    <img src={star} alt="*" />
                    <span className="the-number">
                      {movie.vote_average.toFixed(1)}
                    </span>
                  </span>

                  <span className="year d-sm-none">{movie.title}</span>

                  <span className="year">
                    {movie.release_date?.split("-")[0]}
                  </span>
                </div>

                <h2 className="d-none d-sm-block">{movie.title}</h2>

                <p className="d-none d-sm-block">
                  {movie.overview?.slice(0, 150)}...
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div> */}
      {/* <div className="hero">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}
          />
        ))}

        <div className="hero-content">
          <h1>{movies[currentIndex]?.title}</h1>

          <div className="rate-holder">
            <span className="imdb">IMDB 8.5</span>
            <span className="hd">HD</span> <span className="year">2026</span>
          </div>
          <p>{movies[currentIndex]?.overview.slice(0, 200)}</p>
          <span className="play-btn">Play Now</span>
        </div>
      </div> */}
      <Helmet>
        <title>FlickDrive | Movies, TV Shows & Entertainment</title>

        <meta
          name="description"
          content="Discover trending movies, TV shows, trailers, ratings and cast information on FlickDrive."
        />

        <meta
          name="keywords"
          content="movies, tv shows, streaming, trailers, flickdrive"
        />
      </Helmet>
      <div className="hero">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            }}
          />
        ))}

        <div className="hero-content">
          <h1>{movies[currentIndex]?.title}</h1>

          <div className="rate-holder">
            <span className="imdb">
              IMDB {movies[currentIndex]?.vote_average?.toFixed(1)}
            </span>

            <span className="hd">HD</span>

            <span className="year">
              {movies[currentIndex]?.release_date?.split("-")[0]}
            </span>
          </div>

          <p>{movies[currentIndex]?.overview?.slice(0, 200)}</p>

          {/* <span className="play-btn">Play Now</span> */}
          <Link to={`/movie/${movies[currentIndex]?.id}`} className="play-btn">
            Play Now
          </Link>
        </div>
      </div>
      <div className="trending-img-holder">
        <img src={trendingImg} loading="lazy" alt="flickDrive" />
        <h4>Trending Now</h4>
        <img src={trendingImg} loading="lazy" alt="flickDrive" />
      </div>

      <div className="my-slider">
        <div className="the-slide">
          {popular?.map((movie) => (
            <div
              className="box"
              key={movie.id}
              onClick={() => navicate(`/movie/${movie.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />

              <div className="details">
                {movie.title.length > 10 && (
                  <h3>{movie.title.slice(0, 10)}...</h3>
                )}
                <h3>{movie.title.length < 10 && movie.title}</h3>
                <p>{movie?.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="latest-movies">
        <h4>Top Rated Movies</h4>
        <div className="movies-container row">
          {topRated?.map((movie) => (
            <div
              key={movie.id}
              className="box col-5 col-sm-4 col-md-2"
              onClick={() => navicate(`/movie/${movie.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
              />

              <p className="time">{movie.release_date?.split("-")[0]}</p>

              <p className="title">{movie.title}</p>

              <div className="type-container">
                <span>Movie</span>
                <span>⭐ {movie.vote_average?.toFixed(1)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="latest-movies">
        <h4>Top Rated TV Shows</h4>

        <div className="movies-container row">
          {TopRatedTvShows?.map((tv) => (
            <div
              key={tv.id}
              className="box col-5 col-sm-4 col-md-2"
              onClick={() => navicate(`/tv/${tv.id}`)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                alt={tv.name}
                loading="lazy"
              />

              <p className="time">{tv.first_air_date?.split("-")[0]}</p>

              <p className="title">{tv.name}</p>

              <div className="type-container">
                <span>TV Show</span>
                <span>⭐ {tv.vote_average?.toFixed(1)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};
const Main = styled.div`
  min-height: 100vh;
    margin-right: 20px;
    margin-left: 20px;
        // overflow-x: hidden;
    @media(max-width:668px) {
         margin-right: 10px;
        margin-left: 10px;

    }
  .header {
  }

  .group-bottons {
    gap: 5px;

    span {
      height: 85px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      color: #b89564;
      margin-bottom: 5px;
      width: 100%;
      border: 1px solid #eee;
      cursor: pointer;
    }
  }

  h2 {
    font-size: 2.25rem;
      color: white;
    font-weight: 800;
  }

  .cate-title {
    height: 112px;
    background: #b89564;
    color: white;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    width: 100%;
    box-shadow: 0px -6px 70px 0px rgba(184, 149, 100, 0.45);
  }

  .active-tab {
    background-color: white !important;
  }

  .distin {
    color: #b89564;
    margin-right: 8px;
    margin-bottom: 3px;
  }



    .child {
      // border: 1px solid #b89564;
      padding: 1rem;
      box-shadow: 0px -6px 22px 0px rgba(184, 149, 100, 0.45);
      border-radius: 10px;

      img {
        max-width: 100%;
        border-radius: 10px;
      }

      p {
        padding: 1.25rem;
        color: #b89564;
      }
    }
  }
      & .delete-btn {
    padding: 5px;
    color: #b89564;
    border: 1px solid #b89564;
    border-radius: 6px;
    display: flex;
    width: fit-content;
    margin: 0px 10px 10px auto;
    margin-top: 10px;
    cursor: pointer;
  }

  & .carousel-inner {
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0px -6px 22px 0px rgba(184, 149, 100, 0.45);
    background: rgb(23, 23, 23);
    & img {
        object-fit: cover;
    }
  }
    & .movie-details {
    // color: #b89564;
    color: #ffffff80;
    background: #eeeeee00;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
     width: 100%;

     & .head-div {
      & .rate {
      & img {
    width: 15px;
    margin-right: 5px;
    margin-bottom: 3px;
      }
      span {
      }
      }
      & .year {
          margin-left: 15px;
      }
     }
    }

    & .trending-img-holder {
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
        width: 50px;

    }
              h4 {
    // color: #b89564;
    // margin: auto;
    color: white;
    width: fit-content;
    padding: 10px 0 10px 0;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
    font-weight: bold;
    font-size: 26px;
     }
    }

     & .my-slider {
     & .details {
    position: absolute;
         top: 180px;
    left: 10px;
     }
       overflow: auto;
           overflow-y: hidden;
     & .the-slide {
     display: flex;
    align-items: center;
    gap: 20px;
        margin-bottom: 15px;
     }

     & .box {
         position: relative;
      img {
          max-width: 300px;
              max-height: 250px;
      }
      h3 {
  
    margin-bottom: 3px;
    color: white;
    font-size: 23px;
    font-weight: bold;

      }
      p {
    //  position: absolute;
    // top: 137px;
    // left: 11px;
    font-size: 17px;
    font-weight: bold;
    color: #ffffff80;
      }
     }
     }
 & .latest-movies {
  h4 {
  }
  & .movies-container {
  color:white;
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
 }
& .hero {
      position: relative;
    width: 109%;
    height: 555px;
    overflow: hidden;
    top: -48px;
    left: -21px;
    mask-image: linear-gradient(to bottom, transparent, black 20%, black 75%, transparent);
         margin-bottom: -75px;


}


& .slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

& .slide.active {
  opacity: 1;
}

& .slide::after {
  // content: "";
  // position: absolute;
  // inset: 0;
  // background: rgba(0, 0, 0, 0.5);
}

& .hero-content {
position: relative;
    z-index: 2;
    color: white;
    padding-left: 28px;
    padding-top: 115px;
    max-width: 700px;


}

& .hero-content h1 {
         font-size: 2rem;
    font-weight: 300;
    letter-spacing: .025em;
    line-height: 1.25;
    --tw-text-opacity: 1;
    color: rgb(255 255 255 / var(--tw-text-opacity, 1));
    margin-bottom: 15px;
}




& .hero-content p {
  margin-top: 20px;
  font-size: 1.1rem;
      color: rgb(205 192 177);
    margin-bottom: 32px;
}

 & .rate-holder {
 & .imdb {
 background-color: #eab308;
    padding: 0px 5px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
        margin-right: 12px;
 }
 & .hd {
    border: 2px solid;
    background-color: #454545a6;
    border-color: #bababa54;
    border-width: 1px;
    border-radius: .25rem;
    padding: 3px 5px;
    font-weight: bold;
    margin-right: 7px;

 }
 .year {
 }

 }
  & .play-btn {
     background: #b89564;
    border-radius: 20px;
    padding: 10px 31px;
    /* color: #ffffff; */
    color: rgb(255 255 255);
 }
`;

export default Home;

// display: grid;
// grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
// gap: 20px;
// }
