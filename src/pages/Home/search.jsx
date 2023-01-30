import React, { useState } from 'react'
import { UseAxios } from '../../hooks/UseAxios'
import home from "./home.module.css"
export const Search = () => {
  const [message,setmessage]=useState("")
  const [newArr,setnewArr] = useState()
  const {data,loading,error} = UseAxios({method:"GET",url:"/products"})
  const onbtn = (id)=>{
    const karzina = JSON.parse(localStorage.getItem("karzina"))
    if(karzina && karzina.every(el=>el.id !== id)){
      let product = data.filter(el=>el.id == id)
      localStorage.setItem("karzina",JSON.stringify(karzina.concat(product)))
  
    }else if(!karzina){
      let product = data.filter(el=>el.id == id)
      localStorage.setItem("karzina",JSON.stringify(product))
    }
   }
const Change =(e)=>{
setmessage(e.target.value)
setnewArr(data.filter(el => el.title.toLowerCase().includes(message.toLowerCase()))) 
console.log(newArr);
} 
  return (
    <div className='container'>
      <form className={home.search__form} onSubmit={(e)=>e.preventDefault()}>
        <input className={home.search} onChange={Change} value={message}  type="text" name='search' />
        
      </form>
      <ul className={home.product__list}>
      {
        (newArr && message.length !== 0)? newArr.map(el=>{
          return<li key={el.id}>
      <img className={home.list__image} src={el.image} alt="" />
      <h3 className={home.list__title}>{el.title}</h3>
      <div className={home.list_countbox}>
        <span className={home.prise_skidka}>${el.price * 0.76}</span>
        <span className={home.prise__del}><del>${el.price}</del></span>
        <span className={home.aksiya__24}>24% of</span>
      </div>
      <button  onClick={()=>{onbtn(el.id)}} type="submit" className={home.karzinaplus}></button>
    </li>
        }) : ""
      }</ul>
    </div>
  )
}
