import { select, withKnobs, text } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { Tabs } from '../Tabs'
import { AntdTab, AntdTabsGroup } from '../../Tabs'

const menuItems = [
  { label: 'Пункт 1', value: '1', hasMarker: true },
  { label: 'Пункт 2', value: '2' },
  { label: 'Длинный пункт 3', value: '3', hasMarker: false },
  { label: 'Очень длинный пункт номер 4', value: '4', hasMarker: true },
]

const tabsType: TabsType[] = ['basic', 'card']

const Container = styled.div`
  width: 300px;
`

const TabsStories = () => {
  return (
    <Container>
      <Tabs error={true} options={menuItems} type={select('type', tabsType, tabsType[0])} />
    </Container>
  )
}

const AntdTabsStories = () => {
  return (
    <AntdTabsGroup defaultActiveKey='1'>
      <AntdTab key='1' tab={text('tab1', 'Заказчики')}>{text('children1', 'children (для примера Текст)')}</AntdTab>
      <AntdTab key='2' tab={text('tab2', 'Доверенность')}>{text('children2', 'children (для примера Текст)')}</AntdTab>
    </AntdTabsGroup>
  )
}

export default {
  title: 'Components/Tabs',
  decorators: [withKnobs],
}

export { TabsStories as Tabs }
export { AntdTabsStories as AntdTabs }
