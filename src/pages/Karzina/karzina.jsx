import React, { useEffect, useState } from "react";
import karzina from "./karzina.module.css"
export const Karzina = ()=>{
const [data,setdata] = useState("")
const [counter,setcounter] = useState(true)
useEffect(()=>{
  setdata(JSON.parse(localStorage.getItem("karzina")))
  
},[counter])
const DelFunc=(id)=>{
  setdata(data.filter(el=>el.id!== id))
}
const plusbtn=(id)=>{
let obj = data.filter(el=>el.id == id)
 
obj[0].count = obj[0].count+1
let arr = []
for (const el of data) {
  if(el.id == obj[0].id){
    arr.push(obj[0])
  }else{
    arr.push(el)
  }
}
setdata(arr)
}
const minusbtn=(id)=>{
  let obj = data.filter(el=>el.id == id)
   
 if(obj[0].count > 0){
  obj[0].count = obj[0].count-1
  let arr = []
  for (const el of data) {
    if(el.id == obj[0].id){
      arr.push(obj[0])
    }else{
      arr.push(el)
    }
  }
  setdata(arr)
 }
  }

data? localStorage.setItem("karzina",JSON.stringify(data)): ""


const pul = ()=>{
  let som = 0
  for(let el of data){
    som += el.count * el.price * 0.76
  }
  return som
}

  return (
    <div className="container">
    <ul className={karzina.navbar}>
      <li>PRODUCT</li>
      <li>PRICE</li>
      <li>QTY</li>
      <li>UNIT PRICE</li>
    </ul>
    <ul>
      {
        data? data.map(el=>{
          return <li className={karzina.item} key={el.id}>
             <div className={karzina.box1}>
             <button onClick={()=>DelFunc(el.id)} className={karzina.delbtn}>x</button>
             <img className={karzina.image} src={el.image} alt="" />
             <h3 className={karzina.title}>{el.title}</h3>
             </div>
             <div className={karzina.box2}>
              <span className={karzina.unit__count}>{el.price* 0.76 * el.count}</span>
              <div className={karzina.count__box}>
                <button onClick={()=>{minusbtn(el.id)}} className={karzina.btn__plus}>-</button>
                <span>{el.count}</span>
                <button onClick={()=>{plusbtn(el.id)}} className={karzina.btn__plus}>+</button>
              </div>
              <span className={karzina.unit__count}>{el.price*0.76}</span>
             </div>

          </li>
        }):""
      }
    </ul>
      <div className={karzina.end__list}>
        <div className={karzina.end}>subtotal <span>{pul()}</span></div>
        <div className={karzina.end}><span>Shipping fee</span> $20</div>
        <div className={karzina.end}>Coupon <span>No</span></div>
        <div className={karzina.end}>TOTAL <span>{pul() + 20}</span></div>
        <button onClick={()=>{
         if(data){
          localStorage.removeItem("karzina")
          setdata("")
         }
        }} className={karzina.ent__btn}>Check out</button>
      </div>
    </div>
  )
}