import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useUserStore } from "../store/userInfo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function GoogleLogin() {
  const navigate = useNavigate();
  const isLgoinTolgle = useUserStore((state: any) => state.login);
  const isLogin = useUserStore((state: any) => state.isLogin);

  const auth = getAuth();
  auth.languageCode = "ko";

  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  function login() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        token && sessionStorage.setItem("user", token.toString());
        const user = result.user;
        console.log(user);
        isLgoinTolgle();
        user && localStorage.setItem("data", JSON.stringify(user));
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode, errorMessage, email, credential);
      });
  }

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  return (
    <div>
      <button onClick={login}>구글로 로그인</button>
    </div>
  );
}

export default GoogleLogin;