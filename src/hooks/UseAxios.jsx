import React, { useEffect, useState } from 'react'
import { request } from '../request'


export const UseAxios = ({body = null,method=null,url=null}) => {
const [data,setdata] = useState()
const [loading,setloading] = useState(true)
const [error,seterror] = useState()

const Fetcdata = ()=>{
  request({body,method,url}).then(response=>{
   setdata(response.data)
    setloading(false)
  }).catch(error=>{seterror(error)})

}
useEffect(()=>{

if(method&&url){
    Fetcdata()
  }
  
},[method,body,url])

  return {data,loading,error}
}
