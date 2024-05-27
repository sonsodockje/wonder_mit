import { Link } from "react-router-dom";

export default function CircleName({ text }: any) {
  return (
    <div className=" px-2 rounded-full border p-4 w-24 text-center text-sm border-color-point-pink ">
      {text}
    </div>
  );
}
