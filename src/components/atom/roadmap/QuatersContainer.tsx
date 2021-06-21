import React, {useState,useContext , useEffect} from 'react';
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


  const [disableTopButton, setTopDisableButton] = useState(false);
  const [disableDownButton, setDownDisableButton] = useState(true);
  const context = useContext(CountContext);
  const count =  context?.contextState.count;
  // const [show] = useState(false);
  // const [showTwo] = useState(true);

  useEffect(()=>{
    console.log('count  from efect is', count);
  },[]);
  const checkCount  = (digit : number) =>  digit === count;


  const handleClickOne = () => {
    // console.log('check count is --', checkCount( 3));
    console.log('count is', count);
    context?.countDispatch({type: 'increment-count'}); 
    if (count){
      setDownDisableButton(false);
    } 
    if (count && (count > 5)){
      setTopDisableButton(true);
    }
  };

  const handleClickTwo = () => {
    console.log('count is', count);
    context?.countDispatch({type: 'decrement-count'});
    !count? setDownDisableButton(true) : setTopDisableButton(false);
  };

  
  return (
    <div className="col-12 col-xl-9 ml-xl-auto direct">
      <div className="carosuel-slider--v6 slick-initialized slick-slider">
        <TopBuuton ClickHandler = {handleClickOne} disableButton = {disableTopButton}/>
        <div className="slick-list draggable" style={{height: '298.75px'}}>
          <div className="slick-track" style={{opacity: 1, width: '90%', transform: 'translate3d(0px, 0px, 0px)'}}>
            {checkCount(-1) && <MemQuaterOne />}
            {checkCount(0) && <MemQuaterTwo />}
            {checkCount(1) &&<MemQuaterThree />}
            {checkCount(2) && <QuaterFourMem />}
            {checkCount(3) && <QuaterFiveMem />}
            {checkCount(4) && <QuaterSixMem />}
            {checkCount(5) &&  <QuaterSevenMem />}
            {checkCount(6) && <QuaterEightMem />}
            { checkCount(7) &&<QuaterNineM   />}
          </div>
        </div>
        < ButtomButton ClickHandler = {handleClickTwo} disableDownButton = {disableDownButton}/>
      </div>
    </div>
  );
};

export const MemQuatersContainer = React.memo(QuatersContainer);
