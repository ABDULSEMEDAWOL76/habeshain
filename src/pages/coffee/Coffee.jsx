import React from "react";
import { Raki} from "../../data";
import Slide from "../../components/slide/Slide";
import AbduCard from "../../components/abduCard/AbduCard";
function Coffee (){
    return(
        <div>
             <Slide slidesToShow={5} arrowsScroll={5}>
            
            {Raki.map((card) => (
               <AbduCard key={card.id} card={card} />
            ))
            }
             </Slide>
        </div>
    );
}
export default Coffee;