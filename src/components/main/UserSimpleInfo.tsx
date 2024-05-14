import { useUserStore } from "../../store/userInfo";

export default function UserSimpleInfo() {
  const isLogin = useUserStore((state: any) => state.isLogin);

  if (!isLogin) {
    return (
      <div className="p-5 h-[300px]">
        <p>로그인하세요</p>
      </div>
    );
  }

  const userDataString = localStorage.getItem("data");

  if (userDataString !== null) {
    const userData = JSON.parse(userDataString);
    // console.log(userData);
    return (
      <div className="p-5 h-[300px] bg-color-white rounded-lg shadow-lg">
        <p>{userData.displayName} 님</p>
        <img src={userData.photoURL} alt="" />
      </div>
    );
  }
}
