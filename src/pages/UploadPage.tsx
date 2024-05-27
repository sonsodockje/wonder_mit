import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userInfo";
import { useEffect, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";

import "@toast-ui/editor/dist/toastui-editor.css";
import AddressForm from "../components/AddressForm";

function UploadPage() {
  const navigate = useNavigate();
  const isLogin = useUserStore((state: any) => state.isLogin);

  useEffect(() => {
    if (!isLogin) {
      return navigate("auth?mode=login");
    }
  }, []);

  const onCompletePost = (data) => {
    console.log(data);
  }; // onCompletePost 함수

  return (
    <div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="행사명"
          className="w-full border rounded-2xl p-3 mb-4 bg-color-grey"
        />
        <select
          name=""
          id=""
          className="w-[300px] border rounded-2xl p-3 mb-4 bg-color-grey"
        >
          <option value="">강연</option>
        </select>
      </div>
      <MyComponent />
      <div className="mt-8 mb-8">
        <p>옵션</p>
        <div className="border rounded-2xl p-12 "></div>
      </div>
      <div className="mt-8 mb-8">
        <p>날짜</p>
        <div className="border rounded-2xl p-12 "></div>
      </div>
      <div className="mt-8 mb-8">
        <p>결제</p>
        <div className="border rounded-2xl p-12 "></div>
      </div>
      <div className="mt-8 mb-8">
        <p>주소</p>
        <div className="border rounded-2xl p-12 ">
          <AddressForm />
        </div>
      </div>
      <div className="mt-8 mb-8">
        <p>참가비</p>
        <div className="border rounded-2xl p-12 "></div>
      </div>
      <div className="mt-8 mb-8">
        <p>참가자 칭호</p>
        <div className="border rounded-2xl p-12 "></div>
      </div>
      <button className="bg-color-point-pink text-color-white  px-3 py-2 rounded-lg">
        미리보기
      </button>
      <button className="bg-color-point-pink text-color-white  px-3 py-2 rounded-lg">
        등록
      </button>
    </div>
  );
}

export default UploadPage;

function MyComponent() {
  const editorRef = useRef(null);

  const handleSave = () => {
    let markDownContent = editorRef.current.getInstance().getMarkdown();
    console.log(markDownContent);
  };
  return (
    <>
      <Editor
        ref={editorRef}
        initialValue="본문을 입력해주세요."
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />

      <button
        className="bg-color-point-pink text-color-white  px-3 py-2 rounded-lg"
        onClick={handleSave}
      >
        저장
      </button>
    </>
  );
}
