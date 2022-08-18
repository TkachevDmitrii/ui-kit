import React, { LegacyRef } from 'react'
import Highlighter from 'react-highlight-words'
import { palette } from '../utils/palette'

interface ILabelProps {
  text: string
  searchText: string
  style?: React.CSSProperties
}

interface IHighlightProps {
  children: React.ReactNode
}

const Highlight: React.FC<IHighlightProps> = ({ children }) => (
  <mark style={{ color: palette.BLUE, background: 'none', padding: 0 }}>
    {children}
  </mark>
)

export const Label = React.forwardRef(
  (props: ILabelProps, ref: LegacyRef<HTMLSpanElement>) => (
    <span ref={ref} style={props.style}>
      <Highlighter
        autoEscape={true}
        highlightTag={Highlight}
        searchWords={[props.searchText]}
        textToHighlight={props.text}
      />
    </span>
  ),
)
