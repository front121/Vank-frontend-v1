import React, { useEffect } from 'react'
import { Recieve } from './Recieve/Recieve'
import { Send } from './Send/Send'

export const VankPay = ({selectView,veiwHistorial}) => {
  useEffect(()=>{
    
  },[])
  return (
   <>
    {selectView==1?<Send onClickHistorial={veiwHistorial}/>:<Recieve/>}
   </> 
    
  )
}
