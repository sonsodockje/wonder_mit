import { useState } from "react";
import { handleProflieImg, handleSignUp_ } from "../../firebase";

import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

export default function Signup() {
  // const navigate = useNavigate();

  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [number, setNumber] = useState("");
  const [interested, setInterested] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log(selectedFile);
  };

  function isValidEmail(email: string) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  function isValidNumber(number: string) {
    const numberRegex = /^\d{3}-\d{3,4}-\d{4}$/;
    return numberRegex.test(number);
  }
  function isSame(password1: string, password2: string) {
    if (password1 === password2) {
      return true;
    } else {
      return false;
    }
  }
  async function handleSignup(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> {
    e.preventDefault();

    // Profile picture upload
    if (file !== null && file.name !== null) {
      try {
        const url = await handleProflieImg(file, file.name);
        console.log("Download URL:", url);

        // Preparing user data for signup
        const data = {
          name: name,
          email: email,
          password: password1,
          number: number,
          interested: interested,
          photo: url,
        };

        // Handling signup and checking the return value
        const signupSuccess = await handleSignUp_(data);

        if (signupSuccess) {
          // Navigate to login page upon successful signup
          alert("회원가입 성공 ^0^");

          navigate("?mode=login");
        } else {
          // Handle signup failure (optional)
          console.error("Signup failed. Please try again.");
        }
      } catch (error) {
        console.error("Error uploading profile picture:", error);
      }
    } else {
      console.warn("No profile picture selected.");
    }
  }

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
      <input
        type="text"
        className=" h-13 border-2 w-full border-color-pink2 p-4 rounded-2xl  text-sm focus:outline-color-point-pink"
        placeholder="010-0000-0000"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {!isValidNumber(number) && number.length ? (
        <p className="text-gray-dark text-xs ml-3 mb-3 -mt-3 text-color-point-navy font-medium">
          전화번호를 정확하게 입력해주세요.
        </p>
      ) : null}
      <select
        className="border-2 border-color-pink2 text-sm rounded-2xl bg-color-white   focus:ring-color-point-pink focus:border-color-point-pink block p-4 "
        value={interested}
        onChange={(e) => {
          setInterested(e.target.value);
          console.log(interested);
        }}
      >
        <option selected>관심 분야 선택</option>
        <option value="1">게임</option>
        <option value="2">스포츠</option>
        <option value="3">생일카페</option>
        <option value="4">팝업스토어</option>
        <option value="5">미디어</option>
        <option value="6">음악</option>
        <option value="7">전자기기</option>
        <option value="8">문학</option>
        <option value="9">기타</option>
      </select>
      <div className="flex items-end justify-between">
        {file === null ? (
          <img
            className="rounded-2xl w-32 object-contain content-center border-2 border-color-point-pink "
            src="https://i.namu.wiki/i/bQlWG0bl0GVxb-NOM388lYVpfhdSFd5NJJTQ9RIfoEUK6dd4W5RmEl2ZxdgV9h5HmQLnXZY0GrZG3gwwBO4hTQ.webp"
            alt=""
          />
        ) : (
          <img
            className="rounded-2xl w-32 h-32 object-cover content-center border-2 border-color-point-pink "
            src={URL.createObjectURL(file)}
            alt=""
          />
        )}

        <div>
          {/* <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG</p> */}
          <label
            className="block h-13 cursor-pointer bg-color-point-pink text-color-white p-4 px-16 rounded-2xl  text-sm"
            htmlFor="file_input"
          >
            프로필 사진 선택
          </label>
          <input
            className="hidden"
            id="file_input"
            type="file"
            onChange={handleFileChange}
          />
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
            name.length > 1 &&
            Number(interested) > 0 &&
            isValidNumber(number)
          )
        }
      >
        가입
      </button>
    </div>
  );
}
