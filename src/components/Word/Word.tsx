import React, {useState} from 'react';

import './Word.css';
import {ModifyWordModal} from "../ModifyWordModal/ModifyWordModal";

interface Props {
  id: string;
  frontSite: string;
  backSite: string;
  category: string;
}

export const Word = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (e.detail === 2) {
      setOpenModal(true);
    }
  }

  return (
    <>
      <div className="flashcard flip-card" onClick={handleClick}>
        <div className="flip-card-inner">
          <p className="flip-card-front">
            {props.frontSite}
          </p>
          <p className="flip-card-back">
            {props.backSite}
          </p>
        </div>
      </div>
      {openModal && <ModifyWordModal closeModal={setOpenModal} frontSite={props.frontSite} backSite={props.backSite} id={props.id} category={props.category}/>}
    </>
  )
}