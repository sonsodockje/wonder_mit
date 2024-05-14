import { useState } from "react";

import GoogleLogin from "./GoogleLogin";
import { handleFirebaseLogin } from "../../firebase/index.js"
import { useUserStore } from "../../store/userInfo.js";

export default function Login() {

  const isLgoinTolgle = useUserStore((state: any) => state.login);
  const isLogin = useUserStore((state: any) => state.isLogin);



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  function isValidEmail(email: string) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }


  function handleLogin(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    e.preventDefault();
  const userData = {
    email: email,
    password: password
  }
    handleFirebaseLogin(userData)
    isLgoinTolgle();
   
  }

  return (
    <div className="flex flex-col w-[80%] mx-auto gap-4">
      <input
        type="email"
        placeholder="이메일"
        className=" h-13 border-2 w-full border-color-pink2 p-4 rounded-2xl  text-sm focus:outline-color-point-pink"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!isValidEmail(email) && email.length ? (
        <p className="text-gray-dark text-xs ml-3 mb-3 -mt-3 text-color-point-navy font-medium">
          이메일 형식이 아닙니다.
        </p>
      ) : null}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호"
          className=" bg-bg-200 p-4  w-full text-sm h-13 border-2 border-color-pink2 rounded-2xl focus:outline-color-point-pink"

          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p
          onClick={handleClickShowPassword}
          className="cursor-pointer absolute right-4 top-[18px] text-gray text-sm text-color-point-pink font-semibold"
        >
          {showPassword ? "비밀번호 가리기" : "비밀번호 보기"}
        </p>
      </div>

      <button
        onClick={(e) => handleLogin(e)}
        className="bg-color-point-pink mt-5 mb-1 text-color-white rounded-2xl h-14 disabled:cursor-not-allowed disabled:bg-color-pink1"
        disabled={!isValidEmail(email)}
      >
        로그인
      </button>
      <GoogleLogin />
    </div>
  );
}
