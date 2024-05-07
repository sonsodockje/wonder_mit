import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userInfo";
import { useEffect } from "react";

function UploadPage() {
  const navigate = useNavigate();
  const isLogin = useUserStore((state: any) => state.isLogin);

  useEffect(() => {
    if (!isLogin) {
      return navigate("auth");
    }
  }, []);

  return (
    <div>
      <div className="" id="editor"></div>
    </div>
  );
}

export default UploadPage;
