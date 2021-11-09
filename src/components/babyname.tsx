interface Props {
  handleAddToFavourites: React.Dispatch<React.SetStateAction<BabyProp[]>>;
  favourites: BabyProp[];
  BabyName: BabyProp;
}
type BabyProp = {
  name: string;
  sex: string;
  id: number;
};

export function Baby(props: Props): JSX.Element {
  return (
    <>
      {props.BabyName.sex === "f" ? (
        <button
          className="girl"
          onClick={() =>
            props.handleAddToFavourites([...props.favourites, props.BabyName])
          }
        >
          {props.BabyName.name}
        </button>
      ) : (
        <button
          className="boy"
          onClick={() =>
            props.handleAddToFavourites([...props.favourites, props.BabyName])
          }
        >
          {props.BabyName.name}{" "}
        </button>
      )}
    </>
  );
}
