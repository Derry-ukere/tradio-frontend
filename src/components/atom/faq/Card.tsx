/* eslint-disable quotes */
import React,{useEffect} from 'react';

interface propType {
  faq: () => {
    id: number;
    question: string;
    answer: string;
    state: boolean;
    run: () => void;
}
}


const Card = (props : propType) => {

  const data = props.faq();

  useEffect(()=>{
    console.log('data', data);
  },[]);

  const btnOldClass = "btn btn-header btn-link collapsed";
  const btnNewClass = "btn btn-header btn-link ";
  const divNewClass =   "collapse show";
  const divoldClass =   "collapse";

  
  return (
    <div className="card mb-1" onClick = {data.run}>
      <button className={data.state ? btnNewClass : btnOldClass} type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
        <span className="h6-font text-color--200 text-left font-w--600 direct"  >{data.question}</span>
        <i className="icon icon-up-arrow" />
      </button>
      <div id="collapse1" className={data.state ? divNewClass : divoldClass} data-parent="#accordion1">
        <div className="card-body pl-3">
          <p >{data.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
