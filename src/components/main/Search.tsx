import { useNavigate } from "react-router-dom";
import useSearchStore from "../../store/useSearch";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

function Search() {
  const navigate = useNavigate();
  const setKeyword = useSearchStore((state: any) => state.setKeyword);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (keyword: string) => {
    console.log(searchValue);

    setKeyword(searchValue);
    setSearchValue("");
    // const keyword = encodeURIComponent(searchValue);
    return navigate(`/search?keyword=${keyword}`);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchValue}
        placeholder="검색"
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.code == "Enter") {
            console.log(searchValue);

            handleSearch(searchValue);
          }
        }}
        className=" border-color-point-pink border text-sm p-2 rounded-lg mr-3 pl-10 focus:outline-none md:w-72 w-24"
      />
      <FaMagnifyingGlass
        onClick={handleSearch}
        className="absolute top-[11px] left-4 text-color-point-pink cursor-pointer"
      />
    </div>
  );
}

export default Search;
