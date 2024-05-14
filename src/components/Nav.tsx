import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/userInfo";
import Search from "./main/Search";
import { FaRegUser } from "react-icons/fa";

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
    <div className="container mt-10 mb-5 flex flex-row justify-between items-center">
      <div className="flex flex-row gap-10 items-center">
        <div className="cursor-pointer">
          <Link to={"/"}>
            <img src="logo.png" alt="" className="h-5 mt-0.5" />
          </Link>
        </div>
        <div>
          <Link to={"upload"} className="text-color-point-pink font-bold text-sm">
            행사 개최하기
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Search />
        {isLogin ? <Logout /> : <Login />}
      </div>
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
    <div className="flex flex-row gap-2 items-center ">
      <div>
        <Link to={"mypage"}>
          <button className="bg-color-point-pink p-3 text-color-white rounded-lg">
            <FaRegUser />
          </button>
        </Link>
      </div>
      <button
        onClick={out}
        className="bg-color-point-pink text-color-white  px-3 py-2 rounded-lg"
      >
        로그아웃
      </button>
    </div>
  );
}

function Login() {
  return (
    <>
    <Link to={"/auth?mode=login"}>
      <button className="bg-color-point-pink text-color-white  px-3 py-2 rounded-lg">
        로그인
      </button>
      
    </Link>
    <Link to={"/auth?mode=signup"}>
      <button className="bg-color-point-pink text-color-white  px-3 py-2 rounded-lg">
       회원가입
      </button>
      
    </Link>
    </>
  );
}

export default Nav;
