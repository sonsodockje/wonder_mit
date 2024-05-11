import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  function handleSignup(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    e.preventDefault();
    // 여기서 다른 작업을 수행하거나 필요한 함수를 호출할 수 있습니다.
  }
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
      <input
        type="password"
        className="rounded-md h-10 bg-bg-200 px-4"
        placeholder="비밀번호"
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
      />
      <input
        type="password"
        className="rounded-md h-10 bg-bg-200 px-4"
        placeholder="비밀번호 확인"
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <button
        onClick={(e) => handleSignup(e)}
        className="bg-primary-200 text-bg-100 rounded-md h-10"
      >
        가입
      </button>
    </>
  );
}
