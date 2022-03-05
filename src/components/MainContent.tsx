import { ClientRequest } from "http";
import PlaceEntry from "./PlaceEntry";

function MainContent(): JSX.Element {
  return (
    <main>
    <section 
        style={{color: "#d6cbd3",backgroundColor: "#3e4444", margin:12 , padding: 15, textAlign: "center" }}>
        <img src="/images/firstImage.jpg" width={450} height={450} alt="Big orange canyon in Arizona" />
        <PlaceEntry
            title={"Antelope Canyon"}
            city={"Arizona"}
            country={"USA"} 
            text={"I feel as though I am in a different world in this canyon"}
        />
        <a href="https://goo.gl/maps/4QXMir55kfaGnhbr6">(map link)</a>
    </section>

    <section  style={{color: "#d6cbd3",backgroundColor: "#3e4444", margin:0, padding: 2,textAlign: "center"}}>
        <img src="/images/secondImage.jpg" width={450} height={450} alt="Beach front" />
        <PlaceEntry
            title={"White sands and blue waters"}
            city={"Fuvahmulah"}
            country={"Maldives"}
            text={"I love spending the day at the beach swimming in the sea"}
        />
        <a href="https://goo.gl/maps/xUBAwiiiAgviQjTt5">(map link)</a>
    </section>

    <section  style={{color: "#d6cbd3",backgroundColor: "#3e4444", margin: 12, padding: 15,textAlign: "center"}}>
        <img src="/images/thirdImage.jpg" width={450} height={450} alt="Big orange canyon in Arizona" />
        <PlaceEntry
            title={"Green country"}
            city={"Bangor"}
            country={"Northern Ireland"}
            text={"I love beautiful pastures of green spaces"}
        />
        <a href="https://goo.gl/maps/3pnDe54rsZFrGmtG8">(map link)</a>
    </section>
    </main>
  );
}

export default MainContent;
