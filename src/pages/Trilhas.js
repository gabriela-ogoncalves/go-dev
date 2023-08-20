import React, { useState, useEffect } from 'react';
import Separator from '../components/Separator/Separator';
import TrilhaProgress from '../components/TrilhasProgress/TrilhasProgress';
import TrilhasSuggest from '../components/TrilhasSuggest/TrilhasSuggest';

import SummaryService from '../services/Summary';

const Trilhas = ({ user, trilhas }) => {
  const [userPerfomance, setUserPerformance] = useState();

  let data;

  if (user) {
    let performance = [];

    useEffect(() => {
      if (!userPerfomance) {
        SummaryService.getSummaryByUser().then((res) =>
          setUserPerformance(res)
        );
      }
    }, []);

    if (userPerfomance) {
      const {completedPaths, uncompletedPaths} = userPerfomance;
      if (completedPaths.length > 0) {
        completedPaths.map(path => {
          Object.assign(path, { status: 'done' });
          performance.push(path);
        });
      }

      if (uncompletedPaths.length > 0) {
        uncompletedPaths.map(path => {
          Object.assign(path, { status: 'progress' });
          performance.push(path);
        });
      }
    }

    data = performance && SummaryService.formatTrilhaData(performance);
  }

  return (
    <section data-testid='trilhas'>
      { data && data.length > 0 && (
        <>
          <TrilhaProgress performance={data} />
          <Separator />
        </>
      )}
      <TrilhasSuggest items={trilhas} />
    </section>
  );
};

export default Trilhas;