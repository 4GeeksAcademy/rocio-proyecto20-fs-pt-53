import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


const People = () => {
  const { store, actions } = useContext(Context);
  if (!store.people.hasOwnProperty("results")) return console.log("no existe results")

  return (
    <div className="container">
      {
        store.people.results.map((element) => {

          return (

            <Card key={element.uid} className="people" >
              <Card.Img variant="top" src={"https://starwars-visualguide.com/assets/img/characters/" + (element.uid) + ".jpg"} />
              <Card.Body>
                <Card.Title>{element.name}</Card.Title>
                <div className="text-center">
                  
                    <Link className="btn btn-warning me-5" to={`/character/${element.uid}`}><i className="fa-solid fa-circle-info"></i></Link>
                  
                  
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

export default People