import React from "react";
import {business} from "../../data";
import Slide from "../../components/slide/Slide";
import AbduCard from "../../components/abduCard/AbduCard";
function Business (){
    return(
        <div>
             <Slide slidesToShow={5} arrowsScroll={5}>
            
            {business.map((card) => (
               <AbduCard key={card.id} card={card} />
            ))
            }
             </Slide>
        </div>
    );
}
export default Business;