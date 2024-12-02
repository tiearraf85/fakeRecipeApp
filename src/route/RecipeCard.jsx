import './RecipeCard.scss';
import Recipe from './Recipe';
import { Rating } from "@mui/material";



export default function RecipeCard({ recipe, setSelectedCard }) {
    let instructions = recipe.instructions;
    let ingredients = recipe.ingredients;
    let totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;



    return (
        <div onClick={() => setSelectedCard(recipe.id)} className='card'>

            <h1>{recipe.name}</h1>
            <div className='wrap'>
                <div className="foodImg" >
                    <img width={300} src={recipe.image} alt={recipe.name} key={recipe.id}></img>
                </div>
                <Rating
                    className="rate"
                    name="product-rating"
                    value={recipe.rating}
                    precision={0.1}
                    readOnly />

<div className="time">

                <h4>rating: {recipe.rating}</h4>
                <h5>Total Time: {totalTime}</h5>
                </div>
                <div className="middle">
                    <article>
                        <div>
                            <h3>Ingredients</h3>
                            <ul>
                                {ingredients.map((ingredient) => (
                                    <li key={crypto.randomUUID()}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3>Instructions</h3>
                            <ol><span className="color">
                                {instructions.map((instruction) => (
                                    <li key={crypto.randomUUID()}>{instruction}</li>
                                ))}
                            </span></ol>
                        </div>

                    </article>
                </div>
            </div>
        </div>
    );
}
{/* <Recipe /> */ }