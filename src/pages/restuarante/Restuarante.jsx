import React from "react";
import { abdu} from "../../data";
import Slide from "../../components/slide/Slide";
import AbduCard from "../../components/abduCard/AbduCard";
function Restuarante (){
    return(
        <div>
   <Slide slidesToShow={5} arrowsScroll={5}>
            
            {abdu.map((card) => (
               <AbduCard key={card.id} card={card} />
            ))
            }
             </Slide>
        </div>
    );
}
export default Restuarante;