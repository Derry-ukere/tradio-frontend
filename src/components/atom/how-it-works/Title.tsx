import React from 'react';

const Title = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-10 col-md-8 mx-auto">
        <div className="text-center mb-5 reveal direct">
          <h2 className="h3-font mb-2">How it works?</h2>
          <p className="h6-font">
            Participants of the Tradio platform interact with each other
            within a global ecosystem. Tradio Token (INT) is a means of
            creating economic incentives to reward platform members. INT
            acts as the main component enabling Tradio Consensus between
            participants.
          </p>
        </div>
      </div>
    </div>
  );
};

export const MTitle = React.memo(Title);
