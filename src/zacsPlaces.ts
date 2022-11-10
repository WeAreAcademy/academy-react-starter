export interface OnePlace {
    title: string;
    city: string;
    country: string;
    mapURL: string;
    imageURL: string;
    description: string;
}

export const zacsPlaces: OnePlace[] = [
    {
        title: "Sacré-Cœur de Montmartre",
        city: "Paris",
        country: "France",
        mapURL:
            "https://www.google.com/maps/place/Sacr%C3%A9-C%C5%93ur/@48.8867045,2.3386196,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66e4334868de3:0xcfc3870abe2b8519!8m2!3d48.8867046!4d2.3431043!16s%2Fg%2F1tdm30l7",
        imageURL:
            "https://www.thetrainline.com/cms/media/4036/sacre-coeur-paris.jpg?mode=crop&width=660&height=440&quality=70",
        description:
            "I love the architectural style, and how it stands gloriously above my favourite city in the world, Paris. It has also been featured in some iconic films as well as a favourite of mine, The 400 Blows.",
    },
    {
        title: "Coe Fen",
        city: "Cambridge",
        country: "UK",
        mapURL:
            "https://www.google.com/maps/place/Coe+Fen,+Cambridge/@52.1999898,0.114662,17z/data=!4m15!1m8!3m7!1s0x47d85d89f32a012d:0x63a320e1a35e3d21!2sCambridge!3b1!8m2!3d52.1950788!4d0.1312729!16zL20vMDk3OHI!3m5!1s0x47d870a3b0cfec13:0x511e20416a9d974a!8m2!3d52.1984739!4d0.1165978!16s%2Fm%2F07kb8w3?hl=en-GB",
        imageURL: "https://s0.geograph.org.uk/geophotos/03/99/67/3996781_f31f5ea8.jpg",
        description:
            "Just incredibly beautiful. Weeping willows, punts on the river, oh and cows roaming about everywhere!",
    },
    {
        title: "Cortona",
        city: "Tuscany",
        country: "Italy",
        mapURL:
            "https://www.google.com/maps/place/52044+Cortona,+Province+of+Arezzo,+Italy/@43.2747783,11.9849183,18z/data=!4m6!3m5!1s0x132bf97881a782d7:0x27cf7fa1dc70734e!8m2!3d43.2750634!4d11.98512!16zL20vMDI3ZzI1?hl=en-GB",
        imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/b/bf/Cortona-vista01.jpg",
        description:
            "Adorable hillside town in Tuscany. I love Tuscan architecture so much, and this is an amazing example of it. Feels like you're in a film (there's actually a Hollywood film set in Cortona (because of this vibe probably)). Also, I've been here a couple of times with my closest friends so it's super nostalgic for me.",
    },
    {
        title: "Sainte-Maxime",
        city: "Côte d'Azur",
        country: "France",
        mapURL:
            "https://www.google.com/maps/place/83120+Sainte-Maxime,+France/@43.3582996,6.470374,12z/data=!3m1!4b1!4m6!3m5!1s0x12ceb99a895298d1:0x40819a5fd8fc990!8m2!3d43.310184!4d6.640482!16zL20vMGc2cjFu?hl=en-GB",
        imageURL:
            "https://img.marinas.com/v2/17af349c3e869035f1c8867687efbfbe13d589d4d8b513b074f9d0d9a5ebbea0.jpg",
        description:
            "Used to come here in the Summer with my family, so a super nostalgic place. Plus, the South of France is stunning. And it reminds me of Mr Bean's Holiday lol",
    },
]
