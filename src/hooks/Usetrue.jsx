import React, { useState } from 'react'

export const Usetrue = () => {
  const [state,setstate] = useState(false)
  const Open =()=>{return setstate(true)}
  const Close =()=>{return setstate(false)}
  const Toogle =()=>{return setstate(!state)}
  return {state,Open,Close,Toogle}
}
