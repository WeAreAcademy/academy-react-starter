interface Props {
  searchText: string;
  handleSearchText: (input: string) => void;
  handleSearchSex(input: string): void;
}
export function Search(props: Props): JSX.Element {
  return (
    <>
      <input
        type="text"
        placeholder="Search babies.."
        name="search"
        value={props.searchText}
        onChange={(e) => props.handleSearchText(e.target.value)}
      />
      <button className="girl" onClick={() => props.handleSearchSex("f")}>
        👧
      </button>
      <button className="boy" onClick={() => props.handleSearchSex("m")}>
        👦
      </button>
      <button className="allgender" onClick={() => props.handleSearchSex("")}>
        🐤
      </button>
    </>
  );
}
