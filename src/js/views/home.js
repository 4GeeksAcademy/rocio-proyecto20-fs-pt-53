import React from "react";
import "../../styles/home.css";
import People from "./People";
import { Vehicles } from "./Vehicles";
import { Planets } from "./Planets";



export const Home = () => {
  return (
    <>
      <People /><Vehicles /><Planets />
    </>
      )
}
