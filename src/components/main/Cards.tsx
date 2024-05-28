import { collection, getDocs, doc } from "firebase/firestore";

import { db } from "../../firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cards() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function getDB() {
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "events"));
  //       const data_ = [];
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.id, " => ", doc.data());

  //         data_.push({
  //           id: doc.id,
  //           data: doc.data(),
  //         });

  //         const querySnapshot = await getDocs(
  //           collection(db, "cities", "SF", "landmarks")
  //         );
  //         querySnapshot.forEach((doc) => {
  //           // doc.data() is never undefined for query doc snapshots
  //           console.log(doc.id, " => ", doc.data());
  //         });

  //       });
  //       setData(data_); // 루프가 끝난 후 데이터를 한 번에 설정
  //     } catch (e) {
  //       console.log("메인 페이지 행사데이터 불러오기 오류", e);
  //     }
  //   }
  //   getDB();
  // }, []);

  useEffect(() => {
    async function getDB() {
      try {
        const eventsSnapshot = await getDocs(collection(db, "events"));
        const eventsData = [];

        for (const doc of eventsSnapshot.docs) {
          console.log(doc.id, " => ", doc.data());

          const eventData = {
            id: doc.id,
            data: doc.data(),
          };

          // 메인 화면에서는 코멘트가 필요가 없잖아.....//.......

          // const comments = await getDocs(
          //   collection(db, "events", doc.id, "comments")
          // );

          // const commentData = [];
          // comments.forEach((landmarkDoc) => {
          //   console.log(landmarkDoc.id, " 하위ㅣ => ", landmarkDoc.data());
          //   commentData.push({
          //     id: landmarkDoc.id,
          //     data: landmarkDoc.data(),
          //   });
          // });

          // eventData.comments = commentData;
          eventsData.push(eventData);
          console.log(eventsData);
        }
        setData(eventsData);

        // setData(eventsData); // 데이터를 한 번에 설정
      } catch (e) {
        console.log("메인 페이지 행사데이터 불러오기 오류", e);
      }
    }
    getDB();
  }, []);

  return (
    <div className="flex mb-8">
      <Card data={data} />
    </div>
  );
}

function Card({ data }) {
  const formatToKRW = (num) => num.toLocaleString("ko-KR");

  return (
    <div className="flex gap-8">
      {data.map((event) => (
        <Link to={`detail?id=${event.id}`}>
          <div className=" w-[280px] " key={event.id}>
            <img
              className="object-cover object-center w-full h-[150px] rounded-xl mb-2"
              src="https://plus.unsplash.com/premium_photo-1669253767213-404f6888e895?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
              alt=""
            />
            <div className="flex justify-between font-bold">
              <p>{event.data.name}</p>
              <p className="tracking-tight">
                {formatToKRW(event.data.money)} 원
              </p>
            </div>
            <div className="text-color-pink3 flex gap-3">
              {/* <p>{event.data.date}</p> */}
              <p>날짜</p>
              <p>{event.data.adress.sido}</p>
            </div>
            <div className="flex gap-3 align-middle">
              <p>{event.data.user}</p>
              <p className=" bg-color-point-navy text-color-white font-extralight  rounded-2xl px-2">
                {event.data.tag}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
