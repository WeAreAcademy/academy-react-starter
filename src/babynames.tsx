import babies from "./babies.json";
import { Baby } from "./babyname";

export function Babies(): JSX.Element {
  return (
    <p>
      {babies
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((bab) => (
          <Baby key={bab.id} name={bab.name} sex={bab.sex} />
        ))}
    </p>
  );
}
