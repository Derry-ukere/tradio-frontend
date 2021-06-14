import React from 'react';
import {MemContainer} from '../molecule/road-map/Container';

const RoadMap = () => {
  return (
    <section className="space hidden roadmap roadmap--v1 section--dark bg-color--dark--1" id="roadmap">
      <MemContainer />
    </section>

  );
};

export const MemRoadMap = React.memo(RoadMap);
