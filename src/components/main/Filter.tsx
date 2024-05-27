import CircleName from "./CircleName";

export default function Filter() {
  const data = [
    {
      text: "게임",
      param: "game",
    },
    {
      text: "스포츠",
      param: "game",
    },
    {
      text: "생일카페",
      param: "game",
    },
    {
      text: "팝업스토어",
      param: "game",
    },
    {
      text: "미디어",
      param: "game",
    },
    {
      text: "음악",
      param: "game",
    },
    {
      text: "전자기기",
      param: "game",
    },
    {
      text: "문학",
      param: "game",
    },
    {
      text: "기타",
      param: "game",
    },
  ];
  return (
    <div className="flex flex-row py-3 my-3 justify-between">
      {data.map((item) => (
        <CircleName text={item.text} />
      ))}
    </div>
  );
}
