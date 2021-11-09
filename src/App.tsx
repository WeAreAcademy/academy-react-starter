import { Babies } from "./components/babynames";
import "./App.css";
import { useState } from "react";
import { Search } from "./components/SearchBar";
import { Baby } from "./components/babyname";
import babies from "./babies.json";

interface BabyProps {
  name: string;
  sex: string;
  id: number;
}

function App(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const [searchSex, setSearchSex] = useState<string>("");

  return (
    <>
      <Search
        searchText={searchText}
        handleSearchText={setSearchText}
        handleSearchSex={setSearchSex}
      />
      <h2>Find my baby!</h2>
      <Babies searchText={searchText} searchSex={searchSex} />
    </>
  );
}

export default App;
