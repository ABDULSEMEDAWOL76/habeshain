import React from "react";
import {resort} from "../../data";
import Slide from "../../components/slide/Slide";
import AbduCard from "../../components/abduCard/AbduCard";
function Resort(){
    return(
        <div>
             <Slide slidesToShow={5} arrowsScroll={5}>
            
            {resort.map((card) => (
               <AbduCard key={card.id} card={card} />
            ))
            }
             </Slide>
        </div>
    );
}
export default Resort;