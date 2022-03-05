import { ImgHTMLAttributes } from 'react';
import photo from '/images/firstImage.jpg'

interface PlaceEntryProps {
  title: string;
  city: string;
  country: string;
  text: string;
}

function PlaceEntry(props: PlaceEntryProps): JSX.Element {
  return (
    <section style={{color: "orange"}}>
    <h1 style={{fontSize:50}}>{props.title}</h1>
      <p style={{fontSize:30}}>
        <strong>{props.city}, {props.country}</strong>
      </p>
      <p style={{fontSize:20}}>{props.text}</p>
    </section>
  );
}

export default PlaceEntry;