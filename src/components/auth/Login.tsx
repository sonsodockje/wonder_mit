export default function Login() {
  function handleLogin(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    e.preventDefault();
    // 여기서 다른 작업을 수행하거나 필요한 함수를 호출할 수 있습니다.
  }

  return (
    <>
      <input
        type="email"
        placeholder="이메일"
        className="rounded-md h-10 bg-bg-200 px-4  text-sm"
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="rounded-md h-10 bg-bg-200 px-4  text-sm"
      />

      <button
        onClick={(e) => handleLogin(e)}
        className="bg-primary-200 text-bg-100 rounded-md h-10 "
      >
        로그인
      </button>
    </>
  );
}
