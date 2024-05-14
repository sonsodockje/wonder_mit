import { Link } from "react-router-dom";

export default function CircleName({ text }: any) {
  return (
    <div className=" px-2 rounded-full border text-sm border-color-point-pink ">
      {text}
    </div>
  );
}
