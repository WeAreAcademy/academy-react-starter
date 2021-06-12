import { greet } from "./utils/greet";

function App(): JSX.Element {
  return <h1>{greet("World")}</h1>;
}

export default App;
