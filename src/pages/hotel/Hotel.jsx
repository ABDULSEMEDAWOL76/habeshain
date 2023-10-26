import React from "react";
import {hotel} from "../../data";
import Slide from "../../components/slide/Slide";
import AbduCard from "../../components/abduCard/AbduCard";
function Hotel (){
    return(
        <div>
             <Slide slidesToShow={5} arrowsScroll={5}>
            
            {hotel.map((card) => (
               <AbduCard key={card.id} card={card} />
            ))
            }
             </Slide>
        </div>
    );
}
export default Hotel;