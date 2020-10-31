import PropTypes from 'prop-types';
import React from 'react'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import { platform, IOS } from '@vkontakte/vkui';
import {FormLayout,FormLayoutGroup,Input} from '@vkontakte/vkui';

const osName = platform();

const Immus = props =>{
    return (
        <Panel id={props.id}>
    <PanelHeader
                left={<PanelHeaderButton onClick={props.go} data-to="home">
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
      Имущественный налог
    </PanelHeader>
     <FormLayout>
            <FormLayoutGroup top="Кадастровый номер">
            <Input type="number"  />
            </FormLayoutGroup>
            <FormLayoutGroup top="Кадастровая стоимость (руб.)">
            <Input type="number"  />
            </FormLayoutGroup>
            <FormLayoutGroup top="Площадь объекта (кв.м.)">
            <Input type="number"  />
            </FormLayoutGroup>
            <FormLayoutGroup top="Размер доли в праве">
            <Input type="number"  />
            </FormLayoutGroup>
            <FormLayoutGroup top="Период владения(мес.)">
            <Input type="number" maxcount="12" />
            </FormLayoutGroup>
     </FormLayout>
    </Panel>
    );
}

export default Immus