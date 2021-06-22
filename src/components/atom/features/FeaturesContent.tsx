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
            <h3 className="h5-font font-w--600 mb-1">Tame Volatility</h3>
            <p>
            Add additional layers of risk management to help protect your positions or take advantage of volatility with trading bots tailored for specific market conditions.Leverage advanced functionality such as custom order types, bot extensions, market scanners, portfolio management, and much more.
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
            <h3 className="h5-font font-w--600 mb-1">Reduce Emotions</h3>
            <p>
            When you spend more time refining your trading mBTCodology, you’re less likely to react emotionally under stressful trading events.Our plans include all of our integrated exchanges, no restrictions on trade volume, and we never take a percentage of your profitable trades.
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
            Improve Efficiency
            </h3>
            <p>
            Save hundreds of hours over the lifetime of your trading when you replicate and automate your manual trading tasks.Our legacy trade and custom trading bots are available in a wide range of pre-built trading strategies that help you to quickly begin trading using your preferred strategy on over 20+ exchanges.
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
            <h3 className="h5-font font-w--600 mb-1">Complete Privacy</h3>
            <p>
            Stay out of the Cloud with HaasOnline TradeServer. Your trade data and API keys are stored on your secure hardware, safe from third-party tracking.Utilizing multiple exchanges allows your crypto trading bots to keep Bitcoin trades going even when your main exchange goes down.
            </p>
          </div>
        </div>
      </div>
      {/* end of single item col */}
    </div>
  );
};

export const MemoFeaturesContent = React.memo(FeaturesContent);
