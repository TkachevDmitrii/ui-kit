import React, { useState } from 'react'
import styled from 'styled-components'
import {
  success,
  home,
  question,
  personnel,
  coins,
  shield,
  person,
  lens,
  menu,
  cross,
  arrow,
  hint,
  filter,
  calendar,
  hdd,
  chevron,
  trash,
  plus,
  pencil,
  back,
  avatar,
  triangle,
  people,
  location,
  aim,
  camera,
  phone,
  mail,
  download,
  star,
  metro,
  marker,
  briefcase,
  vacancies,
  buildings,
  curve,
  legalPerson,
  notification,
  verticalDots,
  error,
  caretDown,
  upload,
  wait,
  restore,
  clip,
  negative,
  fileSearch,
  assignment,
  copy,
  logout,
  check,
  lock,
  off,
  roundedCross,
  pickLeft,
  messageIsRead,
  warning,
  contentCopy,
  documents,
  support,
  staff,
  customers,
  sendMessage,
  ballot,
  personPin,
} from './shapes'

const Wrapper = styled.div<WrapperProps>`
  cursor: ${({ interactive }) => (interactive ? 'pointer' : 'inherit')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon: React.FC<IconProps> = ({
  type,
  color,
  height,
  width,
  interactive = false,
  hoveredColor,
  isTransparent,
  onClick,
}) => {
  const iconsCollection = new Map<IconType, IconSignature>([
    ['success', success],
    ['home', home],
    ['question', question],
    ['personnel', personnel],
    ['coins', coins],
    ['shield', shield],
    ['person', person],
    ['lens', lens],
    ['menu', menu],
    ['cross', cross],
    ['arrow', arrow],
    ['hint', hint],
    ['filter', filter],
    ['calendar', calendar],
    ['hdd', hdd],
    ['chevron', chevron],
    ['trash', trash],
    ['plus', plus],
    ['pencil', pencil],
    ['back', back],
    ['avatar', avatar],
    ['triangle', triangle],
    ['people', people],
    ['location', location],
    ['aim', aim],
    ['camera', camera],
    ['phone', phone],
    ['mail', mail],
    ['download', download],
    ['star', star],
    ['metro', metro],
    ['marker', marker],
    ['briefcase', briefcase],
    ['vacancies', vacancies],
    ['buildings', buildings],
    ['curve', curve],
    ['legalPerson', legalPerson],
    ['notification', notification],
    ['verticalDots', verticalDots],
    ['error', error],
    ['caretDown', caretDown],
    ['upload', upload],
    ['wait', wait],
    ['restore', restore],
    ['clip', clip],
    ['negative', negative],
    ['fileSearch', fileSearch],
    ['assignment', assignment],
    ['copy', copy],
    ['logout', logout],
    ['check', check],
    ['lock', lock],
    ['off', off],
    ['roundedCross', roundedCross],
    ['pickLeft', pickLeft],
    ['messageIsRead', messageIsRead],
    ['warning', warning],
    ['contentCopy', contentCopy],
    ['documents', documents],
    ['support', support],
    ['staff', staff],
    ['customers', customers],
    ['sendMessage', sendMessage],
    ['ballot', ballot],
    ['personPin', personPin],
  ])

  const [hovered, setHovered] = useState<boolean>(false)

  const showHoveredColor = hoveredColor && hovered

  const shape = iconsCollection.get(type)

  const computeStroke = (item: ShapeItem): string | undefined => {
    if (!item.stroke) return

    return showHoveredColor ? hoveredColor : color || item.stroke
  }

  const computeFill = (item: ShapeItem): string | undefined => {
    if (item.stroke === item.fill) return showHoveredColor ? hoveredColor : color || item.fill
    if (item.stroke) return

    return showHoveredColor ? hoveredColor : color || item.fill
  }

  return (
    <Wrapper
      interactive={interactive}
      onClick={interactive ? onClick : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        fill={shape?.fill || undefined}
        height={height || shape?.height}
        viewBox={shape?.viewBox}
        width={width || shape?.width}
        xmlns={shape?.xmlns}
      >
        {shape?.shape.map((item, index: number) => (
          <>
            {isTransparent && <circle
              cx={item.cx}
              cy={item.cy}
              fill={item.background}
              r={item.r}
            />}
            <path
              key={index}
              d={item.d}
              fill={computeFill(item)}
              stroke={computeStroke(item)}
              strokeLinecap='round'
              strokeWidth={item?.strokeWidth}
            />
          </>
        ))}
      </svg>
    </Wrapper>
  )
}
