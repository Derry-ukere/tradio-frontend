/* eslint-disable quotes */
import React,{useContext} from 'react';
import {CountContext} from './Body';



const Overlay = () => {
  const context = useContext(CountContext);
  const state =  context?.contextState;
  const checkCount = (num: number)=>state && (state.count ? state.count < num : true);
  const checkCountTwo = (num: number, numTwo: number)=>state && (state.count && ((state.count >= num) && (state.count < numTwo)));



  // useEffect(()=>{
  //   console.log();
    
  // },[count]);



  const oldClass = "h3-font font-w--700 ";
  const newClass = "h3-font font-w--700 active";
  return (
    <div className="col-12 col-xl-1 mx-auto mx-lg-0 text-center direct">
      <ul className="roadmap__year list-unstyled d-xl-flex flex-xl-column"><li className= {checkCount(2) ? newClass : oldClass} >USA</li><li className={checkCountTwo(2,5) ? newClass : oldClass}>Ger</li><li className= {checkCountTwo(5,8) ? newClass : oldClass}>GBR</li></ul>
    </div>
  );
};

export const  MemOverlay = React.memo(Overlay);
