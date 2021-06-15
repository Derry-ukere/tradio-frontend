import React, {useState,useEffect} from 'react';
import ButtomButton from './ButtomButton';
import TopBuuton from './TopBuuton';
import {MemQuaterOne} from './QuaterOne';
import {MemQuaterTwo} from './QuaterTwo';
import {MemQuaterThree} from './QuaterThree';
import {QuaterFourMem} from './QuaterFour';
import {QuaterFiveMem} from './QuaterFive';
import {QuaterSixMem} from './QuaterSix';
import {QuaterSevenMem} from './QuaterSeven';
import {QuaterEightMem} from './QuaterEight';
import {QuaterNineM} from './QuaterNine';

const QuatersContainer = () => {

  const [count, setCount] = useState(1);
  const [showHeaderOne, setshowHeaderOne] = useState(true);
  const [showHeaderTwo] = useState(false);
  const [showHeaderThree] = useState(false);


  useEffect(()=>{
    if (count >= 3){
      setshowHeaderOne(false);
    }
    console.log(`headeOne is ${showHeaderOne}, and count is ${count}`);
    console.log(`headerTwo is ${showHeaderTwo}, and count is ${count}`);
    console.log(`headeThree is ${showHeaderThree}, and count is ${count}`);
   
  },[count]);

  const handleClickOne = () => {
    setCount((prevState) => prevState + 1);
  
  };

  const handleClickTwo = () => {
    setCount((prevState) => prevState - 1);
  };

  //each click controls transition on display
  //if the last component is displayed the button is disabled
  
  return (
    <div className="col-12 col-xl-9 ml-xl-auto">
      <div className="carosuel-slider--v6 slick-initialized slick-slider">
        <TopBuuton ClickHandler = {handleClickOne} />
        <div className="slick-list draggable" style={{height: '298.75px'}}>
          <div className="slick-track" style={{opacity: 1, width: '4131px', transform: 'translate3d(1836px, 0px, 0px)'}}>
            <MemQuaterOne />
            <MemQuaterTwo />
            <MemQuaterThree />
            <QuaterFourMem />
            <QuaterFiveMem />
            <QuaterSixMem />
            <QuaterSevenMem />
            <QuaterEightMem />
            <QuaterNineM   />
          </div>
        </div>
        < ButtomButton ClickHandler = {handleClickTwo}/>
      </div>
    </div>
  );
};

export const MemQuatersContainer = React.memo(QuatersContainer);
