import React, {useState} from 'react';

import './Word.css';

interface Props {
  frontSite: string;
  backSite: string;
}

export const Word = (props: Props) => {
  const [flip, setFlip] = useState(false);

  return (
    <div className="flashcard flip-card" onClick={() => setFlip(!flip)}>
      <div className="flip-card-inner">
        <p className="flip-card-front">
          {props.frontSite}
        </p>
        <p className="flip-card-back">
          {props.backSite}
        </p>
      </div>
    </div>
  )
}