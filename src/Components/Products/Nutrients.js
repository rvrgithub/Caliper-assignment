
import React, { useCallback, useEffect } from 'react'
// import {useSelector} from "react/redux"
import {getDataAPI} from "../../Redux/action"
import { useDispatch, useSelector } from 'react-redux'
export const Nutrients = () => {
  const dispatch = useDispatch();
  const {DataReducer} = useSelector((store)=>store);
    console.log("data1",DataReducer)
  // const getCountryHandler = useCallback(() => {
  //   dispatch(getDataAPI());
  // }, [dispatch]);


  useEffect(()=>{
    if(DataReducer?.length ===0){
      dispatch(getDataAPI())
    }
  },[dispatch,DataReducer?.length]);
  

  console.log("data",DataReducer  )
  return (
    <div>
    hello 
    
    
    
    </div>
  )
}
