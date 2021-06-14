import React from 'react';
import {MemPieChart} from './PieChart';

const TopRow = () => {
  return (
    <div className="col-12 col-lg-8 pr-lg-6 mb-4 mb-lg-0">
      <div className="token-saleinfo-dist d-md-flex align-items-md-center reveal">
        <div id="pie-chart--v1" className="
                      pie-chart--flat
                      position-relative
                      mx-auto
                      mr-md-3
                      mb-3 mb-md-0
                  ">
          <div className="
                          text-center
                          color--primary
                          d-flex
                          flex-column
                          pos-abs-center
                      ">
            <span className="font-size--14 font-w--600 mb-1">Total Token Supply</span>
            <span className="font-w--600 mb-1">1,000,000,000</span>
            <span className="font-w--600">INT</span>
          </div>
          <svg width={280} height={280} viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M 140.11148573950265 0.00004438954314878174 A 140 140 0 1 1 140.0995427377561 0.000035388421053994534 Z M 140.06221421109757 52.50002211776315 A 87.5 87.5 0 1 0 140.06967858718917 52.50002774346447 Z" fill="rgba(26,26,132,1)" /><g opacity="0.9999998780673678"><path strokeWidth={0} stroke="#0C1013" fill="#3260ED" data-order={0} d="M 140 10 A 130 130 0 0 1 216.41211502805504 245.17218585224555 L 197.30908627104128 218.87913938918416 A 97.5 97.5 0 0 0 140 42.5 Z" /><path strokeWidth={0} stroke="#0C1013" fill="#8CA8FF" data-order={1} d="M 216.41211502805504 245.17218585224555 A 130 130 0 0 1 16.362674425510576 180.17227557392917 L 47.27200581913293 170.12920668044688 A 97.5 97.5 0 0 0 197.30908627104128 218.87913938918416 Z" /><path strokeWidth={0} stroke="#0C1013" fill="#B6BD00" data-order={2} d="M 16.362674425510576 180.17227557392917 A 130 130 0 0 1 34.827740971232245 63.587985690823615 L 61.12080572842417 82.6909892681177 A 97.5 97.5 0 0 0 47.27200581913293 170.12920668044688 Z" /><path strokeWidth={0} stroke="#0C1013" fill="#D65800" data-order={3} d="M 34.827740971232245 63.587985690823615 A 130 130 0 0 1 70.34244012909046 30.2374182481541 L 87.75683009681785 57.67806368611558 A 97.5 97.5 0 0 0 61.12080572842417 82.6909892681177 Z" /><path strokeWidth={0} stroke="#0C1013" fill="#FFB755" data-order={4} d="M 70.34244012909046 30.2374182481541 A 130 130 0 0 1 107.67022205997795 14.084212831159007 L 115.75266654498346 45.56315962336926 A 97.5 97.5 0 0 0 87.75683009681785 57.67806368611558 Z" /><path strokeWidth={0} stroke="#0C1013" fill="#F23C42" data-order={5} d="M 107.67022205997795 14.084212831159007 A 130 130 0 0 1 139.99990040370795 10.000000000038142 L 139.99992530278098 42.50000000002861 A 97.5 97.5 0 0 0 115.75266654498346 45.56315962336926 Z" /></g></svg><div className="doughnutSummary" style={{width: '130px', height: '130px', marginLeft: '-65px', marginTop: '-65px'}}><p className="doughnutSummaryTitle">Total</p><p className="doughnutSummaryNumber" style={{opacity: 1}}>100.0</p></div></div>
        {/* end of pie chart */}

        <MemPieChart />
        {/* end of dist content */}
      </div>
    </div>
  );
};

export const MemTopRow = React.memo(TopRow);
