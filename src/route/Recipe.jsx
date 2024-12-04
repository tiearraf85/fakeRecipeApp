import { useLoaderData, useParams } from "react-router-dom";
import './Recipe.scss';
import RecipeCard from "./RecipeCard";
import FullCard from './FullCard';
import { useState } from "react";

export async function loader({ params }) {
    const baseUrl = 'https://dummyjson.com/';
    let recipesUrl = `${baseUrl}recipes`;
    if (params.mealType) {
        recipesUrl = `${baseUrl}recipes/meal-type/${params.mealType}`;
    }
    const resp = await fetch(recipesUrl, { cache: "force-cache" });
    const recipes = await resp.json();
    return recipes;

}


export default function Recipe() {
    const [selectedCard, setSelectedCard] = useState('');
    let wrongPage = false;

    const { mealType } = useParams();
    const { recipes } = useLoaderData();
    let selectedRecipe = recipes.filter((recipe) => recipe.id == selectedCard);
    
    if(selectedRecipe?.length === 0) {
        wrongPage = true;
    }


    return (
        <>
            <div className="recipeMain">

                <h1>{mealType}</h1>
                <div className='recipes'>
                    {selectedCard && !wrongPage ? selectedRecipe.map((recipe) =>
                     <FullCard key={recipe.id} recipe={recipe}
                    setSelectedCard={setSelectedCard}/> ) :




                    recipes.map((recipe) =>

                        <RecipeCard recipe={recipe} key={recipe.id}
                            setSelectedCard={setSelectedCard} />
                    )}

                </div>
            </div>
        </>
    );

}