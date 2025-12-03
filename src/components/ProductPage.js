import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchSinglePost } from "../redux/apiCalls/postApiCall";
const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
  console.log(post);

  useEffect(() => {
    dispatch(fetchSinglePost(id));
  }, [id]);

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
      <div className="img-container">
        {post?.images.map((item) => (
          <img src={item?.url} alt="" />
        ))}
      </div>
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
`;
export default ProductPage;
