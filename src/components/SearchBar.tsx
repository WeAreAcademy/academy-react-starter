interface Props {
  searchText: string;
  handleSearchText: (input: string) => void;
}
export function SearchBar(props: Props): JSX.Element {
  return (
    <>
      <input
        type="text"
        placeholder="Search babies.."
        name="search"
        value={props.searchText}
        onChange={(e) => props.handleSearchText(e.target.value)}
      />
    </>
  );
}
