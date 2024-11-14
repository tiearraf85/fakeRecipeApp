import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Recipe from './Recipe';



export default function Rating() {
    const stars = [];
   const ratingNum = product.rating.rate;
   for(let i= 0; i < ratingNum; i++){
    stars.push(
        <FontAwesomeIcon icon={faStar}/>
       
    )
   
}
  <Recipe/>

}

