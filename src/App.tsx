import { Babies } from "./components/babynames";
import "./App.css";
import { useState } from "react";
import { SearchBar } from "./components/SearchBar";

function App(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <>
      <SearchBar searchText={searchText} handleSearchText={setSearchText} />
      <h2>Find my baby!</h2>
      <Babies searchText={searchText} />
    </>
  );
}

export default App;
