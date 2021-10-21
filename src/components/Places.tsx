import Place from "./Place";

function Places(): JSX.Element {
    return (
        <section>
            <Place
              title = {"Sunny sunny Wales"}
              placeName = {"Tenby"}
              countryName = {"Wales"}
              image = {"tenby.jpg"}
              imageAlt = {"Aerial view of sunny Tenby"}
              mapsLink = {"https://www.google.com/maps/place/Tenby,+UK/data=!4m2!3m1!1s0x486933067fa2a7c5:0x64baa8e24098ac0e?sa=X&ved=2ahUKEwivsNvSyNvzAhWkA2MBHRtiDBYQ8gF6BAg8EAE"}
              description = {"If you're looking for a sunny holiday in Wales, this is your best bet."}
            />
        </section>
    );
}

export default Places;