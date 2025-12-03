import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createNewPost } from "../redux/apiCalls/postApiCall";
import { json, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { fitchAllCategories } from "../redux/apiCalls/categoryApiCall";
import SelectWithSearch from "./SelectWithSearch.js";
import Select from "react-select";

const CreatePost = () => {
  const dispatch = useDispatch();
  const navicate = useNavigate();
  const { loading, isPostCreated } = useSelector((state) => state.post);
  const { categories } = useSelector((state) => state.category);
  const [title, settitle] = useState("");
  const [price, setprice] = useState(null);
  const [desc, setdesc] = useState("");
  // const [category, setcategory] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [productDetails, setproductDetails] = useState("");
  const [color, setcolor] = useState("");
  const [colors, setcolors] = useState([]);
  const [cate, setcate] = useState("");

  useEffect(() => {
    dispatch(fitchAllCategories());
  }, []);
  // const chosenCategory = categories.filter(
  //   (item) => item?.branchTitle == selectedOption?.value
  // );
  // const submitColor = (e) => {
  //   e.preventDefault();
  //   setcolors([...colors, color]);
  //   setcolor("");
  // };
  const [files, setfiles] = useState([]);
  const submitCreatepost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    files.forEach((img) => {
      formData.append("images", img);
    });

    // Add additional fields
    formData.append("description", desc);
    formData.append("title", title);
    formData.append("category", cate);
    dispatch(createNewPost(formData));
  };

  useEffect(() => {
    if (isPostCreated === true) {
      navicate("/");
    }
  }, [isPostCreated, navicate]);

  const options = categories
    ? categories.map((item) => ({
        value: item?.branchTitle,
        label: item?.branchTitle,
      }))
    : [];

  const AvailableSizes = ["One Room", "Hall Apartment"];

  const handleCheck = (value) => {
    if (cate === value) {
      setcate(null); // إلغاء التحديد إذا ضغط نفس الخيار
    } else {
      setcate(value); // تحديد الخيار المختار
    }
  };
  console.log(files);
  return (
    <Holder className="container">
      <Main>
        <h2 className="text-center">Create A Product</h2>
        <form onSubmit={submitCreatepost}>
          <input
            className="inputs"
            type="text"
            placeholder="product title"
            onChange={(e) => settitle(e.target.value)}
          />
          <div className="d-flex align-items-center justify-content-between mb-3 mt-3 product-contain">
            {/* <span>Product Contain:</span> */}
            {AvailableSizes.map((item) => (
              <div className="d-flex align-items-center">
                <input
                  id={item}
                  className="me-2"
                  type="checkbox"
                  checked={cate === item}
                  onChange={() => handleCheck(item)}
                />
                <label
                  htmlFor={item}
                  className=""
                  style={{ cursor: "pointer" }}
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
          <textarea
            onChange={(e) => setdesc(e.target.value)}
            className="inputs"
            placeholder="post description"
            rows={5}
          />
          {/* <textarea
            onChange={(e) => setproductDetails(e.target.value)}
            className="inputs"
            placeholder="Product details"
            rows={5}
          /> */}
          {/* <input
            type="file"
            multiple
            accept="image/*"
            name="file"
            id="file"
            onChange={(e) => setfile(e.target.files[0])}
          /> */}
          <input
            type="file"
            multiple
            accept="image/*"
            name="file"
            id="file"
            onChange={(e) => setfiles([...e.target.files])}
          />

          <div className="">
            {loading ? (
              <button className="btn my-botton w-100 p-0 text-whtie color-white">
                {" "}
                <RotatingLines
                  visible={true}
                  height="35"
                  width="35"
                  color="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </button>
            ) : (
              <button className="btn my-botton w-100">
                Create The Product
              </button>
            )}
          </div>
        </form>
      </Main>
    </Holder>
  );
};
const Holder = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;
const Main = styled.div`
  & h2 {
    color: #b89564;
  }
  max-width: 500px;
  margin: auto;
  // background: white;
  box-shadow: 0px -6px 22px 0px rgba(184, 149, 100, 0.45);

  padding: 10px;
  border-radius: 10px;
  & .inputs {
    // padding: 5px;
    // border-radius: 6px;
    // border: 1px solid #ccc;
    // outline: none;
    // display: block;
    // width: 100%;
    // resize: none;
    // margin-bottom: 10px;
    padding: 5px;
    border-radius: 6px;
    border: 0.5px solid #b89564;
    outline: none;
    display: block;
    width: 100%;
    resize: none;
    margin-bottom: 10px;
    background: transparent;
    color: white;
  }
  & .file {
    display: block;
  }
  & .product-contain {
    color: #b89564;
    opacity: 0.9;
  }

  & .my-botton {
    background-color: #b89564;
    margin-top: 15px;
  }
`;
export default CreatePost;
