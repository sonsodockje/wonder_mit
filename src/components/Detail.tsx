import { useEffect } from "react";

import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Detail({ id }) {
  useEffect(() => {
    async function getDetail() {
      console.log("djsdfods", id);

      const docRef = doc(db, "events", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    getDetail();
  }, []);

  return <div>Detail</div>;
}
