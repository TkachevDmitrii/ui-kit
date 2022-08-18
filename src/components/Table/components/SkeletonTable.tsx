import React from 'react'
import { Skeleton, SkeletonProps, Table } from 'antd'

export type SkeletonTableColumnsType = {
  key: string
}

type SkeletonTableProps = SkeletonProps & {
  columns: any[]
  rowCount?: number
}

export const SkeletonTable: React.FC<SkeletonTableProps> = ({
  loading,
  rowCount = 10,
  columns,
  children,
}) =>
  loading ? (
    <Table
      columns={columns.map(column => {
        return {
          ...column,
          render: () => <Skeleton active paragraph={false} />,
        }
      })}
      dataSource={[...Array(rowCount)].map((_, index) => ({
        key: `key${index}`,
      }))}
      pagination={false}
      rowKey='key'
    />
  ) : (
    <>{children}</>
  )
