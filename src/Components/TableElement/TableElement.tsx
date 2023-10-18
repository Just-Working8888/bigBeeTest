import { Table, TablePaginationConfig, TableProps } from 'antd'
import { PeriodSelects } from 'Components';
import React from 'react'
import { IColumn } from '../../interfaces/IColumn'

interface TableElementProps {
  data: any;
  columns: IColumn[];
  isLoading?: boolean;
  filtersArr?: string[];
  scroll?: { y?: string; x?: string};
  currentPagination?: TablePaginationConfig;
  onChangeHandle?: (filters: any, pagination: TablePaginationConfig, actionType?: string) => void;
  // onRowClick?:( (record: any) => Promise<void> ) | null;
}

export default function TableElement({ 
  data,
  columns,
  isLoading,
  filtersArr,
  scroll,
  currentPagination,
  onChangeHandle,
  // onRowClick,
}: TableElementProps) {
  const [modifiedColumns, setModifiedColumns] = React.useState<IColumn[]>([]);

  React.useEffect(()=> {
    const customColumns = columns.map((col: IColumn) => ({
      ...col,
      // filtered: Object.keys(currentFilters).includes(col.key),
      // filterIcon: isLoadingFilters ? <LoadingOutlined className={classes.filterLoadingIcon}/> : <FilterFilled />,
      render: (value: string, info: any) => renderCell(value, col, info),
    }))
    setModifiedColumns(customColumns);
  },[columns, isLoading, data, filtersArr]);

  const renderCell = React.useCallback((value: string, col: IColumn, info: any) => {
    // if (isLoading) return <RowLoader />;
    return value;
  }, [columns, isLoading, data, filtersArr])


  const tablePagination: TablePaginationConfig = React.useMemo(() => ({ 
    disabled: isLoading,
    current: currentPagination?.current,
    size: 'small',
    total: data && data?.count,
    position: ['bottomCenter'],
    pageSize: currentPagination?.pageSize,
    defaultPageSize: 10, 
    // showSizeChanger: true,
    // pageSizeOptions: ['10', '20', '40'],
  }), [data, currentPagination])

  const onChange: TableProps<object>['onChange'] = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
    // // isFirstRenderState.current = false;
    // // проверяем значения фильров и удаляем ключ с нулевым значением, либо обьединяем в один массив
    // const copyFilters = JSON.parse(JSON.stringify(filters))
    // for (let filter in copyFilters){
    //   if (!copyFilters[filter] && currentFilters[filter]) copyFilters[filter] = currentFilters[filter]
    //   if (!copyFilters[filter] || !copyFilters[filter]?.length) delete copyFilters[filter]
    //   // eslint-disable-next-line no-self-assign
    //   else copyFilters[filter] = copyFilters[filter];
    // }
    // //проверка и подстановка ключа которого нет в фильтрах самой таблицы, поиск по наличию роли
    // if (typeof currentFilters['groups'] !== 'undefined' && currentFilters['groups'][0]) {
    //   copyFilters.groups = currentFilters.groups
    // }
    // if (!isClickedResetBtn.current) {
    //   onChangeHandle && onChangeHandle(copyFilters, pagination, extra?.action)
    // }

    onChangeHandle && onChangeHandle(filters, pagination, extra?.action)
  };

  return (
    <Table
      size='large'
      columns={modifiedColumns}
      dataSource={ isLoading ? [] : data?.results }
      onChange={onChange}
      style={{backgroundColor: 'white'}}
      className={'notranslate'}
      scroll={{ y: scroll?.y || '100%', x: scroll?.x || '100%', scrollToFirstRowOnChange: true }}
      pagination={tablePagination}
      title={() => <PeriodSelects />}
      // locale={{emptyText: isLoading ? <TableLoader height={scroll ? scroll.y : 600} /> : 'Нет доступных данных'}}
      // rowClassName={onRowClick ? (isLoadingUser ? classes.wait : classes.pointer) : undefined}
    /> 
  )
}
