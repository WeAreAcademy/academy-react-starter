import MakePlaceEntry from "./PlaceEntryItem";

function PlaceEntries(): JSX.Element {
    return (
        <section>
            <MakePlaceEntry
                entryTitle ={'Sacré-Cœur de Montmartre'}
                city={'Paris'}
                country={'France'}
                mapLink={'https://www.google.com/maps/place/Sacr%C3%A9-C%C5%93ur/@48.8867045,2.3386196,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e4334868de3:0xcfc3870abe2b8519!8m2!3d48.8867046!4d2.3431043!16s%2Fg%2F1tdm30l7'}
                image={'https://www.thetrainline.com/cms/media/4036/sacre-coeur-paris.jpg?mode=crop&width=660&height=440&quality=70'}
                entryBody={'I love the architectural style, and how it stands gloriously above my favourite city in the world, Paris. It has also been featured in some iconic films as well as a favourite of mine, The 400 Blows.'}
            />

        </section>
    )
}