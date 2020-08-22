import React from 'react';

import './styles.css';

interface BuildControlProps {
    label: string;
}

const BuildControl: React.FC<BuildControlProps> = (props) => {
  return (
      <div className="build-control">
          <div>{props.label}</div>
          <button>Less</button>
          <button>More</button>
      </div>
  );
}

export default BuildControl;