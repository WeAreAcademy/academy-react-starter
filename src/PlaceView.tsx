import React from "react";
import { OnePlace } from "./zacsPlaces";


interface PlaceViewProps {
    onePlace: OnePlace;
    colour: string;
    onlySummary: boolean;
}
export function PlaceView(props: PlaceViewProps): JSX.Element {
    return (
        <div className="place-view">
            {props.onePlace.description}
            {props.onePlace.imageURL}
        </div>
    )
}