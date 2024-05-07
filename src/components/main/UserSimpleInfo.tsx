import { useUserStore } from "../../store/userInfo";

export default function UserSimpleInfo() {
  const isLogin = useUserStore((state: any) => state.isLogin);

  if (!isLogin) {
    return <div>로그인하세요</div>;
  }

  const userDataString = localStorage.getItem("data");

  if (userDataString !== null) {
    const userData = JSON.parse(userDataString);
    // console.log(userData);
    return (
      <>
        <p>{userData.displayName} 님</p>
        <img src={userData.photoURL} alt="" />
      </>
    );
  }
}
