interface Props {
  name: string;
  sex: string;
}
export function Baby(props: Props): JSX.Element {
  return (
    <>
      {props.sex === "f" ? (
        <button className="girl"> {props.name}</button>
      ) : (
        <button className="boy">{props.name}</button>
      )}
    </>
  );
}
