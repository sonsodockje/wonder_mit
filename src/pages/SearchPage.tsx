import { useParams } from "react-router-dom";

function SearchPage() {
  const keyword = useParams().keyword;

  return (
    <div>
      <div>"{keyword}" 의 검색결과</div>
    </div>
  );
}

export default SearchPage;
