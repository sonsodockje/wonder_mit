import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYEHIyKYdg1f159ngvh7U8DDOSheaLrzs",
  authDomain: "wondermit-dd72d.firebaseapp.com",
  projectId: "wondermit-dd72d",
  storageBucket: "wondermit-dd72d.appspot.com",
  messagingSenderId: "552542445190",
  appId: "1:552542445190:web:6b9f274c3fc3254acd7b07",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();

export function handleFirebaseLogin(userinfo: any): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, userinfo.email, userinfo.password)
      .then((userCredential: any) => {
        // Signed in
        const user = userCredential.user;
        console.log("로그인 완", user);
        localStorage.setItem("loginUserInfo", JSON.stringify(user));
        resolve(true);
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === "auth/invalid-credential") {
          alert("아이디, 비밀번호를 확인해주세요.");
        } else if (errorCode === "auth/missing-password") {
          alert("비밀번호를 입력해주세요.");
        } else {
          alert(errorMessage);
        }

        reject(false);
      });
  });
}

export function handleProflieImg(
  file: File,
  fileName: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    const imagesRef = ref(storage, `userInfoImgs/${fileName}`);

    uploadBytes(imagesRef, file)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");

        getDownloadURL(snapshot.ref)
          .then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL); // 다운로드 URL을 해결하여 반환
          })
          .catch((error) => {
            reject(error); // 에러 발생 시 reject
          });
      })
      .catch((error) => {
        reject(error); // 에러 발생 시 reject
      });
  });
}

// export function handleSignUp_(data: any): Promise<boolean> {
//   const auth = getAuth();

//   return createUserWithEmailAndPassword(auth, data.email, data.password)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(user);
//       // 데이터 베이스에 저장하기

//       return true;
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage);
//       return false;
//     });
// }
