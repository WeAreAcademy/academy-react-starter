import Place from "./Place";

function Places(): JSX.Element {
    return (
        <section>
            <Place
              title = {"Sunny sunny Wales"}
              placeName = {"Tenby"}
              countryName = {"Wales"}
              image = {"tenby.jpg"}
              imageAlt = {"Aerial view of sunny Tenby"}
              mapsLink = {"https://www.google.com/maps/place/Tenby,+UK/data=!4m2!3m1!1s0x486933067fa2a7c5:0x64baa8e24098ac0e?sa=X&ved=2ahUKEwivsNvSyNvzAhWkA2MBHRtiDBYQ8gF6BAg8EAE"}
              description = {"If you're looking for a sunny holiday in Wales, this is your best bet."}
            />
            <Place
              title = {"Urban bike rides"}
              placeName = {"Berlin Television Tower"}
              countryName = {"Germany"}
              image = {"berlinneedle.jpg"}
              imageAlt = {"Evening view of the Berlin TV Tower"}
              mapsLink = {"https://www.google.com/search?rlz=1C5CHFA_enGB965GB966&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=AOaemvKJoWEJh_IloaGhBDl-jy0nRaMlgQ:1634823529676&q=berlin+tv+tower&rflfq=1&num=10&ved=2ahUKEwiNr4ae0NvzAhW78uAKHd2yCnoQtgN6BAgQEAc#rlfi=hd:;si:;mv:[[52.5208344,13.409445900000001],[52.5208139,13.4094176]];tbs:lrf:!1m4!1u2!2m2!2m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e2!2m1!1e16!3sIAE,lf:1,lf_ui:9"}
              description = {"Rent a bike in the early morning and take a ride through the best parts of Berlin. "}
            />
            <Place 
              title = {"Exeter's nightlife capital"}
              placeName = {"Unit 1"}
              countryName = {"Exeter"}
              image = {"unitfun.jpg"}
              imageAlt = {"Degenerates getting their groove on in unit 1"}
              mapsLink = {"https://www.google.com/maps/place/Unit+1/@50.727028,-3.521903,15z/data=!4m2!3m1!1s0x0:0x622842f43646dd60?sa=X&hl=en&ved=2ahUKEwi-zMiM0tvzAhVLAWMBHYaqBx8Q_BJ6BAh4EAU"}
              description = {"Enjoy the best and worst night out of your life in Exeter's second most popular night club."}
            />
            <Place
              title = {""}
              placeName = {""}
              countryName = {""}
              image = {""}
              imageAlt = {""}
              mapsLink = {""}
              description = {""}
            />
    
        </section>
    );
}

export default Places;