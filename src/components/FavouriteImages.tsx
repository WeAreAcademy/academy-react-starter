import FavouriteImageItem from "./FavouriteImageItem";

function FavouriteImages(): JSX.Element {
  return (
    <section>
      <FavouriteImageItem
        imgUrl={
          "https://i.picsum.photos/id/199/536/354.jpg?hmac=g0IyHUDJS4xn7wz_TpnFDJAtrGcukcqV1Ye7w22fdFk"
        }
        title={"A caravan, in the rain"}
        locationfirst={"Kippford"}
        locationsecond={"Scotland"}
        mapUrl={"urlexample.com"}
        maplinkplaceholder={"map link"}
        description={
          "I love the noise of the rain on the roof of a caravan, or the canvas of a tent."
        }
      />
      <FavouriteImageItem
        imgUrl={
          "https://i.picsum.photos/id/1013/536/354.jpg?hmac=g-noHNvrLjQNz62ByvWlOk-g2K4_LNhFKl8THdi9FU8"
        }
        title={"A caravan, in the rain"}
        locationfirst={"Kippford"}
        locationsecond={"Scotland"}
        mapUrl={"https://warmm.co.uk"}
        maplinkplaceholder={"map link"}
        description={
          "I love the noise of the rain on the roof of a caravan, or the canvas of a tent."
        }
      />
      <FavouriteImageItem
        imgUrl={
          "https://i.picsum.photos/id/314/536/354.jpg?hmac=uQME2VgtwoULPclwqxIs5OqNE84y_4z4uIGmMgynbLU"
        }
        title={"A caravan, in the rain"}
        locationfirst={"Kippford"}
        locationsecond={"Scotland"}
        mapUrl={"urlexample.com"}
        maplinkplaceholder={"map link"}
        description={
          "I love the noise of the rain on the roof of a caravan, or the canvas of a tent."
        }
      />
      <FavouriteImageItem
        imgUrl={
          "https://i.picsum.photos/id/164/536/354.jpg?hmac=hpetWeo-NPRH4DI1ZzpBXB3ibSntdU3FOW2ICJ771nY"
        }
        title={""}
        locationfirst={"Kippford"}
        locationsecond={"Scotland"}
        mapUrl={"urlexample.com"}
        maplinkplaceholder={"map link"}
        description={
          "I love the noise of the rain on the roof of a caravan, or the canvas of a tent."
        }
      />
    </section>
  );
}

export default FavouriteImages;
