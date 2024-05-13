import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  function isValidEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function handleLogin(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    e.preventDefault();
    // 여기서 다른 작업을 수행하거나 필요한 함수를 호출할 수 있습니다.
    return navigate("/");
  }

  return (
    <>
      <input
        type="email"
        placeholder="이메일"
        className="rounded-md h-10 bg-bg-200 px-4  text-sm"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!isValidEmail(email) && email.length ? (
        <p className="text-gray-dark text-xs ml-3 mb-3">
          이메일 형식이 아닙니다.
        </p>
      ) : null}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호"
          className="rounded-md h-10 bg-bg-200 px-4  w-full text-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p
          onClick={handleClickShowPassword}
          className="cursor-pointer absolute right-4 top-2.5 text-gray text-sm"
        >
          {showPassword ? "비밀번호 가리기" : "비밀번호 보기"}
        </p>
      </div>

      <button
        onClick={(e) => handleLogin(e)}
        className="bg-primary-200 text-bg-100 rounded-md h-10 disabled:cursor-not-allowed disabled:bg-gray-light"
        disabled={!isValidEmail(email)}
      >
        로그인
      </button>
    </>
  );
}
