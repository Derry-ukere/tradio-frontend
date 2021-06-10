import React,{useState} from 'react';

// import {useDispatch, useSelector } from 'react-redux';
// import Demo from '../../components/demo/Index';
// import DemoActions from '../../actions/demo';
// import {RootState} from '../../store';
import {MemoisedNavBar} from '../../organism/Nav';
import {MemoizedLoader} from '../../atom/loader/Loader';
import {MemoizedHero} from '../../organism/Hero';
import {MemoizedIcoSection} from '../../organism/IcoSection';
import {MemoizedDivider} from '../../atom/footer/Divider';
import {MemoizedFooter} from '../../organism/Footer';
import {MemoizedPayment} from '../../organism/Payment';
import {MemoiseAbout} from '../../organism/About';

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
    <main className="main" > 
      { loading &&  <MemoizedLoader /> } 
      <MemoisedNavBar />
      <MemoizedHero />
      <MemoizedIcoSection />
      <MemoizedPayment />
      <MemoiseAbout />
      <MemoizedDivider/>
      <MemoizedFooter />
    </main>
  );
};

export default HomeSCeen;
