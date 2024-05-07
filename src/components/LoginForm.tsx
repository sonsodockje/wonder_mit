import { Form } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";

export default function LoginForm() {
  return (
    <>
      <Form method="post">
        <p>
          <input type="text" name="email" />
        </p>

        <p>
          <input type="text" name="password" />
        </p>

        <p>
          <button type="submit">로그인</button>
        </p>
      </Form>
      <GoogleLogin />
    </>
  );
}
