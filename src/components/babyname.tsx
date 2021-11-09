interface Props {
  name: string;
  sex: string;
  id: number;
  handleAddToFavourites(input: string): void;
}

export function Baby(props: Props): JSX.Element {
  return (
    <>
      {props.sex === "f" ? (
        <button
          className="girl"
          onClick={(e) => props.handleAddToFavourites(e.currentTarget.name)}
        >
          {props.name}
        </button>
      ) : (
        <button
          className="boy"
          onClick={(e) => props.handleAddToFavourites(e.currentTarget.name)}
        >
          {props.name}{" "}
        </button>
      )}
    </>
  );
}
