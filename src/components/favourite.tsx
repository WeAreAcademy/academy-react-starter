interface FavouriteItemProps {
  handleAddToFavourites(input: BabyProp[]): void;
  favourites: BabyProp[];
  BabyName: BabyProp;
}

type BabyProp = {
  name: string;
  sex: string;
  id: number;
};

export function FavouriteItem(props: FavouriteItemProps): JSX.Element {
  return (
    <>
      {props.BabyName.sex === "f" ? (
        <button
          className="girl"
          onClick={() =>
            removeFavourites(
              props.BabyName.name,
              props.favourites,
              props.handleAddToFavourites
            )
          }
        >
          {props.BabyName.name}
        </button>
      ) : (
        <button
          className="boy"
          onClick={() =>
            removeFavourites(
              props.BabyName.name,
              props.favourites,
              props.handleAddToFavourites
            )
          }
        >
          {props.BabyName.name}
        </button>
      )}
    </>
  );
}

export function removeFavourites(
  nameToRemove: string,
  favourite: BabyProp[],
  setFavourite: (name: BabyProp[]) => void
): void {
  const favouriteRemoved = favourite.filter(
    (name) => name.name !== nameToRemove
  );
  setFavourite(favouriteRemoved);
}
