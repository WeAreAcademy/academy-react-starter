import { PlaceView } from "./PlaceView"
import { zacsPlaces, OnePlace } from "./zacsPlaces"



export function AllPlacesView(): JSX.Element {

    return (<div>
        <h1>All places view</h1>
        {
            zacsPlaces.map(
                (placeItem: OnePlace) => (
                    <PlaceView
                        onePlace={placeItem}
                        colour={"skyblue"}
                        onlySummary={true}

                        key={placeItem.title}
                    />
                )
            )
        }

    </div>)
}
