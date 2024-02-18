import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const PlanetsProperties = () => {
  const params = useParams();
  const { actions, store } = useContext(Context)
  console.log(store)



  useEffect(() => {
    actions.getPlanets(params.elementId)
  }, [])

  const data = store.planets?.result?.properties


  return (
    <>
      <div className="d-flex cardBg">
        {store.planets?.result?.uid === params.elementId ? (
          <div className="d-flex">
            <img className="m-5" variant="right" src={`https://starwars-visualguide.com/assets/img/planets/${params.elementId}.jpg`}
             onError={(e) => { e.target.onerror = null; e.target.src = 'https://th.bing.com/th/id/OIG1.I7jnfNOWhv_R_ceHEPxc?w=1024&h=1024&rs=1&pid=ImgDetMain' }} />

            <div className="text m-5"> 
                <span>Name: {data.name}</span>
                <br></br>
                <span>Diameter: {data.diameter}</span>
                <br></br>
                <span>Rotation period: {data.rotation_period}</span>
                <br></br>
                <span>Gravity: {data.gravity}</span>
                <br></br>
                <span>Population: {data.population}</span>
                <br></br>
                <span>CLiamte: {data.climate}</span>
                <br></br>
                <span>Terrain: {data.terrain}</span>
                <br></br>
                <span>Surface Water: {data.surface_water}</span><span>Height: {data.height}</span>
            </div>
          </div>
        ) : (<div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>)}


      </div>
    </>

  );
}