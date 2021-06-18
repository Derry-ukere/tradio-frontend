/* eslint-disable quotes */
import React from 'react';
import Card from './Card';
import {faq} from '../../../data/faq';

// interface propType {
//   show : boolean
//   click : () => void 
// }

// const faqw =    {
//   id:1,
//   question:'What is crypto space token',
//   answer:'Our product solves crucial problems of such giant services as Foursquare & Swarm, Groupon, and Tripadvisor. Millenial travelers don’t possess any more countless hours for preparing the trip itinerary (reading Tripadvisor). Business travelers, in particular, complain they are having maximum 2 to 5 free hours during their work trips, which they don’t want to spend on researching what is worth doing around.',
//   state: show,
//   run :  () =>{
//     setshow((prev) => !prev);
//   }
// },

const Row = () => {
  // const data = faq[0].one();

  // useEffect(()=>{
  //   faq.map((i)=>{
  //     console.log('single', i.data);
  //   });
  // },[]);
  

  return (
    <div className="row">
      <div className="col-12 col-lg-4">
        <div className="text-center text-sm-left mb-5 mb-lg-7 reveal">
          <h2 className="h3-font mb-2">
            Frequently <br />
            asked questions
          </h2>
        </div>
      </div>
      {/* end of section title col */}
      <div className="col-12 col-lg-8">
        <div className="accordion accordion--v1 remove-space--bottom reveal" id="accordion1">
          {faq.map((faq, i)=> <Card key = {i} faq = {faq.getData}/>)}
          {/* <Card  faq = {data}/> */}
        </div>
      </div>
    </div>
  );
};

export const MemRow = React.memo(Row);
