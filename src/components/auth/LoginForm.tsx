import { Form, Link, useSearchParams } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

export default function LoginForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <div className="container mt-[70px] ">
      <Form className="flex flex-col gap-2 mb-10 mx-auto max-w-md ">
        <h2 className="text-center text-2xl font-semibold mb-2">
          {isLogin ? "로그인" : "회원가입"}
        </h2>
        {isLogin ? <Login /> : <Signup />}
       
        <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
          <span className="text-xs mt-16 float-end mr-12 text-color-point-pink font-semibold">{isLogin ? "회원이 아니신가요?" : "이미 회원이신가요?"}</span>
        </Link>
      </Form>
    </div>
  );
}
