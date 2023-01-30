import React, { useState } from 'react'
import home from "./home.module.css"
import { UseAxios } from '../../hooks/UseAxios'
import { Usetrue } from '../../hooks/Usetrue'
export const Best = () => {
  const {data,loading,error} = UseAxios({method:"GET",url:"/products"})
  const {data:category,loading:category__loading,error:category__error} = UseAxios({method:"GET",url:"/products/categories"})
const {Close,Open,Toogle,state} = Usetrue()
const [sort,setsort] = useState('')
 

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
  return (
    <div className='container'>
    <h2 className={home.best__title}>BEST SELLER</h2>
     <div className={home.category__list}>
     <button onClick={()=>setsort("")} className={home.category} id='all'>All</button>
    {category?.map(el=>{
      return <button onClick={()=>setsort(el)} id={el} className={home.category} key={el}>{el}</button>
    })}
     </div>
     <ul className={home.product__list}>
   {
   (state|| sort)?  data?.filter(el => el.category == sort || sort == "").map(el=>{
    return <li className={home.item2} key={el.id}>
      <img className={home.list__image} src={el.image} alt="" />
      <h3 className={home.list__title}>{el.title}</h3>
      <div className={home.list_countbox}>
        <span className={home.prise_skidka}>${el.price * 0.76}</span>
        <span className={home.prise__del}><del>${el.price}</del></span>
        <span className={home.aksiya__24}>24% of</span>
      </div>
      <button  onClick={()=>{onbtn(el.id)}} type="submit" className={home.karzinaplus}></button>
    </li>
   }) : data?.filter(el=>el.id <= 8).map(el=>{
    return <li key={el.id}>
    <img className={home.list__image} src={el.image} alt="" />
    <h3 className={home.list__title}>{el.title}</h3>
    <div className={home.list_countbox}>
      <span className={home.prise_skidka}>${el.price * 0.76}</span>
      <span className={home.prise__del}><del>${el.price}</del></span>
      <span className={home.aksiya__24}>24% of</span>
    </div>
    <button  onClick={()=>{onbtn(el.id)}} type="submit" className={home.karzinaplus}></button>
  </li>
   }) 
   }

   </ul>
   <button onClick={()=>Toogle()} className={home.load}>LOAD MORE</button>
    </div>
  )
}
