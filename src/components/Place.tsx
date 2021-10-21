
interface PlaceProps {
    title: string
    placeName: string;
    countryName: string;
    image: string;
    imageAlt: string;
    mapsLink: string;
    description: string;
}

function Place(props: PlaceProps): JSX.Element {
    return (
        <div className="place">
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.imageAlt}/>
            <h3>{props.placeName}, {props.countryName} (<a href={props.mapsLink}>Find on maps</a>)</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Place;
