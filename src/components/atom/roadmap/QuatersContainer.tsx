import React, {useState,useEffect,useContext} from 'react';
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
import {CountContext} from './Body';

const QuatersContainer = () => {

  // const [count, setCount] = useState(-1);
 
  // const [showHeaderOne, setshowHeaderOne] = useState(true);
  // const [showHeaderTwo] = useState(false);
  // const [showHeaderThree] = useState(false);
  const [disableTopButton, setTopDisableButton] = useState(false);
  const [disableDownButton, setDownDisableButton] = useState(true);
  const context = useContext(CountContext);
  const count =  context?.contextState.count;
  const pixel =  context?.contextState.pixels;




  useEffect(()=>{
    console.log('countfrom container - ', count);
  },[count]);

  const handleClickOne = () => {
    console.log('countfrom handleOne');
    context?.countDispatch({type: 'increment-count'}); 
    context?.countDispatch({type: 'increment-pixel'});  
    if (count){
      setDownDisableButton(false);
    } 
    if (count && (count > 6)){
      setTopDisableButton(true);
    }
  };

  const handleClickTwo = () => {
    console.log('countfrom handleTwo');
    context?.countDispatch({type: 'decrement-count'});
    context?.countDispatch({type: 'decrement-pixel'});
    !count? setDownDisableButton(true) : setTopDisableButton(false);
  };

  
  return (
    <div className="col-12 col-xl-9 ml-xl-auto">
      <div className="carosuel-slider--v6 slick-initialized slick-slider">
        <TopBuuton ClickHandler = {handleClickOne} disableButton = {disableTopButton}/>
        <div className="slick-list draggable" style={{height: '298.75px'}}>
          <div className="slick-track" style={{opacity: 1, width: '4131px', transform: `translate3d(${pixel}px, 0px, 0px)`}}>
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
        < ButtomButton ClickHandler = {handleClickTwo} disableDownButton = {disableDownButton}/>
      </div>
    </div>
  );
};

export const MemQuatersContainer = React.memo(QuatersContainer);
