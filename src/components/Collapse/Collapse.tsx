import { Collapse as AntdCollapse, CollapseProps } from 'antd'
import styled from 'styled-components'
import { palette } from '../../utils'
import { Icon } from '../Icon'

type Props = CollapseProps & {
  header?: React.ReactNode | string
  key?: number
  marginBottom?: string
}

const Wrapper = styled.div<{ marginBottom?: string }>`
  border: 1px solid ${palette.DARK_BLUE_3};
  margin-bottom: ${({ marginBottom }) => marginBottom || '16px'};
`
const StyledCollapse = styled(AntdCollapse)`
  &.ant-collapse > .ant-collapse-item > .ant-collapse-header {
    padding: 24px;
  }
  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0 24px;
  }
  &.ant-collapse-ghost > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {
    padding-top: 0;
    padding-bottom: 0;
  }
`
const ChevronContainer = styled.div<{ clicked: boolean }>`
  transform: ${({ clicked }) => (clicked ? 'rotate(270deg)' : 'rotate(90deg)')};
  transition: all 0.2s linear;
  margin-right: 16px;
`

const { Panel } = AntdCollapse

export const Collapse: React.FC<Props> = ({ 
  children,
  header,
  key,
  ghost = true,
  marginBottom,
 }) => {

  const Chevron = ({ isActive }: { isActive: boolean }) => (
    <ChevronContainer clicked={isActive}>
      <Icon color={palette.DARK_BLUE_3} type='chevron' />
    </ChevronContainer>
  )

  return (
    <Wrapper >
      <StyledCollapse defaultActiveKey={1} expandIcon={({ isActive }) => <Chevron isActive={isActive || false} />} ghost={ghost}>
        <Panel key={key || 1} header={header}>
          {children}
        </Panel>
      </StyledCollapse>
    </Wrapper>
  )
}