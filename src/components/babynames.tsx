import babies from "../babies.json";
import { Baby } from "./babyname";
import { useState } from "react";
import { FilterButtons } from "./filterButtons";

interface Props {
  searchText: string;
}

export function Babies(props: Props): JSX.Element {
  const [favourites, setFavourite] = useState<string[]>([]);

  const filterBabies = babies
    .filter((bab) => {
      if (bab.name.toLowerCase().includes(props.searchText.toLowerCase()))
        return bab;
      else return false;
    })
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    .map((bab) => (
      <Baby
        key={bab.id}
        name={bab.name}
        sex={bab.sex}
        handleAddToFavourites={(babyname: string) => {
          if (favourites.includes(bab.name)) {
            favourites.splice(favourites.indexOf(bab.name), 1);
            setFavourite((favourites) => [...favourites]);
          } else {
            setFavourite((favourites) => [...favourites, bab.name]);
          }
        }}
      />
    ));

  return (
    <>
      <FilterButtons />
      <div className="favs">
        My favourites:{" "}
        {favourites
          .sort((a, b) => (a > b ? 1 : b > a ? -1 : 0))
          .map((bub, idx) => (
            <button key={idx} className="fav">
              {bub}{" "}
            </button>
          ))}
      </div>
      <p></p>
      <div className="allbabies">
        {filterBabies.length !== 0 ? filterBabies : <p>No babies found</p>}
      </div>
    </>
  );
}
