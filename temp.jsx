import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

export default function Apps()
{
 const [loading,SetLoading]=useState(false);
 useEffect(()=>{
    SetLoading(true)
    setTimeout(()=>{

      SetLoading(false)
    },5000)


 },[])
   if(loading)
   {
   return (
    <>
   <span className="spinner-grow  text-danger"></span>
   <span className="spinner-grow "></span>
   <span className="spinner-grow "></span>
    </>
   )
   
   }
  
    return(
    "return next page"
    )
   
   
}