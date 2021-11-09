import babies from "../babies.json";
import { Baby } from "./babyname";
import { FilterButtons } from "./filterButtons";
import { Key, useState } from "react";

interface Props {
  searchText: string;
  searchSex: string;
}
interface PropBaby {
  name: string;
  id: number;
  sex: string;
}

export function Babies(props: Props): JSX.Element {
  const [favourites, setFavourite] = useState<string[]>([]);

  function filterBabies() {
    const sortedBabies = babies.filter((bab) =>
      bab.name.toLowerCase().includes(props.searchText.toLowerCase())
    );
    let sortedandOrderedBabies = sortedBabies.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    if (props.searchSex !== "") {
      sortedandOrderedBabies = sortedandOrderedBabies.filter(
        (bab) => bab.sex === props.searchSex
      );
    }
    const objectBabies = sortedandOrderedBabies.map(
      (bab: { id: number; sex: string; name: string }) => (
        <Baby
          id={bab.id}
          key={bab.id}
          sex={bab.sex}
          name={bab.name}
          handleAddToFavourites={(babyname: string) => {
            if (favourites.includes(bab.name)) {
              favourites.splice(favourites.indexOf(bab.name), 1);
              setFavourite([...favourites]);
            } else {
              setFavourite([...favourites, bab.name]);
            }
          }}
        />
      )
    );
    return objectBabies;
  }

  return (
    <>
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
      <div className="allbabies">{filterBabies()}</div>
    </>
  );
}
