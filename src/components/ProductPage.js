import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { deletePostApi, fetchSinglePost } from "../redux/apiCalls/postApiCall";
import swal from "sweetalert";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navicate = useNavigate();
  const { post } = useSelector((state) => state.post);

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState("");
  console.log(movie);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

        const [details, credits, videos] = await Promise.all([
          axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=5cb3971f2ed6c001df1ae772ee291eb2`
          ),

          axios.get(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=5cb3971f2ed6c001df1ae772ee291eb2`
          ),

          axios.get(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=5cb3971f2ed6c001df1ae772ee291eb2`
          ),
        ]);

        setMovie(details.data);

        setCast(credits.data.cast.slice(0, 10));

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
  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [id]);
  const [zoomImage, setZoomImage] = useState(null);
  const deleteProduct = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deletePostApi(post?._id));
        navicate(`/`);
        // window.location.reload(false);
      }
    });
  };
  if (!movie) {
    return <h2>Loading...</h2>;
  }
  return (
    // <Main className="container">
    //   {movie?.map((item, index) => (
    //     <>
    //       <div className=" mt-5 pt-4 pb-4">
    //         <Link className="home-link" to={`/`}>
    //           Home Page | Interior Design Work |
    //         </Link>{" "}
    //         <span className="small-title">{post?.title.toLowerCase()}</span>
    //       </div>
    //       <div className="holder row">
    //         <img className="col-md-8" src={post?.images[0]?.url} alt="" />
    //         <div className="col-md-4">
    //           <h2 className="title">{post?.title}</h2>
    //           <div className="desc-holder">
    //             <p className="desc">{post?.description}</p>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="img-container">
    //         <img
    //           key={index}
    //           src={item?.url}
    //           alt=""
    //           onClick={() => setZoomImage(item?.url)}
    //           style={{ cursor: "pointer" }}
    //         />
    //       </div>

    //       <div
    //         className="image-modal-overlay"
    //         onClick={() => setZoomImage(null)}
    //       >
    //         <img src={zoomImage} className="image-modal" alt="" />
    //       </div>

    //       <botton className="delete-btn" onClick={deleteProduct}>
    //         Delete Product
    //       </botton>
    //     </>
    //   ))}
    // </Main>
    <Main className="container">
      <div className="mt-5 pt-4 pb-4">
        <Link className="home-link" to="/">
          Home Page
        </Link>

        <span className="small-title">{movie?.title}</span>
      </div>

      <div className="holder row">
        <img
          className="col-md-8"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="col-md-4">
          <h2 className="title">{movie?.title}</h2>

          <div className="movie-info">
            <p>⭐ {movie?.vote_average?.toFixed(1)}</p>

            <p>📅 {movie?.release_date}</p>

            <p>⏱ {movie?.runtime} min</p>

            <p>🎭 {movie?.genres?.map((genre) => genre.name).join(", ")}</p>
          </div>

          <div className="desc-holder">
            <p className="desc">{movie?.overview}</p>
          </div>
        </div>
      </div>

      {trailer && (
        <div className="mt-5">
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

      <div className="cast-section mt-5">
        <h3>Cast</h3>

        <div className="row">
          {cast?.map((actor) => (
            <div key={actor.id} className="col-6 col-md-2 text-center">
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                }}
              />

              <p>{actor.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="img-container">
        {images?.map((image, index) => (
          <img
            key={index}
            src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
            alt=""
            onClick={() =>
              setZoomImage(
                `https://image.tmdb.org/t/p/original${image.file_path}`
              )
            }
            style={{ cursor: "pointer" }}
          />
        ))}
      </div> */}

      {zoomImage && (
        <div className="image-modal-overlay" onClick={() => setZoomImage(null)}>
          <img src={zoomImage} className="image-modal" alt="" />
        </div>
      )}
    </Main>
  );
};
const Main = styled.div`
  min-height: 100vh;
  & .home-link {
    color: #b89564;
    font-size: 14px;
  }
  & .small-title {
    color: rgb(205 192 177);
    font-size: 14px;
    margin-left: 5px;
  }
  & .holder {
    & img {
      max-width: 100%;
      height: fit-content;
      border-radius: 20px;
    }
    & .title {
      color: #b89564;
      margin-bottom: 15px;
      margin-top: 15px;
    }
    & .desc {
      color: rgb(205 192 177);
      line-height: 1.7;
    }
  }
  & .desc-holder {
    max-height: 310px;
    overflow: auto;
  }

  & .img-container {
    display: grid;
    // grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    margin-top: 40px;
    gap: 10px;
    & img {
      max-width: 100%;
      border: 1px solid #b89564;
    }
  }
  & .delete-btn {
    padding: 5px;
    color: #b89564;
    border: 1px solid #b89564;
    border-radius: 6px;
    display: flex;
    width: fit-content;
    margin: auto;
    margin-top: 10px;
    cursor: pointer;
  }
  & .movie-info {
    color: white;
  }
`;
export default ProductPage;
