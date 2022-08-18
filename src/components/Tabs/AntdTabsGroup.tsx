import styled from 'styled-components'
import { Tabs as AntdTabs, TabsProps } from 'antd'
import { palette } from '../../utils'

const TabsContainer = styled.div`
  .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab, .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab {
    border: 1px solid ${palette.WHITE_SMOKE};
    border-radius: 7px 7px 0px 0px;
  }
  .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab-active, .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab-active {
    border-bottom-color: ${palette.WHITE};
  }
  .ant-tabs-nav {
    margin: 0;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${palette.LIGHT_BLUE_2};
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-more, .ant-tabs > div > .ant-tabs-nav .ant-tabs-nav-more {
    display: none;
  }
`

export const AntdTabsGroup: React.FC<TabsProps> = ({
  ...props
}) => (
  <TabsContainer>
    <AntdTabs 
      tabBarGutter={4}
      tabBarStyle={{
        color: palette.DARK,
      }}
      type='card'
      {...props}
    />
  </TabsContainer>
)
