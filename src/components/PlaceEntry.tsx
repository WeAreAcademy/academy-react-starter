interface PlaceEntryProps {
  entryTitle: string;
  city: string;
  country: string;
  mapLink: string;
  entryBody: string;
  image: string;
}

function PlaceEntry({
  entryTitle,
  city,
  country,
  mapLink,
  entryBody,
  image,
}: PlaceEntryProps): JSX.Element {
  return (
    <>
      <img src={image} alt="place" />
      <section>
        <h2>
          <b>{entryTitle}</b>
        </h2>
        <div>
          <h3>
            <b>
              {city}, {country} (<a href={mapLink}>map link</a>)
            </b>
          </h3>
        </div>
      </section>
      <p>{entryBody}</p>
    </>
  );
}

export default PlaceEntry;
