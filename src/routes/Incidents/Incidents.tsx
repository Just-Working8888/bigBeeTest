
import { TableElement } from 'Components';
import React from 'react';
import { mockIncidents } from 'routes/Events/mockData';
import { incidentColumns } from './columns/incidentColumns';
import classes from './Incidents.module.scss';

export default function Incidents() {

  return (
    <div className={classes.contentWrap}>
      <TableElement data={mockIncidents} columns={incidentColumns} />
    </div>
  );
};
