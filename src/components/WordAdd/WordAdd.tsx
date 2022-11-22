import React, {Dispatch, FormEvent, SetStateAction, useState} from 'react';

import './WordAdd.css';
import axios from "axios";
import {BACK_URL} from "../../config/config";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

interface Props {
  closeModal: Dispatcher<boolean>;
}

interface FormData {
  meaning: string;
  translation: string;
  category?: string;
}

export const WordAdd = (props: Props) => {
  const [data, setData] = useState<FormData>({
    meaning: '',
    translation: '',
    category: 'All',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${BACK_URL}words`, data);
      props.closeModal(false);
    } catch (e) {
      return <h1>Cannot add new word. Try later.</h1>
    }
  };

  return (
    <div className="background">
      <div className="modalWrapper">
        <button onClick={() => props.closeModal(false)} className="modalBtn close">x</button>
        <div className="title">
          <h1>Add The Word</h1>
        </div>
        <div className="body">
          <form onSubmit={e => {handleSubmit(e)}}>
            <label htmlFor="meaning">
              <p>Meaning:</p>
              <input
                type="text"
                name="meaning"
                value={data.meaning}
                onChange={e => setData({
                  ...data,
                  meaning: e.target.value,
                })}
                required/>
            </label>
            <label htmlFor="translation">
              <p>Translation:</p>
              <input
                type="text"
                name="translation"
                value={data.translation}
                onChange={e => setData({
                  ...data,
                  translation: e.target.value,
                })}
                required/>
            </label>
            <label htmlFor="category">
              <p>Category:</p>
              <input
                type="text"
                value={data.category}
                onChange={e => setData({
                  ...data,
                  category: e.target.value,
                })}
                name="category"
              />
            </label><br/>
            <button onClick={() => props.closeModal(false)} className="modalBtn close">Cancel</button>
            <button className="modalBtn submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}