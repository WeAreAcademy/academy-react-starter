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
    <button
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

// interface Props {
//   favourites: string[];
//   BabyProps: {
//     name: string;
//     sex: string;
//     id: number;
//   };
//   setFavourite(input: string[]): void;
// }

// export function Favourite(props: Props): JSX.Element {
//   if (props.favourites.includes(props.BabyProps.name)) {
//     props.favourites.splice(props.favourites.indexOf(props.BabyProps.name), 1);
//     props.setFavourite([...props.favourites]);
//   } else {
//     props.setFavourite([...props.favourites, props.BabyProps.name]);
//   }

//   return (
//     <div className="favs">
//       My favourites: s
//       {props.favourites
//         .sort((a, b) => (a > b ? 1 : b > a ? -1 : 0))
//         .map((bub, idx) => (
//           <button key={idx} className="fav">
//             {bub}{" "}
//           </button>
//         ))}
//     </div>
//   );
// }
