import babies from "../babies.json";
import { Baby } from "./babyname";

interface Props {
  searchText: string;
}

export function Babies(props: Props): JSX.Element {
  const filterBabies = babies
    .filter((bab) => {
      if (bab.name.toLowerCase().includes(props.searchText.toLowerCase()))
        return bab;
      else return false;
    })
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    .map((bab) => <Baby key={bab.id} name={bab.name} sex={bab.sex} />);

  return (
    <div className="allbabies">
      {filterBabies.length !== 0 ? filterBabies : <p>No babies found</p>}
    </div>
  );
}
