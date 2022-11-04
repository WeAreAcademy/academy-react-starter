interface PlaceEntryProps {
  entryTitle: string;
  city: string;
  country: string;
  mapLink: string;
  entryBody: string;
  image: string;
}

function MakePlaceEntry({
  entryTitle,
  city,
  country,
  mapLink,
  entryBody,
  image,
}: PlaceEntryProps): JSX.Element {
  return (
    <>
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
          <img src={image} alt="place" />
        </div>
      </section>
      <p>{entryBody}</p>
      <div>
        <p>
          ______________________________________________________________________________________________________________________
        </p>
      </div>
    </>
  );
}

export default MakePlaceEntry;
