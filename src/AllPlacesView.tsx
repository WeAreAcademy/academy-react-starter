import { zacsPlaces, OnePlace } from "./zacsPlaces"



export function AllPlacesView(): JSX.Element {

    return (<div>All places view
        {
            zacsPlaces.map(
                (placeItem: OnePlace) => (
                    <p key={placeItem.title}>ONE PLACE {placeItem.title}
                        <img src={placeItem.imageURL} />
                        ITEM</p>)
            )
        }

    </div>)
}
