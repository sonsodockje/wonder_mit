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
    <div className=" flex flex-col gap-4 mx-auto w-[80%]">

      <input
        type="text"
        className=" h-13 border-2 w-full border-color-pink2 p-4 rounded-2xl  text-sm focus:outline-color-point-pink"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        className=" h-13 border-2 w-full border-color-pink2 p-4 rounded-2xl  text-sm focus:outline-color-point-pink"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {!isValidEmail(email) && email.length ? (
        <p className="text-gray-dark text-xs ml-3 mb-3 -mt-3 text-color-point-navy font-medium">
        이메일 형식이 아닙니다.
        </p>
      ) : null}
      <input
        type="password"
        className=" h-13 border-2 w-full border-color-pink2 p-4 rounded-2xl  text-sm focus:outline-color-point-pink"
        placeholder="비밀번호"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
      />
      {password1.length < 8 && password1.length ? (
        <p className="text-gray-dark text-xs ml-3 mb-3 -mt-3 text-color-point-navy font-medium">
        8자리 이상 입력해주세요.
        </p>
      ) : null}
      <input
        type="password"
        className=" h-13 border-2 w-full border-color-pink2 p-4 rounded-2xl  text-sm focus:outline-color-point-pink"
        placeholder="비밀번호 확인"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      {!isSame(password1, password2) && password2.length ? (
        <p className="text-gray-dark text-xs ml-3 mb-3 -mt-3 text-color-point-navy font-medium">
        비밀번호가 일치하지 않습니다.
        </p>
      ) : null}
      <div className="flex justify-between  h-14 ">
        <input type="number" placeholder="010" className="text-center w-24 border-2 p-4 border-color-pink2  rounded-2xl  text-sm focus:outline-color-point-pink" />
        <input type="number" placeholder="1234" className="text-center  w-28 border-2 p-4 border-color-pink2  rounded-2xl  text-sm focus:outline-color-point-pink" />
        <input type="number" placeholder="5678" className="text-center  w-28 border-2 p-4 border-color-pink2  rounded-2xl  text-sm focus:outline-color-point-pink" />
      </div>
      <select id="countries" className="border-2 border-color-pink1 text-sm rounded-2xl focus:ring-color-point-pink focus:border-color-point-pink block p-4 ">
        <option selected>관심 분야 선택</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
      <div className="flex items-end justify-between">
        <img 
        className="rounded-2xl w-32 object-contain content-center border-2 border-color-point-pink "
        src="https://i.namu.wiki/i/bQlWG0bl0GVxb-NOM388lYVpfhdSFd5NJJTQ9RIfoEUK6dd4W5RmEl2ZxdgV9h5HmQLnXZY0GrZG3gwwBO4hTQ.webp" alt="" />
        <div>
        {/* <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG</p> */}
          <label className="block h-13 cursor-pointer bg-color-point-pink text-color-white p-4 px-16 rounded-2xl  text-sm" htmlFor="file_input">프로필 사진 선택</label>
          <input className="hidden"  id="file_input" type="file"/>
          
        </div>
        
      </div>
     

      <button
        onClick={(e) => handleSignup(e)}
        className="bg-color-point-pink mt-5 mb-1 text-color-white rounded-2xl h-14 disabled:cursor-not-allowed disabled:bg-color-pink1"
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
    </div>
  );
}
