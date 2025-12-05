import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { deletePostApi, fetchSinglePost } from "../redux/apiCalls/postApiCall";
import swal from "sweetalert";
const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navicate = useNavigate();
  const { post } = useSelector((state) => state.post);
  console.log(post);

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
  return (
    <Main className="container">
      <div className=" mt-5 pt-4 pb-4">
        <Link className="home-link" to={`/`}>
          Home Page | Interior Design Work |
        </Link>{" "}
        <span className="small-title">{post?.title.toLowerCase()}</span>
      </div>
      <div className="holder row">
        <img className="col-md-8" src={post?.images[0]?.url} alt="" />
        <div className="col-md-4">
          <h2 className="title">{post?.title}</h2>
          <div className="desc-holder">
            <p className="desc">{post?.description}</p>
          </div>
        </div>
      </div>
      {/* <div className="img-container">
        {post?.images.map((item) => (
          <img src={item?.url} alt="" />
        ))}
      </div> */}

      <>
        <div className="img-container">
          {post?.images.map((item, index) => (
            <img
              key={index}
              src={item?.url}
              alt=""
              onClick={() => setZoomImage(item?.url)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>

        {/* Modal لعرض الصورة */}
        {zoomImage && (
          <div
            className="image-modal-overlay"
            onClick={() => setZoomImage(null)}
          >
            <img src={zoomImage} className="image-modal" alt="" />
          </div>
        )}
      </>
      <botton className="delete-btn" onClick={deleteProduct}>
        Delete Product
      </botton>
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
`;
export default ProductPage;
