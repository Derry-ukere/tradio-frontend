import React,{FC} from 'react';
// import {useDispatch, useSelector } from 'react-redux';
// import Demo from '../../components/demo/Index';
// import DemoActions from '../../actions/demo';
// import {RootState} from '../../store';
// import './css/app.css';
// import './css/custom.css';
// import './css/plugins.min.css';





const Dashboard:FC = ({children}) => {
  // const dispatch = useDispatch();
  // const {payload} = useSelector((state : RootState )=> state.demo);
  // useEffect(()=>{
  //   dispatch(DemoActions.main());
  // },[dispatch]); 
  // const name = 'loading...';
  return (
    <div>
      <h1>Dashboard Header!</h1>
      <div>{children}</div>
      <h1>Dashboard Footer!</h1>
    </div>
  );
};

export default Dashboard;
