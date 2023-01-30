import React from "react";
import { Outlet } from "react-router-dom"
import { Header,Footer } from "../components";
export const MainLayout = ()=>{


  return <>
  <header><Header/></header>
  <main><Outlet/></main>
  <footer><Footer/></footer>
  </>
}