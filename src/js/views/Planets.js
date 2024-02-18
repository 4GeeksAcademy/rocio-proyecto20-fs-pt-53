import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";





export const Planets = () => {
  const { store, actions } = useContext(Context);
  if (!store.planets.hasOwnProperty("results")) return console.log("no existe results")



  return (
    <div className="container">
      {
        store.planets.results.map((element) => {

          return (

            <Card key={element.uid} className="planets" >
              <Card.Img variant="top" src={"https://starwars-visualguide.com/assets/img/planets/" + (element.uid) + ".jpg"}
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://th.bing.com/th/id/OIG1.I7jnfNOWhv_R_ceHEPxc?w=1024&h=1024&rs=1&pid=ImgDetMain' }} />
              <Card.Body>
                <Card.Title>{element.name}</Card.Title>

                <div className="text-center">
                  <Link className="btn btn-warning me-5" to={`/planets/${element.uid}`}><i className="fa-solid fa-circle-info"></i></Link>
                  <button className="btn btn-danger ms-4" onClick={() => { actions.addFavorites(element.name) }}>
                    <i className="fas fa-heart"></i>
                  </button>

                </div>
              </Card.Body>
            </Card>
          )
        })}
    </div>
  )
}