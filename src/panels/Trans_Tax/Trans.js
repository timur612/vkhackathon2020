import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import React from 'react'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import {FormLayout,FormLayoutGroup,Input,Select, View} from '@vkontakte/vkui';

const Trans = props =>{
    return (
<View activePanel="select">
  <Panel id="select">
    <PanelHeader>
      Select
    </PanelHeader>
    <FormLayout>
      <Select top="Обычный Select" placeholder="Выберите пол">
        <option value="m">Мужской</option>
        <option value="f">Женский</option>
      </Select>
    </FormLayout>
  </Panel>
</View>
    );
}
export default Trans