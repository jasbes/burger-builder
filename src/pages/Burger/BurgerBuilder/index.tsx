import React from 'react';
import Burger from '..';

const ingredients = [
    {name: 'salad', amount: 1},
    {name: 'bacon', amount: 1},
    {name: 'cheese', amount: 2},
    {name: 'meat', amount: 2}
];

const BurgerBuilder = () => (
    <>
        <Burger ingredients={ingredients} />
    </>
);

export default BurgerBuilder;