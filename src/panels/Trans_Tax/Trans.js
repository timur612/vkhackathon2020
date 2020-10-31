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

import {FormLayout,FormLayoutGroup,Input} from '@vkontakte/vkui';
import { Select } from '@vkontakte/vkui';


const styles = {
    btn: {
        marginTop:'.5rem'
    }
}

const osName = platform();

const Trans = props =>{
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={props.go} data-to="home">
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                Расчёт Транспортного налога 
            </PanelHeader>
                <FormLayout>
                <Select placeholder="Выберите регион">
                    <option value="Yakutia">Республика Саха (Якутия)</option>
                    <option value="Russia">Россия</option>
                    <option value="Tatarstan">Татарстан</option>
                </Select>
                <Select name="mark" id="mark" placeholder="Выберерите марку">
                    <option value="Toyota">Toyota</option>
                    <option value="BMW">BMW</option>
                    <option value="Nissan">Nissan</option>
                </Select>
                <Select name="model" id="model" placeholder="Выберите модель">
                    <option value="Corolla">Corolla</option>
                    <option value="BMW">BMW X6 xDrive30d | дизель 2993 см3</option>
                    <option value="Nissan">X-Trail</option>
                </Select>
                    <FormLayoutGroup top="Мощность в Л.С">
                        <Input type="number" />
                    </FormLayoutGroup>
                <Select name="model" id="model" placeholder="Количество месяцев владения ТС">
                    <option value="1">01</option>
                    <option value="2">02</option>
                    <option value="3">03</option>
                    <option value="4">04</option>
                    <option value="5">05</option>
                    <option value="6">06</option>
                    <option value="7">07</option>
                    <option value="8">08</option>
                    <option value="9">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </Select>
                <Select placeholder="Выберите год выпуска">
                    <option value="Toyota">2003</option>
                    <option value="BMW">2013</option>
                    <option value="Nissan">2015</option>
                </Select>
            <Div style={styles.btn}>
                <Button size="xl" level="2">
                    Рассчитать налог
                </Button>
            </Div>
            </FormLayout>
	    </Panel>
    );
}

Trans.propTypes = {
  props: PropTypes.object.isRequired
}

export default Trans;