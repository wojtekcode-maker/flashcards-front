import React, {Dispatch, FormEvent, SetStateAction, useState} from 'react';
import axios from "axios";
import {BACK_URL} from "../../config/config";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

interface Props {
  id: string;
  frontSite: string;
  backSite: string;
  category: string;
  closeModal: Dispatcher<boolean>;
}

interface FormData {
  meaning: string;
  translation: string;
  category?: string;
}

export const ModifyWordModal = (props: Props) => {
  const [data, setData] = useState<FormData>({
    meaning: props.frontSite,
    translation: props.backSite,
    category: props.category,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.patch(`${BACK_URL}words/${props.id}`, data);
      props.closeModal(false);
      window.location.reload();
    } catch (e) {
      return <h1>Cannot add new word. Try later.</h1>
    }
  };

  const deleteOnClick = async(e: React.MouseEvent<HTMLElement>)  => {
    e.preventDefault();
    try {
      await axios.delete(`${BACK_URL}words/${props.id}`);
      props.closeModal(false);
      window.location.reload();
    } catch (e) {
      return <h1>Cannot add new word. Try later.</h1>
    }
  }

  return (
    <div className="background">
      <div className="modalWrapper">
        <button onClick={() => props.closeModal(false)} className="modalBtn close">x</button>
        <div className="title">
          <h1>Modify The Word</h1>
        </div>
        <div className="body">
          <form onSubmit={e => {
            handleSubmit(e)
          }}>
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
            <button className="modalBtn close" onClick={deleteOnClick}>Delete</button>
            <button className="modalBtn submit">Save</button>
            <br />
            <button onClick={() => props.closeModal(false)} className="modalBtn close">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  )
}