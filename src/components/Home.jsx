import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  //useSelector คือการเข้าถึง Store
  const { user } = useSelector((state) => ({ ...state }));
  //useDispatch คือการเปลี่ยนเเปลงค่าใน store
  const ditpatch = useDispatch();
  const handleLogOut = (e) => {
    e.preventDefault();
    ditpatch({
      type: "LOGOUT",
      payload: null,
    });
  };
  return (
    <div>
      <h1> Welcome User: {user.first_name}</h1>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Token: {user.token}</p>
      <hr />
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default Home;
