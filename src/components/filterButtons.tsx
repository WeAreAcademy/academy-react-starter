interface Props {
  handleGirl(input: string): void;
  handleBoy(input: string): void;
  handleallgender(input: string): void;
}

export function FilterButtons(props: Props): JSX.Element {
  return (
    <div className="buttons">
      <button
        className="girl"
        onClick={(e) => props.handleGirl(e.currentTarget.value)}
      >
        👧
      </button>
      <button
        className="boy"
        onClick={(e) => props.handleBoy(e.currentTarget.value)}
      >
        👦
      </button>
      <button
        className="allgender"
        onClick={(e) => props.handleallgender(e.currentTarget.value)}
      >
        🐤
      </button>
    </div>
  );
}
