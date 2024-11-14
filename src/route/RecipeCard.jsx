import './RecipeCard.scss';
import Recipe from './Recipe';



export default function RecipeCard({recipe}) {
   let instructions = recipe.instructions;
   let ingredients = recipe.ingredients;
console.log(recipe.ingredients)
   
    return (
        <div className='card'> 
        <h1>{recipe.name}</h1>
        <img width={400} src={recipe.image} alt={recipe.name} key={recipe.id}></img>
    <ol>
       {ingredients.map((inst) => 
            <li key={inst}>{inst}</li>
        )}
        <ul>
            {instructions.map((ing) => <li key={ing}>{ing}</li>)}
        </ul>
        </ol>
        </div>
    )
} 
<Recipe/>