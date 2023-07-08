/* eslint-disable no-unused-vars */
import React, { useState } from "react";
//เข้าถึงค่าใน store redux
import { useSelector, useDispatch } from "react-redux";

const Page1 = () => {
  const [data, setData] = useState({
    name: "dew",
    email: "admin@gmail.com",
    role: "admin",
    token: "xzcapklredsfqwerqeqweewq",
  });
  //useDispatch คือการเปลี่ยนเเปลงค่าใน store
  const ditpatch = useDispatch();

  //useSelector คือการเข้าถึง Store
  const { user } = useSelector((state) => ({ ...state }));

  const handleLogin = (e) => {
    e.preventDefault();
    ditpatch({
      type: "LOGIN",
      payload: { data },
    });
    // console.log(user);
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    ditpatch({
      type: "LOGOUT",
      payload: null,

    });
  };

  return (
    <>
      <div>Page1 token : {user?user.data.token:''} </div>
      <button onClick={handleLogin}>Login</button>

      <hr />
      <button onClick={handleLogOut}>Logout</button>
    </>
  );
};

export default Page1;
