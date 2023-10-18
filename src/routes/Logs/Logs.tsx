import { TableElement } from 'Components'
import React from 'react'
import { mockLogs } from 'routes/Events/mockData'
import { logColumns } from './columns/logColumns'
import classes from './Logs.module.scss';

export default function Logs() {
  return (
    <div className={classes.contentWrap}>
      <TableElement data={mockLogs} columns={logColumns} />
    </div>
  )
}
