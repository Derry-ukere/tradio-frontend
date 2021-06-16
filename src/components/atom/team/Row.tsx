import React from 'react';

const Row = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <div className="
                                card
                                card-hover--3d
                                align-items-center
                                border--none
                                text-center
                                pt-5
                                reveal
                            ">
          <img src="img/img1.png" alt="mamber" className="img-fluid" />
          <div className="card-body align-items-center">
            <h3 className="h6-font font-w--600 color--primary">
              Elizabeth Guzman
            </h3>
            <span className="font-size--14 opacity--80 font-w--500">Founder, CEO</span>
          </div>
        </div>
      </div>
      {/* end of col */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <div className="
                                card
                                card-hover--3d
                                align-items-center
                                border--none
                                text-center
                                pt-5
                                reveal
                            ">
          <img src="img/img2.png" alt="mamber" className="img-fluid" />
          <div className="card-body align-items-center">
            <h3 className="h6-font font-w--600 color--primary">
              Tom Castro
            </h3>
            <span className="font-size--14 opacity--80 font-w--500">Founder, CTO</span> 
          </div>
        </div>
      </div>
      {/* end of col */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <div className="
                                card
                                card-hover--3d
                                align-items-center
                                border--none
                                text-center
                                pt-5
                                reveal
                            ">
          <img src="img/img3.png" alt="mamber" className="img-fluid" />
          <div className="card-body align-items-center">
            <h3 className="h6-font font-w--600 color--primary">
              Steven Clark
            </h3>
            <span className="font-size--14 opacity--80 font-w--500">Backend developer</span>
          </div>
        </div>
      </div>
      {/* end of col */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <div className="
                                card
                                card-hover--3d
                                align-items-center
                                border--none
                                text-center
                                pt-5
                                reveal
                            ">
          <img src="img/img4.jpeg" alt="mamber" className="img-fluid" />
          <div className="card-body align-items-center">
            <h3 className="h6-font font-w--600 color--primary">
              Phoebe Watkins
            </h3>
            <span className="font-size--14 opacity--80 font-w--500">CMO</span>
          </div>
        </div>
      </div>
      {/* end of col */}

    </div>
  );
};

export const MemRow = React.memo(Row);
