// import React from "react";
import { abdu } from "../../data";
import Slide from "../../components/slide/Slide";
import AbduCard from "../../components/abduCard/AbduCard";
// import {Link} from "react-router-dom";
// function WriteReviewss(){
//     return(
        
            
//             <Slide slidesToShow={5} arrowsScroll={5}>
//         {abdu.map((card) => (
//           <CatCard key={card.id} card={card} />
//         ))}
//          </Slide>
        
//     );
// }
// export default WriteReviewss


const  WriteReviewss = () => {
  return (
    <div>
         <Slide slidesToShow={5} arrowsScroll={5}>
            
                    {abdu.map((card) => (
                       <AbduCard key={card.id} card={card} />
                    ))
                    }
                     </Slide>
                  
                    
           
    </div>
    
  );
  
};

export default  WriteReviewss;
