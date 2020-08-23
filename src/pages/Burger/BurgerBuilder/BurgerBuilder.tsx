import React, { useState } from 'react';
import Burger from '..';
import BurgerControls from '../BuildControls';

const initState = [
    {type: 'salad', amount: 1},
    {type: 'bacon', amount: 1},
    {type: 'cheese', amount: 2},
    {type: 'meat', amount: 2}
];

const BurgerBuilder = () => {
    const [ingredients, setIngredients] = useState(initState);

    function handleAddIngredient(type: string) {

        const index = initState.findIndex(ingredient => ingredient.type === type);

        if(index < 0) {
            return;
        }

        const updatedIngredients = [...initState];

        updatedIngredients[index].amount++;

        setIngredients(updatedIngredients);

    };

    function handleRemoveIngredient(type: string) {
        const index = initState.findIndex(ingredient => ingredient.type === type);

        if(index < 0 || initState[index].amount === 0) {
            return;
        }

        const updatedIngredients = [...initState];

        updatedIngredients[index].amount--;

        setIngredients(updatedIngredients);
    };

    return (<div className="burger-builder">
        <Burger ingredients={ingredients} />
        <BurgerControls 
            handleAddIngredient={handleAddIngredient} 
            handleRemoveIngredient={handleRemoveIngredient} 
        />
    </div>)
};

export default BurgerBuilder;