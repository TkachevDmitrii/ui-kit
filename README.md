# Introduction 
Project Ui-Kit

## Локальное тестирование на стадии разработки

Для локального тестирования новых фичей Project Ui-Kit на стадии разработки в основном проекте (например в Agency) можно использовать [linking](https://classic.yarnpkg.com/en/docs/cli/link/).
Следуйте инструкциям ниже для его выполнения:
1. Запустить `yarn link` в папке с Project Ui-Kit;
2. В папке основного проекта запустить `cd node_modules/react` & `yarn link`, затем повторить аналогичные действия с **react-dom** для линкинга этих двух пакетов, чтобы в дальнейшем избежать конфликта двух сущностей react и react-dom (https://github.com/facebook/react/issues/14257#issuecomment-595183610);
3. Запустить `yarn link react` & `yarn link react-dom` в папке с Project Ui-Kit;
4. После внесения изменений в Project Ui-Kit запустить в папке с ним `yarn run build`;
5. Чтобы протестировать данные изменения необходимо запустить `yarn link «@project/ui-kit»` в папке основного проекта.

Чтобы отменить линкинг нужно запустить `yarn unlink @project/ui-kit` в папке основного проекта.

Иногда залинкованный пакет может быть удален после отмены линкинга. Для переустановки пакета нужно запустить `yarn install —force`.

Может возникнуть проблема с **react** и **react-dom** в Project Ui-Kit: могут появиться сообщения о том, что эти пакеты отсутствуют. Их также необходимо отлинковывать после завершения тестирования. Для этого нужно запустить `yarn unlink react` & `yarn unlink react-dom` в папке с Project Ui-Kit.

