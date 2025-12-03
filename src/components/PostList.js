import React, { useEffect, useState } from "react";
import Paganation from "./Paganation";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMaxPosts,
  fetchPosts,
  getPostsCount,
} from "../redux/apiCalls/postApiCall";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
const PostList = () => {
  const { posts, search, maxPosts } = useSelector((state) => state.post);
  const { postsCount } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const navicate = useNavigate();
  const POST_PER_PAGE = 8;

  const [currentPage, setcurrentPage] = useState(1);
  const pages = Math.ceil(postsCount / POST_PER_PAGE);
  useEffect(() => {
    dispatch(fetchPosts(currentPage));
    dispatch(fetchMaxPosts());
  }, [currentPage]);

  useEffect(() => {
    dispatch(getPostsCount());
  }, [getPostsCount]);
  console.log(posts);
  return (
    <Holder>
      <div className="">
        <div className="holder">
          {posts?.map((item) => (
            // <PostItem post={item} key={item?._id} />
            <div
              className="child"
              onClick={() => navicate(`/product-page/${item?._id}`)}
            >
              <img src={item?.images[0].url} alt="" />
              <p>
                Ultra-exclusive luxury residence interior design in Doha – Villa
                Project
              </p>
            </div>
          ))}
        </div>

        <div className="col-12 mt-3">
          {/* {posts?.length > 2 && ( */}
          <Paganation
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
            pages={pages}
          />
          {/* )} */}
        </div>
      </div>
    </Holder>
  );
};

const Holder = styled.div`
  padding-top: 50px;

    .holder {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    margin-top: 0px;
    gap: 20px;
`;

export default PostList;
