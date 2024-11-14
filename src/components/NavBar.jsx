import { NavLink } from 'react-router-dom';
import './NavBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignCenter} from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {

    // const [updateCategory, setUpdateCategory] = useState([]);

    const mealTypes = [
        {id: 1, name: 'Recipes', path: '/'},
        {id: 2, name: 'Breakfast', path: 'recipes/breakfast'},
        {id: 3, name: 'Lunch', path: 'recipes/lunch'},
        {id: 4, name: 'Dinner', path: 'recipes/dinner'},
        {id: 5, name: 'Snacks', path: 'recipes/snack'},
        {id: 6, name: 'Desserts', path: 'recipes/dessert'},

    ]

    // const dot = mealTypes;




    return (
        <div>
        
        <nav className='navbar'>
            
            {mealTypes.map((meal) => (
                <NavLink to={meal.path} key={meal.id}>
                    {meal.name} 
                </NavLink>
             ) ) }

   <FontAwesomeIcon icon={faAlignCenter}/>

      
    

           
        </nav>
       </div>
    );
} 