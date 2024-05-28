import Detail from "../components/Detail";
import { useSearchParams } from "react-router-dom";

function DetailPage() {
  const [id] = useSearchParams();
  console.log(id);

  return (
    <div>
      <Detail id={id.toString()} />
    </div>
  );
}

export default DetailPage;
