/* eslint-disable no-unused-vars */
import React, { useState } from "react";
//เข้าถึงค่าใน store redux
import { useSelector, useDispatch } from "react-redux";
import { authLogin } from "../services/api";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    // name: "dew",
    // email: "admin@gmail.com",
    // role: "admin",
    // token: "xzcapklredsfqwerqeqweewq",
    email: "",
    password: "",
  });

  //useDispatch คือการเปลี่ยนเเปลงค่าใน store
  const ditpatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        // Add more headers as needed
      },
    };
    try {
      const response = await axios.post(
        `https://animals-api.vercel.app/api/v1/login`,
        data,
        config
      );
      setData(response.data);

      ditpatch({
        type: "LOGIN",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }

    // console.log(user);
  };

  return (
    <>
      <div>
        <h1>Login Page</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
