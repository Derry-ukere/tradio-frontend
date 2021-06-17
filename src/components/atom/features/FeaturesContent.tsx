import React from 'react';

const FeaturesContent = () => {
  return (
    <div className="row justify-content-between direct">
      <div className="col-12 col-md-6 col-lg-5"> 
        <div className="d-lg-flex mb-4 text-center text-md-left reveal">
          <span className="mb-3 mb-lg-0 mr-md-3 mt-lg-1">
            <img src="img/icon-line-fund.png" alt="icon" />
          </span>
          <div>
            <h3 className="h5-font font-w--600 mb-1">Fund administration</h3>
            <p>
            The fund is started in literally several minutes with
            minimal costs using blockchain-based infrastructure that
            supports.
            </p>
          </div>
        </div>
      </div>
      {/* end of single item col */}
      <div className="col-12 col-md-6 col-lg-5">
        <div className="d-lg-flex mb-4 text-center text-md-left reveal">
          <span className="mb-3 mb-lg-0 mr-md-3 mt-lg-1">
            <img src="img/icon-line-scam.png" alt="icon" />
          </span>
          <div>
            <h3 className="h5-font font-w--600 mb-1">SCAM detection</h3>
            <p>
            Large portfolios are hard to manage because of low
            liquidity, slippage and high transaction costs.
            </p>
          </div>
        </div>
      </div>
      {/* end of single item col */}
      <div className="col-12 col-md-6 col-lg-5">
        <div className="d-lg-flex mb-4 text-center text-md-left reveal">
          <span className="mb-3 mb-lg-0 mr-md-3 mt-lg-1">
            <img src="img/icon-line-decentralized.png" alt="icon" />
          </span>
          <div>
            <h3 className="h5-font font-w--600 mb-1">
            Decentralized infrastructure
            </h3>
            <p>
            Large portfolios are hard to manage because of low
            liquidity, slippage and high transaction costs.
            </p>
          </div>
        </div>
      </div>
      {/* end of single item col */}
      <div className="col-12 col-md-6 col-lg-5">
        <div className="d-lg-flex mb-4 text-center text-md-left reveal">
          <span className="mb-3 mb-lg-0 mr-md-3 mt-lg-1">
            <img src="img/icon-line-more.png" alt="icon" />
          </span>
          <div>
            <h3 className="h5-font font-w--600 mb-1">And much more</h3>
            <p>
            Large portfolios are hard to manage because of low
            liquidity, slippage and high transaction costs.
            </p>
          </div>
        </div>
      </div>
      {/* end of single item col */}
    </div>
  );
};

export const MemoFeaturesContent = React.memo(FeaturesContent);
