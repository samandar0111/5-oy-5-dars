import React, { useEffect, useState } from "react";
import { UseAxios } from "../../hooks/UseAxios";
import home from "./home.module.css"

export const Hero = ()=>{

const {data,loading,error} = UseAxios({method:"GET",url:"/products"})


 const onbtn = (id)=>{
  const karzina = JSON.parse(localStorage.getItem("karzina"))
  if(karzina && karzina.every(el=>el.id !== id)){
    let product = data.filter(el=>el.id == id)
    product[0].count=0
    localStorage.setItem("karzina",JSON.stringify(karzina.concat(product)))

  }else if(!karzina){
    let product = data.filter(el=>el.id == id)
    product[0].count=0
    localStorage.setItem("karzina",JSON.stringify(product))
  }
 }
  return <div className="container">
  <div className={home.hero}>
      <h1 className={home.hero_title}>Super Flash Sale
50% Off</h1>
<ul className={home.card__list}>
{loading? <h2>loading...</h2>:data.map((el)=>{
 if(el.id == 6||el.id == 8|| el.id == 10){
  return <li className={home.top_card} key={el.id}>
    <h2 className={home.card_title}>{el.title}</h2>
    <img className={home.crad_img} src={el.image} alt="rasm" />
    <span className={home.card_price}><del>{el.price} $ </del><span className={home.card_aksiya}>24% of</span></span>
    <span className={home.aksiya_narx}>{el.price*0.76} $</span>
    <button  onClick={()=>{onbtn(el.id)}} type="submit" className={home.karzinaplus}></button>
  </li>
 }
})}
</ul> 
  </div>
  </div>
}