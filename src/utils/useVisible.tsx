import { useState } from 'react'

interface VisibleResult {
  visible: boolean
  show: () => void
  hide: () => void
}

export const useVisible = (): VisibleResult => {
  const [visible, setVisible] = useState<boolean>(false)

  const show = () => {
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
  }

  return { visible, show, hide }
}
