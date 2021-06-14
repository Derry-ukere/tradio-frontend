import React from 'react';
import {MemContainer} from '../molecule/team/Container';

const Team = () => {
  return (
    <section className="space section--dark bg-color--dark--2 team team--v1" id="team">
      <div className="pb-6 pb-lg-10">
        <MemContainer />
      </div>
    </section>
  
  );
};

export const MemTeam = React.memo(Team);
