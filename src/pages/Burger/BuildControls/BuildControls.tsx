import React from 'react';

import './styles.css';
import BuildControl from './BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

interface BuildControlsProps {
  handleAddIngredient(type: string): void;
  handleRemoveIngredient(type: string): void;
}

const BuildControls: React.FC<BuildControlsProps> = (props) => {
  return (
    <div className="build-controls">
      {controls.map(
        ctrl => <BuildControl 
                  key={ctrl.label} 
                  label={ctrl.label} 
                  more={() => props.handleAddIngredient(ctrl.type)}
                  less={() => props.handleRemoveIngredient(ctrl.type)}
                />
      )}
    </div>
  );
}

export default BuildControls;