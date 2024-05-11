import { Form, Link, useSearchParams } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import Login from "./Login";
import Signup from "./Signup";

export default function LoginForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <div className="container mt-[100px] ">
      <Form className="flex flex-col gap-2 mb-10 mx-auto max-w-md">
        <h2 className="text-center text-2xl">
          {isLogin ? "로그인" : "회원가입"}
        </h2>
        {isLogin ? <Login /> : <Signup />}
        <GoogleLogin />
        <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
          <p className="text-right">{isLogin ? "회원가입" : "로그인"}</p>
        </Link>
      </Form>
    </div>
  );
}
