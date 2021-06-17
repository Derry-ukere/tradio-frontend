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
import {MemoProblems} from '../../organism/Problems';
import {MemoFeatures} from '../../organism/Features';
import {MemoHowItWorks} from '../../organism/HowItWorks';
import {MemBenefits} from '../../organism/Benefits';
import {MemTokenDetails} from '../../organism/TokenDetails';
import {MemSaleInfo} from '../../organism/SaleInfo';
import {MemTeam} from '../../organism/Team';
import {MemFaq} from '../../organism/Faq';
import {MemPartner} from '../../organism/Partner';
import {MemRoadMap} from '../../organism/RoadMap';
// import Testimonial from '../../organism/Testimonial';

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
    <>
      { loading &&  <MemoizedLoader /> } 
      <MemoisedNavBar />
      <MemoizedHero />
      <MemoizedIcoSection />
      <MemoizedPayment />
      <MemoiseAbout />
      <MemoProblems />
      <MemoFeatures />
      <MemoHowItWorks />
      <MemBenefits />
      <MemTokenDetails />
      <MemSaleInfo />
      < MemRoadMap />
      {/* <Testimonial /> */}
      <MemTeam />
      <MemFaq />
      <MemPartner />
      <MemoizedDivider/>
      <MemoizedFooter />
    </>
  );
};

export default HomeSCeen;

