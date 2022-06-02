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
      <p style={{fontSize:40}}>{props.title}</p>
      <p style={{fontSize:30}}><strong>{props.city}, {props.country}</strong></p>
      <p style={{fontSize:20}}>{props.text}</p>
    </section>
  );
}

export default PlaceEntry;