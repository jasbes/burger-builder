import React from 'react';

import './styles.css';

interface BuildControlProps {
    label: string;
    more(): void;
    less(): void;
}

const BuildControl: React.FC<BuildControlProps> = (props) => {
  return (
      <div className="build-control">
          <div>{props.label}</div>
          <button onClick={props.less}>Less</button>
          <button onClick={props.more}>More</button>
      </div>
  );
}

export default BuildControl;