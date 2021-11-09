import babies from "../babies.json";
import { Baby } from "./babyname";

interface Props {
  searchText: string;
  searchSex: string;
  handleAddToFavourites: React.Dispatch<React.SetStateAction<BabyProp[]>>;
  favourites: BabyProp[];
}

type BabyProp = {
  name: string;
  sex: string;
  id: number;
};

export function Babies(props: Props): JSX.Element {
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
    const objectBabies = sortedandOrderedBabies.map((bab) => (
      <Baby
        key={bab.id}
        BabyName={{ name: bab.name, sex: bab.sex, id: bab.id }}
        handleAddToFavourites={props.handleAddToFavourites}
        favourites={props.favourites}
      />
    ));
    return objectBabies;
  }

  return (
    <>
      <div className="allbabies">{filterBabies()}</div>
    </>
  );
}
