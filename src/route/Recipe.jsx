import { useLoaderData, useParams } from "react-router-dom";
import './Recipe.scss';
import RecipeCard from "./RecipeCard";

export async function loader({params}) {
    const baseUrl = 'https://dummyjson.com/';
    const recipeUrl =  `${baseUrl}recipes/meal-type/${params.mealType}`;
    const resp = await fetch(recipeUrl, {cache: 'default'});
    const recipes = await resp.json(); 
    return recipes;
}


export default function Recipe() {
    const { mealType } = useParams();
    const {recipes} = useLoaderData();
    
    return (
        <>


        <h1>{mealType}</h1>
        
       
        <div className='recipes'>
           
            {recipes.map((recipe) => 
           
        <RecipeCard  recipe={recipe} key={recipe.id} />
        )} 

       <div>
        
       </div>
        
        </div>
        </>
    );

    
}