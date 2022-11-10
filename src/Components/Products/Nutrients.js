import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountryData } from '../../Redux/action';

export const Nutrients = () => {
  const dispatch= useDispatch();
  const [data,setData] = useState("");
  const {nutrients} = useSelector((state)=>state)
  // console.log("nutrients",nutrients);

  const getCountryHandler = useCallback(() => {
    dispatch(getCountryData());
  }, [dispatch]);

  useEffect(() => {
    if (nutrients?.length === 0) {
      getCountryHandler();
    }
  }, [getCountryHandler, nutrients?.length]);
  console.log("countries", nutrients);
     
  // useEffect(()=>{
  //   Hendle()
  // },[])
  // console.log("data",data)

  //   const Hendle=()=>{
  // axios.get("http://localhost:8080/nutrients")
  // .then((res)=>{setData(res.data);
  //    console.log("res",res.data)})
  // .catch((err)=>console.log("err",err));
  // }

  return (
    <div>
    hellokgfhskd
      {/* {data.mep((e)=>{
        <div>
          <p>{e.name}</p>  </div>
      })} */}
    </div>
  )
}
