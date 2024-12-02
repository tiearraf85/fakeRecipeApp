import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './FullCard.scss';
import { faSearchengin } from "@fortawesome/free-brands-svg-icons/faSearchengin";
import { redirectDocument } from "react-router-dom";
import { Rating } from "@mui/material";

export default function FullCard({ recipe, setSelectedCard }) {

    let instructions = recipe.instructions;
    let ingredients = recipe.ingredients;
    let totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

    return (
        <>
            <div className="fullCard">
                <div className="full">
                    <span className="difficult">{recipe.difficulty}</span>
                    <div className="name">
                        <h1 className="fullName">{recipe.name}</h1>
                    </div>
                    <img className="image" src={recipe.image} alt={recipe.image}
                        width={700} />
                    <Rating className="rate" name="product-rating"
                        value="recipe.rating" precision={0.1} readOnly />

                    <h2><span>RATING: </span>{recipe.rating}</h2>
                    <div className="set">
                        <ul className="unOrder">
                            <p className="ingred">Ingredients:</p>
                            {ingredients.map((ingred) => (<li key={ingred}>{ingred}</li>))}
                        </ul>

                        <ol className="ordered">
                            <p className="instru">Instructions:</p>
                            {instructions.map((inst) => (<li key={inst}>{inst}</li>))}
                        </ol>
                    </div>
                    <p>
                        <span className="serv">Servings: </span>
                        {recipe.servings}
                    </p>
                    <div className="time">
                    <div>
                        <p><span className="color">PREP TIME MINUTES: </span>{recipe.prepTimeMinutes}</p>
                        <p><span className="color">COOK TIME MINUTES: </span>{recipe.cookTimeMinutes}</p>
                        <p><span className="color">TOTAL COOK TIME: </span>{totalTime}</p>
                    </div>
                    <div>
                        <p><span className="color">CUISINE: </span> {recipe.cuisine}</p>
                        <p><span className="color">CALORIES: </span> {recipe.caloriesPerServing}</p>
                        <p><span className="color">Review Count: </span>{recipe.reviewCount}</p>
                    </div>
                    </div>
                    <button className="backButt" onClick={() => setSelectedCard((prev) => !prev)}>
                        <FontAwesomeIcon icon={faSearchengin} className="search"/>...
                    </button>


                </div>
            </div>

        </>
    )
}