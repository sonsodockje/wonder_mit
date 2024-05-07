import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/userInfo";

function Nav() {
  const [data, setData] = useState({});
  const isLogin = useUserStore((state: any) => state.isLogin);

  useEffect(() => {
    function userLoginCheck() {
      const _data = localStorage.getItem("data");

      if (_data === null) {
        return;
      }

      setData(JSON.parse(_data));
      console.log(data);
    }
    userLoginCheck();
  }, []);

  return <p>{isLogin ? <Logout /> : <Login />}</p>;
}

function Logout() {
  const isLgoinTolgle = useUserStore((state: any) => state.logout);

  function out() {
    sessionStorage.clear();
    isLgoinTolgle();
    localStorage.clear();
  }
  return <button onClick={out}>로그아웃</button>;
}

function Login() {
  return (
    <Link to={"/auth"}>
      <button>로그인</button>
    </Link>
  );
}
export default Nav;
