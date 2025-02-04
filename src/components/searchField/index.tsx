import { useSearchTermStore } from "@/stores/searchTermStore";
import { useState } from "react";

function SearchField() {
  const [searchTerm, setSearchTerm] = useState("");
  const setSearchTermGlobal = useSearchTermStore(
    (state) => state.updateSearchTerm,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;

    setSearchTerm(newSearchTerm);

    if (newSearchTerm === "") {
      console.log("searchterm", e.target.value);
      setSearchTermGlobal("");
      return;
    }

    setSearchTermGlobal(newSearchTerm);
  };

  return (
    <label>
      Search term:
      <input
        type="text"
        name="searchField"
        placeholder="label"
        value={searchTerm}
        onChange={handleChange}
      />
    </label>
  );
}

export default SearchField;
