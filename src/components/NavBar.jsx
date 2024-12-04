import { NavLink } from 'react-router-dom';
import './NavBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    const [expanded, setExpanded] = useState(false);


    const mealTypes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Breakfast', path: 'recipes/breakfast' },
        { id: 3, name: 'Lunch', path: 'recipes/lunch' },
        { id: 4, name: 'Dinner', path: 'recipes/dinner' },
        { id: 5, name: 'Snacks', path: 'recipes/snack' },
        { id: 6, name: 'Desserts', path: 'recipes/dessert' },

    ];


    return (
        <div>
            <div className={`navbar ${expanded ? "expanded" : ''}`}>
                {mealTypes.map((meal) => (
                    <NavLink onClick={() => setExpanded(false)}
                        to={meal.path} key={meal.id}>
                        {meal.name}
                    </NavLink>
                ))}





        
            </div>
        </div>
    );
} 