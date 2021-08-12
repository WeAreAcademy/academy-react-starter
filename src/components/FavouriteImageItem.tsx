import { Url } from "url";

interface FavouriteImageProps {
    imgUrl: string;
    title: string;
    locationfirst: string;
    locationsecond: string;
    maplinkplaceholder: string;
    mapUrl: string;
    description: string;
}

function FavouriteImage(props: FavouriteImageProps): JSX.Element {
    return(
        <section>
            <img src={props.imgUrl}></img>
            <h3>{props.title}</h3>
                <div><b>{props.locationfirst}, {props.locationsecond}</b> <b>(</b><a href={props.mapUrl}>{props.maplinkplaceholder}</a><b>)</b></div>
            <article>{props.description}</article>
        </section>
    );
}
  
export default FavouriteImage;