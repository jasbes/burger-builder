import React from 'react';

import './styles.css';

interface Ingredient {
    type: string;
    amount: number;
}

interface BurgerIngredientProps {
    ingredient: Ingredient;
}

const BurgerIngredient:React.FC<BurgerIngredientProps> = (props) => {
    let ingredient = null;

    switch ( props.ingredient.type ) {
        case ( 'bread-bottom' ):
            ingredient = <div className="bread-bottom"></div>;
            break;
        case ( 'bread-top' ):
            ingredient = (
                <div className="bread-top">
                    <div className="seeds1"></div>
                    <div className="seeds2"></div>
                </div>
            );
            break;
        case ( 'meat' ):
            ingredient = <div className="meat"></div>;
            break;
        case ( 'cheese' ):
            ingredient = <div className="cheese"></div>;
            break;
        case ( 'bacon' ):
            ingredient = <div className="bacon"></div>;
            break;
        case ( 'salad' ):
            ingredient = <div className="salad"></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
};

export default BurgerIngredient;