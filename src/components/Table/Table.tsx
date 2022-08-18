import React, { useMemo } from 'react'
import { Table as AntdTable } from 'antd'
import Highlighter from 'react-highlight-words'
import styled from 'styled-components'
import { palette } from '../../utils'
import { Checkbox } from '../Checkbox'
import { SkeletonTable } from './components'

const StyledAntdTable = styled(AntdTable)<any>`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;

  tr .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${palette.BLUE};
    border-color: ${palette.BLUE};
  }
  tr .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: ${palette.BLUE};
  }

  .disabled {
    background: ${palette.GRAY_DARK_2};
    color: ${palette.GRAY_DARK};
    p {
      color: ${palette.GRAY_DARK};
    }
    > div, svg, path {
      fill: ${palette.GRAY_DARK};
    }
  }
  .ant-table-tbody > .disabled:hover > td {
    background-color: ${palette.DARK_BLUE_3};
  }

  .ant-table-tbody > tr > td:last-child {
    border-bottom: ${({ isEmptyData }) => isEmptyData && 'none'};
  }

  &&.ant-table-wrapper {
    border-radius: 7px;
    border: 1px solid ${palette.WHITE_SMOKE};
    overflow: hidden;
  }

  .light-row {
    background: ${palette.WHITE};
  }

  .dark-row {
    background: ${palette.LIGHT_BLUE_3};
  }

  .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    display: none;
  }

  .ant-table-thead > tr > th {
    background: ${palette.WHITE};
  }

  .ant-table-column-sort {
    background: none;
  }

  .ant-table-thead > tr > th, .ant-table-tbody > tr > td, .ant-table tfoot > tr > th, .ant-table tfoot > tr > td {
    padding: 18px 10px;
    &:first-child{
      padding: 18px 16px;
    }
  }
  
  ${({ isTablePlaceholderVisible }) => !isTablePlaceholderVisible && `
    .ant-table-placeholder {
      display: none;
    }
  `};

`
const EmptyText = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: ${palette.DARK};
`
const EmptyBlock = styled.div`
  padding-top: 147px;
`

const Highlight: React.FC = ({ children }) => (
  <mark style={{ color: palette.BLUE, background: 'none', padding: 0 }}>
    {children}
  </mark>
)

const defaultLocale = {
  emptyText: (
    <EmptyBlock>
      <EmptyText>Пусто</EmptyText>
    </EmptyBlock>
  ),
}

export const Table = <T extends Record<string, any>>({
  pagination = false,
  dataSource,
  selection = false,
  multiselection = true,
  disableKey,
  rowKey,
  columns,
  searchText,
  empty,
  skeletonLoading = false,
  rowCount,
  onWholeRowSelection = true,
  // это нужно для тех таблиц, где еще нету нормальных плейсхолдеров с иконками
  isTablePlaceholderVisible = false,
  ...props
}: ITableProps<T>) => {
  const noData = {
    emptyText: empty,
  }
  
  const modifiedColumns = useMemo(() => {
    if (!columns?.length) return []

    return columns.map((column: TableColumn<T>) => {
      if (column.highlight) {
        return {
          ...column,
          render: (text: string, data: T, index: number) => (
            <Highlighter
              autoEscape={true}
              highlightTag={Highlight}
              searchWords={[searchText || '']}
              textToHighlight={
                column?.render
                  ? (column?.render(text, data, index) as string)
                  : text || ''
              }
            />
          ),
        }
      }

      return column
    })
  }, [columns, searchText])

  if (!dataSource) return null

  const { selectedRowKeys, setSelectedRowKeys } = selection as ISelectionConfig

  const handleSelect = (record: T) => {
    const isDisabled = disableKey && Boolean(record[disableKey])
    const id = rowKey ? record[rowKey] : ''

    if (isDisabled) return

    if (!multiselection) {
      if(selectedRowKeys.includes(id)) setSelectedRowKeys(selectedRowKeys.filter(elem => elem !== id))
      else setSelectedRowKeys([id])
      return
    }

    if (selectedRowKeys.includes(id)) {
      const newSelected = selectedRowKeys.filter((elem: number) => elem !== id)
      setSelectedRowKeys(newSelected)
    } else {
      const newSelected = [...selectedRowKeys, id]
      setSelectedRowKeys(newSelected)
    }
  }

  const rowSelection = {
    type: 'checkbox',
    onChange: (selectedRowKeys: number[]) => {
      if (!multiselection)
        return setSelectedRowKeys([selectedRowKeys[selectedRowKeys.length - 1]])

      setSelectedRowKeys(selectedRowKeys)
    },
    getCheckboxProps: (record: T) => ({
      disabled: disableKey && Boolean(record[disableKey]),
    }),
    selectedRowKeys,
    columnTitle: !multiselection && <Checkbox disabled />,
  }

  const selectClassName = (record: T, index: number) => {
    if (disableKey && Boolean(record[disableKey])) 
      return 'disabled'
    else if (index % 2) return 'light-row'
    else if (!(index % 2)) return 'dark-row'
    else return ''
  }

  return (
    <SkeletonTable
      columns={modifiedColumns}
      loading={skeletonLoading}
      rowCount={rowCount}
    >
      <StyledAntdTable
        {...props}
        columns={modifiedColumns}
        dataSource={dataSource}
        isEmptyData={!dataSource.length}
        isTablePlaceholderVisible={isTablePlaceholderVisible}
        locale={empty ? noData : defaultLocale}
        pagination={pagination}
        rowClassName={(record: T, index: number) => selectClassName(record, index)}
        rowKey={rowKey}
        rowSelection={!selection ? undefined : rowSelection}
        showSorterTooltip={false}
        onRow={
            !selection || !onWholeRowSelection
              ? undefined
              : (record: T) => ({
                  onClick: () => {
                    handleSelect(record)
                  },
                })
          }
      />
    </SkeletonTable>
  )
}
