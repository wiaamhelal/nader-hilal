import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../redux/apiCalls/authApiCall";
import styled from "styled-components";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navicate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      navicate("/");
    }
  }, [user]);

  const register = (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("email is required");
    } else if (!password) {
      return toast.error("password is required");
    } else {
      // dispatch(loginUser({ email, password }));
    }
  };

  return (
    <Holder>
      <Main>
        <div className="container  make-center">
          <div
            style={{ maxWidth: "500px" }}
            className="m-auto shadow rounded p-3  container"
          >
            <h2 className="text-center">Login to your account</h2>
            <form>
              <label className="mb-2">email</label>
              <input
                type="email"
                onChange={(e) => setemail(e.target.value)}
                placeholder="enter your email"
                className="imputss w-100 "
              />
              <label className="mb-2">password</label>
              <input
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                placeholder="enter your password"
                className="imputss w-100 "
              />
              <button
                onClick={register}
                className="btn btn-success w-100 my-botton mt-3"
              >
                Submit
              </button>
            </form>
            {/* <p className="mt-4 text-center">
              did you forget your password?{" "}
              <Link to="/forget-password">forget password</Link>
            </p> */}
          </div>
        </div>
      </Main>
    </Holder>
  );
};

const Holder = styled.div`
  padding-top: 80px;
  min-height: 100vh;
`;

const Main = styled.div`
  color: #b89564;
  max-width: 500px;
  margin: auto;
  box-shadow: 0px -6px 22px 0px rgba(184, 149, 100, 0.45);
  padding: 10px;
  border-radius: 10px;

  & .imputss {
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
  & .my-botton {
    background-color: #b89564;
    margin-top: 15px;
  }
`;

export default Login;
