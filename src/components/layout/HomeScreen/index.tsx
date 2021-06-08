import React from 'react';


// import {useDispatch, useSelector } from 'react-redux';
// import Demo from '../../components/demo/Index';
// import DemoActions from '../../actions/demo';
// import {RootState} from '../../store';
import NavBar from '../../organism/nav/Nav';


const HomeSCeen = () => {
  // const dispatch = useDispatch();
  // const {payload} = useSelector((state : RootState )=> state.demo);
  // useEffect(()=>{
  //   dispatch(DemoActions.main());
  // },[dispatch]); 
  // const name = 'loading...';
  return (
    <div>
   
      <NavBar />
     

    </div>
  );
};

export default HomeSCeen;


