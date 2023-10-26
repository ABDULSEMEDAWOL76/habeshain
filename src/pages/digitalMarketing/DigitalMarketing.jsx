import React from "react";
import {dig } from "../../data";
import Slide from "../../components/slide/Slide";
import AbduCard from "../../components/abduCard/AbduCard";
function DigitalMarketing (){
    return(
        <div>
             <Slide slidesToShow={5} arrowsScroll={5}>
            
            {dig.map((card) => (
               <AbduCard key={card.id} card={card} />
            ))
            }
             </Slide>
        </div>
    );
}
export default DigitalMarketing;