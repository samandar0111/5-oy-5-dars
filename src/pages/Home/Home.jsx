import React from "react";
import home from "./home.module.css"
import { Hero } from "./hero";
import { Best } from "./best";
import { Search } from "./search";
export const Home = ()=>{


  return (
    <div>
      <Hero/>
      <Best/>
      <Search/>
    </div>
  )
}