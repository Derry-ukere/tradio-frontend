import React from 'react';

const ColOne = () => {
  return (
    <div className="
                  row
                  horizontal-border
                  justify-content-between
                  mb-lg-5
                  pb-lg-5
                  reveal
              ">
      <div className="col-12 col-md-6 col-lg-5">
        <div className="d-lg-flex mb-4 mb-lg-0 text-center text-md-left">
          <span className="mb-3 mb-lg-0 mr-md-3">
            <img src="img/icon-decentralized.svg" alt="icon" />
          </span>
          <div>
            <h3 className="h5-font font-w--600 text-color--200 mb-2">
        Decentralized
            </h3>
            <p>
        We believe it is incredibly important to redistribute
        this power &amp; profitability, and hand it back over to the
        people - the real consumers, borrowers and lenders.
            </p>
          </div>
        </div>
      </div>
      {/* end of single item col */}
      <div className="col-12 col-md-6 col-lg-5">
        <div className="d-lg-flex mb-4 mb-lg-0 text-center text-md-left">
          <span className="mb-3 mb-lg-0 mr-md-3">
            <img src="img/icon-p2p.svg" alt="icon" />
          </span>
          <div>
            <h3 className="h5-font font-w--600 text-color--200 mb-2">
        Peer to peer network
            </h3>
            <p>
        Utilizing the power of the global community and the
        sharing economy to tear down the barriers and
        revolutionize the old &amp; inefficient financial systems.
            </p>
          </div>
        </div>
      </div>
      {/* end of single item col */}
    </div>
  );
};

export const MemColOne = React.memo(ColOne);
