import {useParams} from "react-router-dom";
import Recipe from './Recipe';

// export async function loader({params}) {
//    const baseUrl = ('http://dummyjson.com/lunch');
//     const lunchUrl =  `${baseUrl}recipes/meal-type/${params.mealType}`;
//     const resp = await fetch(lunchUrl, {cache: 'default'});
//     const lunch = await resp.json();
//     return lunch;
    
// }

export default function Lunch() {
    const { mealType } = useParams();

    return (
        <>
        </>

    )
}