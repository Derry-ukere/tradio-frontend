import React ,{useReducer,useEffect,Dispatch} from 'react';
import {MemOverlay} from './Overlay';
import {MemQuatersContainer} from './QuatersContainer';


interface stateType {
  count: number,
  pixels: number
}

interface actionType{
  type: 'increment-count' | 'decrement-count' | 'increment-pixel' | 'decrement-pixel';
}
interface countInterface {
  contextState: stateType, 
  countDispatch: Dispatch<actionType>
}



export const CountContext = React.createContext<countInterface | null>(null);


const initialState = {
  count: -1,
  pixels: 0
};


const reducer = (state :stateType,  action: actionType) =>{
  switch (action.type) {
    case 'increment-count':
      return {...state,  count : state.count + 1};
    case 'decrement-count':
      return {...state, count : state.count - 1};
    case 'increment-pixel':
      return {...state, pixels: state.pixels + 450};
    case 'decrement-pixel':
      return {...state, pixels: state.pixels - 450};
    
    default:
      return state;
  }
};


const Body = () => {
  const [preState, dispatch] = useReducer(reducer, initialState);
  useEffect(()=>{
    console.log('count from body is --',preState.count);
    console.log('pixels from body is --',preState.pixels);

  });

  const options = {
    contextState: preState,
    countDispatch: dispatch
  };

  return ( 
    <CountContext.Provider value = {options}>
      <div className="row align-items-center pb-7 pb-md-0 reveal">
        <MemOverlay /> 
        <MemQuatersContainer />
      </div>
    </CountContext.Provider>
   
  );
};

export const MemBody = React.memo(Body);
