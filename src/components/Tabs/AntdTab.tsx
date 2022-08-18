import { Tabs as AntdTabs, TabPaneProps } from 'antd'

interface ITabPane extends TabPaneProps {
  key: string
}

export const AntdTab: React.FC<ITabPane> = ({
  key,
  ...props
}) => (
  <AntdTabs.TabPane key={key} {...props} />
)
