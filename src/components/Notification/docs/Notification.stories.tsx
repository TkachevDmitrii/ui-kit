import { boolean, withKnobs, text, number } from '@storybook/addon-knobs'
import styled from 'styled-components'
import { openNotification } from '../Notification'

const ButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
`

const NotificationStories = () => {
  const openNotificationHandler = () => 
    openNotification({
      successMessage: text('successMessage', 'Документ подписан'),
      errorMessage: text('errorMessage', 'Не удалось подписать документ'),
      successDescription: text('successDescription', `Вы успешно подписали документ. 
      Он был перемещен во вкладку “Подписанные”.`),
      errorDescription: text('errorDescription', 
        'Подписание завершилось ошибкой, обновите страницу и повторите попытку подписания.'),
      duration: number('duration', 6),
      isSuccess: boolean('isSuccess', true),
      withIcon: boolean('withIcon', true),
    })

  return (
    <ButtonContainer>
      <button
        style={{ width: '200px', cursor: 'pointer' }}
        onClick={openNotificationHandler}
      >
        Show Notification
      </button>
    </ButtonContainer>  
  )
}

export default {
  title: 'Components/Notification',
  decorators: [withKnobs],
}

export { NotificationStories as Notification }
