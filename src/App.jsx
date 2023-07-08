import Home from "./components/Home";
import Login from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import HomeAdmin from "./components/admins/Home";
import { useEffect, useState } from "react";

function App() {
  const [isHave, setIsHave] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  //useDispatch คือการเปลี่ยนเเปลงค่าใน store
  const ditpatch = useDispatch();
  const data = localStorage.getItem("user");
  const FormatData = JSON.parse(data);

  useEffect(() => {
    if (data) {
      setIsHave(true);
      ditpatch({
        type: "REFRESH",
        payload: FormatData,
      });
    }
  }, [data]);

  // console.log(JSON.parse(user));

  return (
    <>
      {!user ? <Login /> : user.role === "user" ? <Home /> : <HomeAdmin />}
    </>
  );
}

export default App;
