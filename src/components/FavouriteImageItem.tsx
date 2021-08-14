import "./FavouriteImageItem.css";

function FavouriteImage(): JSX.Element {
  const ArrayOfPlaces = [
    {
      imgUrl:
        "https://i.picsum.photos/id/199/536/354.jpg?hmac=g0IyHUDJS4xn7wz_TpnFDJAtrGcukcqV1Ye7w22fdFk",
      title: "A caravan, in the rain",
      locationfirst: "Kippford",
      locationsecond: "Scotland",
      mapUrl: "urlexample.com",
      maplinkplaceholder: "map link",
      description:
        "I love the noise of the rain on the roof of a caravan, or the canvas of a tent.",
    },
    {
      imgUrl:
        "https://i.picsum.photos/id/199/536/354.jpg?hmac=g0IyHUDJS4xn7wz_TpnFDJAtrGcukcqV1Ye7w22fdFk",
      title: "A caravan, in the rain2",
      locationfirst: "Kippford",
      locationsecond: "Scotland",
      mapUrl: "urlexample.com",
      maplinkplaceholder: "map link",
      description:
        "I love the noise of the rain on the roof of a caravan, or the canvas of a tent.",
    },
    {
      imgUrl:
        "https://i.picsum.photos/id/199/536/354.jpg?hmac=g0IyHUDJS4xn7wz_TpnFDJAtrGcukcqV1Ye7w22fdFk",
      title: "A caravan, in the rain2",
      locationfirst: "Kippford",
      locationsecond: "Scotland",
      mapUrl: "urlexample.com",
      maplinkplaceholder: "map link",
      description:
        "I love the noise of the rain on the roof of a caravan, or the canvas of a tent.",
    },
    {
      imgUrl:
        "https://i.picsum.photos/id/199/536/354.jpg?hmac=g0IyHUDJS4xn7wz_TpnFDJAtrGcukcqV1Ye7w22fdFk",
      title: "A caravan, in the rain2",
      locationfirst: "Kippford",
      locationsecond: "Scotland",
      mapUrl: "urlexample.com",
      maplinkplaceholder: "map link",
      description:
        "I love the noise of the rain on the roof of a caravan, or the canvas of a tent.",
    },
  ];
  return (
    <section>
      {ArrayOfPlaces.map((place) => (
        <div key={place.title}>
          <img alt="" src={place.imgUrl}></img>
          <h3>{place.title}</h3>
          <div>
            <b>
              {place.locationfirst}, {place.locationsecond}
            </b>{" "}
            <b>(</b>
            <a href={place.mapUrl}>{place.maplinkplaceholder}</a>
            <b>)</b>
          </div>
          <article>{place.description}</article>
        </div>
      ))}
    </section>
  );
}

export default FavouriteImage;
