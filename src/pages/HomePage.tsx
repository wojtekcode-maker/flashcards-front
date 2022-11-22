import React, { useEffect, useState } from 'react';
import axios from "axios";
import {BACK_URL} from "../config/config";
import {RiEmotionSadLine} from "react-icons/ri";

import './HomePage.css';
import {Word} from "../components/Word/Word";

export interface IFlashcard {
  _id: string;
  meaning: string;
  translation: string;
  category: string;
  date: string;
}

export const HomePage = () => {
  const [words, setWords] = useState<Array<IFlashcard> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${BACK_URL}words`);
        setWords(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        return(
          <h2 className="exceptions">Oops, something went wrong</h2>
        )
      }
    })();
  }, []);

  if (loading) {
    return (
      <h2 className="exceptions">Loading...</h2>
    )
  }

  if(!words) {
    return (
      <div className="exceptions">
        <RiEmotionSadLine/>
        <h2 >Brak danych.</h2>
      </div>
    )
  }

  return (
    <div className="words-wrap">
      {
          words.map((word): JSX.Element => {
          return <Word  key={word._id} id={word._id} frontSite={word.meaning} backSite={word.translation} category={word.category}/>
        })
      }
    </div>
  )
}