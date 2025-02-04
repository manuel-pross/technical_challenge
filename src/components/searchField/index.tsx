import { useSearchTermStore } from "@/stores/searchTermStore";
import { useEffect, useRef, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchField() {
  const [searchTerm, setSearchTerm] = useState("");
  const { updateSearchTerm } = useSearchTermStore((state) => state);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "/") {
        event.preventDefault();
        searchInputRef?.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;

    setSearchTerm(newSearchTerm);

    if (newSearchTerm === "") {
      updateSearchTerm("");
      return;
    }

    updateSearchTerm(newSearchTerm);
  };

  return (
    <label className="relative w-fit h-fit">
      <button className="peer absolute flex items-center justify-center right-0 w-[50px] h-[50px] border-none rounded-[50%] text-xl font-bold outline-none hover:cursor-pointer text-tokyo-black bg-transparent">
        <FaMagnifyingGlass />
      </button>
      <input
        className="search-input"
        type="text"
        autoComplete="off"
        name="searchField"
        placeholder="Type to search for label..."
        ref={searchInputRef}
        value={searchTerm}
        onChange={handleChange}
      />
    </label>
  );
}

export default SearchField;
