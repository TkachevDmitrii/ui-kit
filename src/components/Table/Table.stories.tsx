import { useState } from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { times } from 'ramda'
import styled from 'styled-components'
import { FilterFilled, FilterOutlined } from '@ant-design/icons'
import { Button, Input, RadioButtonGroup } from '../../components'
import { Table } from './Table'

interface IData {
  fullName: string
  role: {
    name: string
  }
  email: string
  userId: number
  key: number
  lockoutDate?: string
}

interface IStickyData {
  [key: string]: any
}

const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`
const StyledButton = styled(Button)`
  margin-right: 20px;
`
const TableContainer = styled.div`
  margin-top: 0px;
`

const options = [
  { label: 'default', value: 1 },
  { label: 'sticky', value: 2 },
]

const data: IData[] = times(
  i => ({
    fullName: `Имя ${i}`,
    role: { name: `Роль ${i}` },
    email: `Почта ${i}`,
    userId: i,
    key: i,
  }),
  50,
)

const disabledData: IData[] = times(
  i => ({
    fullName: `Имя ${i + 50}`,
    role: { name: `Роль ${i + 50}` },
    email: `Почта ${i + 50}`,
    userId: i + 50,
    key: i + 50,
    lockoutDate: 'date',
  }),
  10,
)

const days = {
  day01: '0',
  day02: '1',
  day03: '0',
  day04: '2',
  day05: '0',
  day06: '4',
  day07: '0',
  day08: '6',
  day09: '0',
  day10: '7',
  day11: '0',
  day12: '8',
  day13: '0',
  day14: '11',
  day15: '0',
  day16: '1',
  day17: '0',
  day18: '2',
  day19: '0',
  day20: '4',
  day21: '0',
  day22: '6',
  day23: '0',
  day24: '7',
  day25: '0',
  day26: '8',
  day27: '0',
  day28: '11',
}

const stickyData: IStickyData[] = times(
  i => ({
    service: `Отдел ${i + 50}`,
    rate: `Ставка ${i + 50}`,
    total: `Всего ${i + 50}`,
    ...days,
    id: i + 50,
    key: i + 50,
  }),
  30,
)

const columns: ColumnGroup<IData> = [
  {
    title: 'ФИО',
    dataIndex: 'fullName',
    render: text => <a onClick={e => e.stopPropagation()}>{text}</a>,
    // @ts-ignore because we wanna move all disabled fields to bottom of table
    sorter: (a, b) => {
      if (!a.lockoutDate) return a.fullName < b.fullName ? -1 : 1
    },
  },
  {
    title: 'Роль',
    dataIndex: ['role', 'name'],
    filters: [
      { text: 'Роль 13', value: 'Роль 13' },
      { text: 'Роль 7', value: 'Роль 7' },
      { text: 'Роль 3', value: 'Роль 3' },
    ],
    onFilter: (value, record) => record.role.name === value,
    filterIcon: (filtered) => filtered ? <FilterFilled /> : <FilterOutlined />,
    highlight: true,
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    highlight: true,
  },
]

const daysColums = Object.keys(days).map((day, index) => ({
  title: `${index + 1}/12`,
  dataIndex: day,
  width: 150,
}))

const stickyColumns: ColumnGroup<IStickyData> = [
  {
    title: 'Отдел',
    dataIndex: 'service',
    fixed: 'left',
    width: 100,
  },
  {
    title: 'Ставка',
    dataIndex: 'rate',
    fixed: 'left',
    width: 120,
  },
  ...daysColums,
  {
    title: 'Всего',
    dataIndex: 'total',
    fixed: 'right',
    width: 100,
  },
]

const TableStories = () => {
  const [gridData, setGridData] = useState<IData[]>([...data, ...disabledData])
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([])
  const [value, setValue] = useState<string>('')
  const [selectedType, setSelectedType] = useState(1)

  const isDefault = selectedType === 1

  const filteredGridData = data.filter(item => {
    if (!value) return true

    const searchValue = value.toLowerCase()

    return (
      item.fullName.toLowerCase().includes(searchValue) ||
      item.role.name.toLowerCase().includes(searchValue) ||
      item.email.toLowerCase().includes(searchValue)
    )
  })

  return (
    <div style={{ width: '100%' }}>
      <ButtonContainer>
        {selectedType === 1 && (
          <>
            <StyledButton
              block={false}
              onClick={() => {
                const result = data.filter(
                  object => !selectedRowKeys.includes(object.userId),
                )

                setGridData(result)
              }}
            >
              Delete
            </StyledButton>
            <StyledButton block={false} onClick={() => setGridData(data)}>
              Restore data
            </StyledButton>

            <StyledButton
              block={false}
              onClick={() => setGridData(filteredGridData)}
            >
              Apply search
            </StyledButton>
          </>
        )}

        <RadioButtonGroup
          options={options}
          row
          spacing={20}
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
        />
      </ButtonContainer>

      {selectedType === 1 && (
        <Input
          height='S'
          outline
          type='search'
          value={value}
          onChange={setValue}
        />
      )}

      <TableContainer>
        {isDefault ? (
          <Table
            columns={columns}
            dataSource={gridData}
            disableKey='lockoutDate'
            multiselection={boolean('multiselection', true)}
            rowKey='userId'
            scroll={{ y: '50vh' }}
            searchText={value}
            selection={isDefault && { selectedRowKeys, setSelectedRowKeys }}
            skeletonLoading={boolean('loading', false)}
          />
        ) : (
          <Table
            columns={stickyColumns}
            dataSource={stickyData}
            multiselection={boolean('multiselection', true)}
            rowKey='id'
            scroll={{ y: '50vh' }}
            searchText={value}
            selection={isDefault && { selectedRowKeys, setSelectedRowKeys }}
            skeletonLoading={boolean('loading', false)}
          />
        )}
      </TableContainer>
    </div>
  )
}

export default {
  title: 'Components/Table',
  decorators: [withKnobs],
}

export { TableStories as Table }
