import React,{useState} from 'react';


// import {useDispatch, useSelector } from 'react-redux';
// import Demo from '../../components/demo/Index';
// import DemoActions from '../../actions/demo';
// import {RootState} from '../../store';
import {MemoisedNavBar} from '../../organism/nav/Nav';
import {MemoizedLoader} from '../../atom/Loader';


const HomeSCeen = () => {
  // const dispatch = useDispatch();
  // const {payload} = useSelector((state : RootState )=> state.demo);
  // useEffect(()=>{
  //   dispatch(DemoActions.main());
  // },[dispatch]); 
  // const name = 'loading...';
  const [loading, setLoading] = useState(true);

  setTimeout(() =>{
    setLoading(false);
  },2000); 
  return (
    <div>  
      { loading &&  <MemoizedLoader /> } 
      <MemoisedNavBar />
    </div>
  );
};

export default HomeSCeen;


