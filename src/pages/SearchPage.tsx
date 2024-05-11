import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const keyword = useSearchParams()[0];
  const value = keyword.get("keyword") || "";

  return (
    <div>
      <p>"{value}" 의 검색결과</p>
    </div>
  );
}

export default SearchPage;
