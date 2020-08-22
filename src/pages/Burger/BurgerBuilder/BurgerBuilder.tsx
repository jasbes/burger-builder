import React from 'react';
import Burger from '..';
import BurgerControls from '../BuildControls';

const ingredients = [
    {name: 'salad', amount: 1},
    {name: 'bacon', amount: 1},
    {name: 'cheese', amount: 2},
    {name: 'meat', amount: 2}
];

const BurgerBuilder = () => (
    <div className="burger-builder">
        <Burger ingredients={ingredients} />
        <BurgerControls />
    </div>
);

export default BurgerBuilder;