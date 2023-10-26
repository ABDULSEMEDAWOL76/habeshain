import React from "react";
import {gas} from "../../data";
import Slide from "../../components/slide/Slide";
import AbduCard from "../../components/abduCard/AbduCard";
function Gas (){
    return(
        <div>
             <Slide slidesToShow={5} arrowsScroll={5}>
            
            {gas.map((card) => (
               <AbduCard key={card.id} card={card} />
            ))
            }
             </Slide>
        </div>
    );
}
export default Gas;