import { useUserStore } from "../../store/userInfo";

export default function UserSimpleInfo() {
  const isLogin = useUserStore((state: any) => state.isLogin);

  if (!isLogin) {
    return (
      <div className="p-5 h-[300px] bg-color-white gap-8 flex-col rounded-lg shadow-lg flex items-center justify-center">
        <p>로그인부탁</p>
      </div>
    );
  }

  const userDataString = localStorage.getItem("loginUserInfo");

  if (userDataString !== null) {
    const userData = JSON.parse(userDataString);

    return (
      <div className="p-5 h-[300px] bg-color-white gap-8 flex-col rounded-lg shadow-lg flex items-center justify-center">
        <div className="flex gap-3 items-center">
          <div className="w-[120px] h-[120px] border-2 border-color-point-pink rounded-full bg-color-blue overflow-hidden">
            <img
              src={userData.photoURL}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col">
            <p>{userData.displayName}</p>
            <p>#체육 #주짓수</p>
            <p>운동 수집 전문가</p>
          </div>
        </div>
        <div className="flex gap-2 flex-col w-full">
          <p
            className="w-full text-center py-2 border-2 border-color-point-pink text-sm  rounded-lg font-semibold
 text-color-point-pink "
          >
            즐겨찾기 행사 11개
          </p>
          <p
            className=" w-full text-center py-2 border-2 border-color-point-pink text-sm rounded-lg font-semibold
 text-color-point-pink"
          >
            참가한 행사 11개
          </p>
        </div>
      </div>
    );
  }
}
