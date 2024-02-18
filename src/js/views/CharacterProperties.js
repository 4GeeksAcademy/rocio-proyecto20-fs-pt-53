import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const CharacterProperties = () => {
  const params = useParams();
  const { actions, store } = useContext(Context)
  console.log(store)
  



  useEffect(() => {
    actions.getCharacter(params.elementId)
    actions.getPlanets()
  }, [])

  const data = store.character?.result?.properties
  


  return (
    <>
      <div className="d-flex cardBg">
        {store.character?.result?.uid === params.elementId ? (
          <div className="d-flex"> 
            <img className=" m-5" variant="right" src={`https://starwars-visualguide.com/assets/img/characters/${params.elementId}.jpg`} />
            <div className="text m-5">
              <span>Name: {data.name}</span>
              <br></br>
              <span>Height: {data.height}</span>
              <br></br>
              <span>Mass: {data.mass}</span>
              <br></br>
              <span>Hair color: {data.hair_color}</span>
              <br></br>
              <span>Skin color: {data.skin_color}</span>
              <br></br>
              <span>Eye color: {data.eye_color}</span>
              <br></br>
              <span>Birth year: {data.birth_year}</span>
              <br></br>
              <span>Gender: {data.gender}</span>
              
            </div>

          </div>) : (<div className="spinner-border text-light" role="status">
  <span className="visually-hidden">Loading...</span>
</div>)}


      </div>
    </>

  );
}