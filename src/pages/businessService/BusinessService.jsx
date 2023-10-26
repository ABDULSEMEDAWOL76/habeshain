import React from "react";
import {businessService} from "../../data";
import Slide from "../../components/slide/Slide";
import AbduCard from "../../components/abduCard/AbduCard";
function BusinessService(){
    return(
        <div>
             <Slide slidesToShow={5} arrowsScroll={5}>
            
            {businessService.map((card) => (
               <AbduCard key={card.id} card={card} />
            ))
            }
             </Slide>
        </div>
    );
}
export default BusinessService;