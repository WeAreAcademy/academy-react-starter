import { FavouriteItem } from "./favourite";

interface FavouriteItemsProps {
  handleAddToFavourites(input: BabyProp[]): void;
  favourites: BabyProp[];
}

type BabyProp = {
  name: string;
  sex: string;
  id: number;
};

export function FavouriteItems(props: FavouriteItemsProps): JSX.Element {
  return (
    <>
      <p>These are my favourite babies:</p>
      {props.favourites.map((fav) => (
        <FavouriteItem
          key={fav.id}
          handleAddToFavourites={props.handleAddToFavourites}
          favourites={props.favourites}
          BabyName={{ name: fav.name, sex: fav.sex, id: fav.id }}
        />
      ))}
    </>
  );
}
