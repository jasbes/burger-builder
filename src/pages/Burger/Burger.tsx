import React from 'react';

import BurgerIngredient  from './BurgerIngredient';

import './styles.css';

interface Ingredient {
    name: string;
    amount: number;
}

interface BurgerProps {
    ingredients: Ingredient[];
}

const Burger: React.FC<BurgerProps> = (props) => {
  return (
      <div className="burger">
        <BurgerIngredient ingredient={{name: 'bread-top', amount: 1}}  />
        {
            getIngredients(props.ingredients)
        }
        <BurgerIngredient ingredient={{name: 'bread-bottom', amount: 1}}  />
      </div>
  );
}

const getIngredients = (ingredients: Ingredient[]) => {
   const hasIngredient =  ingredients
        .flatMap(ingredient => ingredient.amount)
        .reduce((prev, next) => prev + next) > 0;

        if(hasIngredient) {
                return ingredients.map(
                    ingredient => [...Array(ingredient.amount)]
                        .map((_, i) => {
                            return <BurgerIngredient key={ingredient.name+i} ingredient={ingredient}  />;
                        })
                )
        } else {
            return <p>Start adding some ingredients.</p>
        }
}

export default Burger;