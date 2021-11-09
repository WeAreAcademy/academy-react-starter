import { Babies } from "./components/babynames";
import "./App.css";
import { useState } from "react";
import { Search } from "./components/SearchBar";
import { FavouriteItems } from "./components/favouriteslist";

type BabyProp = {
  name: string;
  sex: string;
  id: number;
};

function App(): JSX.Element {
  const [searchText, setSearchText] = useState<string>("");
  const [searchSex, setSearchSex] = useState<string>("");
  const [favourites, setFavourites] = useState<BabyProp[]>([]);

  return (
    <>
      <Search
        searchText={searchText}
        handleSearchText={setSearchText}
        handleSearchSex={setSearchSex}
      />
      <FavouriteItems
        handleAddToFavourites={setFavourites}
        favourites={favourites}
      />
      <h2>Find my baby!</h2>
      <Babies
        searchText={searchText}
        searchSex={searchSex}
        handleAddToFavourites={setFavourites}
        favourites={favourites}
      />
    </>
  );
}

export default App;
