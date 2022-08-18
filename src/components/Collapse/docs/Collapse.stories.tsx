import styled from 'styled-components'
import { palette } from '../../../utils'
import { Collapse } from '../Collapse'

const Wrapper = styled.div`
  width: 900px;
`
const Header = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${palette.DARK};
  margin: 0;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const CollapseStories = () => {
  return (
    <Wrapper>
      <Collapse header={<Header>Some header</Header>}>
        <p>some text</p>
        <Row>
          <p>some text 1</p>
          <p>some text 2</p>
        </Row>
      </Collapse>
    </Wrapper>
    
  )
}

export default {
  title: 'Components/Collapse',
}

export { CollapseStories as Collapse }