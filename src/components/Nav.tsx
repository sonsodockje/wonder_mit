import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/userInfo";
import Search from "./main/Search";

function Nav() {
  const [data, setData] = useState({});
  const isLogin = useUserStore((state: any) => state.isLogin);

  useEffect(() => {
    function userLoginCheck() {
      const _data = localStorage.getItem("data");

      if (_data === null) {
        return null;
      }

      setData(JSON.parse(_data));
      console.log(data);
    }
    userLoginCheck();
  }, []);

  return (
    <div className="container mt-10 mb-5 p-5 flex flex-row justify-between border-[0.5px]">
      <div className="flex flex-row gap-5">
        <div className="cursor-pointer">
          <Link to={"/"}>로고</Link>
        </div>
        <Search />
        <div>
          <Link to={"upload"}>개최하기</Link>
        </div>
      </div>
      <div>{isLogin ? <Logout /> : <Login />}</div>
    </div>
  );
}

function Logout() {
  const isLgoinTolgle = useUserStore((state: any) => state.logout);

  function out() {
    sessionStorage.clear();
    isLgoinTolgle();
    localStorage.clear();
  }

  return (
    <div className="flex flex-row gap-5">
      <div>
        <Link to={"mypage"}>마이페이지</Link>
      </div>
      <button onClick={out}>로그아웃</button>
    </div>
  );
}

function Login() {
  return (
    <Link to={"/auth"}>
      <button>로그인</button>
    </Link>
  );
}

export default Nav;
