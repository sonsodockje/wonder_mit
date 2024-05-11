import { useNavigate } from "react-router-dom";
import useSearchStore from "../../store/useSearch";
import { useState } from "react";

function Search() {
  const navigate = useNavigate();
  const setKeyword = useSearchStore((state: any) => state.setKeyword);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    setKeyword(searchValue);
    setSearchValue("");
    const keyword = encodeURIComponent(searchValue);
    return navigate(`/search?keyword=${keyword}`);
    //   return navigate(`/search?keyword=${searchValue}`);
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        placeholder="검색"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}

export default Search;
