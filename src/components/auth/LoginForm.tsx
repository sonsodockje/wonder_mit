import { Form, Link, useSearchParams } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

export default function LoginForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  function handleLogin(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    e.preventDefault();
    // 여기서 다른 작업을 수행하거나 필요한 함수를 호출할 수 있습니다.
  }

  function handleSignup(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    e.preventDefault();
    // 여기서 다른 작업을 수행하거나 필요한 함수를 호출할 수 있습니다.
  }

  return (
    <div className="container mt-[100px] ">
      <Form className="flex flex-col gap-2 mb-10 mx-auto max-w-md">
        <h2 className="text-center text-2xl">
          {isLogin ? "로그인" : "회원가입"}
        </h2>
        <input
          type="text"
          name="email"
          className="rounded-md h-10 bg-bg-200 px-4"
        />
        <input
          type="password"
          name="password"
          className="rounded-md h-10 bg-bg-200 px-4"
        />
        {!isLogin ? (
          <button
            onClick={(e) => handleSignup(e)}
            className="bg-primary-200 text-bg-100  rounded-md h-10"
          >
            가입
          </button>
        ) : (
          <button
            onClick={(e) => handleLogin(e)}
            className="bg-primary-200 text-bg-100 rounded-md h-10"
          >
            로그인
          </button>
        )}
        <GoogleLogin />
        <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
          <p className="text-right">{!isLogin ? "로그인" : "회원가입"}</p>
        </Link>
      </Form>
    </div>
  );
}
