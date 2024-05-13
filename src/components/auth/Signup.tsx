import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  function isValidEmail(email: string) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  function isSame(password1: string, password2: string) {
    if (password1 === password2) {
      return true;
    } else {
      return false;
    }
  }
  function handleSignup(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    e.preventDefault();
    return navigate("auth?mode=login");
  }

  // console.log(
  //   isValidEmail(email) &&
  //     isSame(password1, password2) &&
  //     password2.length > 1 &&
  //     name.length > 1
  // );

  return (
    <>
      <input
        type="text"
        className="rounded-md h-10 bg-bg-200 px-4"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        className="rounded-md h-10 bg-bg-200 px-4"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!isValidEmail(email) && email.length ? (
        <p className="text-gray-dark text-xs ml-3 mb-3">
          이메일 형식이 아닙니다.
        </p>
      ) : null}
      <input
        type="password"
        className="rounded-md h-10 bg-bg-200 px-4"
        placeholder="비밀번호"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
      />
      {password1.length < 8 && password1.length ? (
        <p className="text-gray-dark text-xs ml-3 mb-3">
          8자리 이상 입력해주세요.
        </p>
      ) : null}
      <input
        type="password"
        className="rounded-md h-10 bg-bg-200 px-4"
        placeholder="비밀번호 확인"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      {!isSame(password1, password2) && password2.length ? (
        <p className="text-gray-dark text-xs ml-3 mb-3">
          비밀번호가 일치하지 않습니다.
        </p>
      ) : null}

      {/* {isValidEmail(email) &&
      isSame(password1, password2) &&
      password2.length > 1 &&
      name.length > 1 ? (
        <button
          onClick={(e) => handleSignup(e)}
          className="bg-primary-200 text-bg-100 rounded-md h-10"
        >
          가입
        </button>
      ) : (
        <button
          disabled
          className="bg-gray-light cursor-not-allowed text-bg-100 rounded-md h-10 disabled:"
        >
          가입
        </button>
      )} */}

      <button
        onClick={(e) => handleSignup(e)}
        className="bg-primary-200 text-bg-100 rounded-md h-10 disabled:cursor-not-allowed disabled:bg-gray-light"
        disabled={
          !(
            isValidEmail(email) &&
            isSame(password1, password2) &&
            password2.length > 1 &&
            name.length > 1
          )
        }
      >
        가입
      </button>
    </>
  );
}
