import { TablePaginationConfig } from 'antd'
import classNames from 'classnames'
import { TableElement } from 'Components'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { fetchEvents } from 'store/reducers/eventsReducer'
import { setEventPagination } from 'store/slices/eventsSlice'
import { eventColumns } from './columns/eventColumns'
import classes from './Events.module.scss'

export default function Events() {
  
  const dispatch = useAppDispatch()
  const { period } = useAppSelector(state => state.period)  
  const { events, isLoadingEvents, eventPagination } = useAppSelector(state => state.eventsState);  
  
  React.useEffect(() => {
    // const promiseEvents = dispatch(fetchEvents({ current: eventPagination?.current || 1, pageSize: eventPagination?.pageSize || 20, filters: currentFilters, period, actionType: 'data'}));
    const promiseEvents = dispatch(fetchEvents({ current: eventPagination?.current || 1, pageSize: eventPagination?.pageSize || 10, filters: {}, period, actionType: 'data'}))
    return () => {
      promiseEvents.abort();
    }
  },[period])

  const onChangeEvents = (filters: {[key: string]: string[] | number[]}, pagination: TablePaginationConfig, actionType?: string) => {
    dispatch(setEventPagination({current: pagination.current, pageSize:pagination.pageSize}));      
    dispatch(fetchEvents({ current: pagination.current || 1, pageSize: pagination.pageSize || 20, filters, period, actionType: 'data' }))
  }


  return (
    <div className={classes.contentWrap}>
      <TableElement
        data={events}
        columns={eventColumns}
        isLoading={isLoadingEvents}
        onChangeHandle={onChangeEvents}
      />
    </div>
  )
}
