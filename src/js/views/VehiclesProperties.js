import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const VehiclesProperties = () => {
  const params = useParams();
  const { actions, store } = useContext(Context)
  console.log(store)



  useEffect(() => {
    actions.getVehicles(params.elementId)
  }, [])

  const data = store.vehicles?.result?.properties
  

  return (
    <>
      <div className="d-flex cardBg">
        {store.vehicles?.result?.uid === params.elementId ? (
          <div className="d-flex">
            <img className="m-5" variant="right" src={`https://starwars-visualguide.com/assets/img/vehicles/${params.elementId}.jpg`} />
            
            <div className="text m-5"> 
                <span>Model: {data.model}</span>
                <br></br>
                <span>Vehicles class: {data.vehicle_class}</span>
                <br></br>
                <span>Manufacter: {data.manufacturer}</span>
                <br></br>
                <span>Cost in credits: {data.cost_in_credits}</span>
                <br></br>
                <span>Length: {data.length}</span>
                <br></br>
                <span>Crew: {data.crew}</span>
                <br></br>
                <span>Passengers: {data.passengers}</span>
                <br></br>
                <span>Max atmosphering speed: {data.max_atmosphering_speed}</span>
                <br></br>
                <span>Cargo capacity: {data.cargo_capacity}</span>
                <br></br>
                <span>Consumables: {data.consumables}</span>
                             
                </div>
            </div>):(<div className="spinner-border text-light" role="status">
  <span className="visually-hidden">Loading...</span>
</div>)}
          

      </div>
    </>

  );
}