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
import { Select,View,SelectMimicry,Root } from '@vkontakte/vkui';
import {Group,List,Cell,Separator} from '@vkontakte/vkui';
import Icon24Done from '@vkontakte/icons/dist/24/done'

const styles = {
    btn: {
        marginTop:'.5rem'
    }
}

function useInputValue(defaultValue=''){
    const [value,setValue] = React.useState(defaultValue);

    return {
        bind:{
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: ()=> setValue(0),
        value: () => value
    }
}

const osName = platform();

const Trans = props =>{

    const sumInput = useInputValue('');
    const [region,setRegion] = React.useState('');
    const [catTs,setCats] = React.useState('');
    const months = useInputValue('');
    let stavka;

    const [activeViewq,setActiveView] = React.useState('profile');

    if(region=="Республика Саха(Якутия)"){
        if(catTs=="Автомобили легковые"){
            if(sumInput<=100){
                stavka=8
            }else if(sumInput>100 && sumInput<=150){
                stavka=13
            }else if(sumInput>150  && sumInput<=200 ){
                stavka=17
            }else if(sumInput>200  && sumInput<=250 ){
                stavka=30
            }else if(sumInput>250){
                stavka=60
            }
        }else if(catTs=="Мотоциклы и мотороллеры"){
            if(sumInput<=20){
                stavka=4
            }else if(sumInput>20 && sumInput<=35){
                stavka=8
            }else if(sumInput>35){
                stavka=20
            }
        }
        else if(catTs=="Грузовые автомобили"){
            if(sumInput<=100){
                stavka=25
            }else if(sumInput>100 && sumInput<=150){
                stavka=40
            }else if(sumInput>150  && sumInput<=200 ){
                stavka=50
            }else if(sumInput>200  && sumInput<=250 ){
                stavka=65
            }else if(sumInput>250){
                stavka=85
            }
        }
    }

    return (
        <Panel id={props.id}>
            <Root activeView={activeViewq}>
            <View activePanel="profilePanel" id="profile">
                <Panel id="profilePanel">
                    <PanelHeader
                        left={<PanelHeaderButton onClick={props.go} data-to="home">
                            {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                        </PanelHeaderButton>}
                    >
                        Расчёт Транспортного налога 
                    </PanelHeader>
                        <FormLayout>
                        <SelectMimicry
                                top="Выберите регион"
                                placeholder="Не выбран"
                                onClick={() => setActiveView('region')}
                        >{region}</SelectMimicry>

                        <SelectMimicry
                                top="Категория ТС"
                                placeholder="Не выбрана"
                                onClick={() => setActiveView('catTs')}
                        >{catTs}</SelectMimicry>

                        <FormLayoutGroup top="Мощность в Л.С">
                            <Input {...sumInput.bind} type="number" />
                        </FormLayoutGroup>

                        <FormLayoutGroup top="Количество месяцев эксплуатации">
                            {<Input placeholder="1 - 12" {...months.bind} type="number"/>}
                            
                        </FormLayoutGroup>
                    <Div style={styles.btn}>
                        {sumInput.value()!=='' && region!=='' && catTs!=='' && months.value()>0 && months.value()<13 && months.value()!==''
                        ?<Button size="xl"  level="2" onClick={props.go} data-to="resultTrans">Рассчитать налог</Button>
                        :<Button size="xl" disabled level="2" onClick={props.go} data-to="resultTrans">Рассчитать налог</Button>}
                    </Div>
                    </FormLayout>
                </Panel>
            </View> 

            {/* Регион view для selectMimicry*/}
            <View activePanel="regionPanel" id="region">
                <Panel id="regionPanel">
                    <PanelHeader>
                        Выбор Региона
                    </PanelHeader>
                    <Group>
                        <List>
                        <Cell
                            onClick={() => {setRegion('Республика Саха(Якутия)'); setActiveView('profile')}}
                            asideContent={region === 'Республика Саха(Якутия)' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Республика Саха(Якутия)
                        </Cell>
                        <Cell
                            onClick={() => {setRegion('Республика Татарстан'); setActiveView('profile')}}
                            asideContent={region === 'Республика Татарстан' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Республика Татарстан
                        </Cell>
                        <Cell
                            onClick={() => {setRegion('Россия'); setActiveView('profile')}}
                            asideContent={region === 'Россия' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Россия
                        </Cell>
                        </List>
                    </Group>
                </Panel>
            </View>
            {/* Регион view для selectMimicry */} 

            {/* TS view для selectMimicry*/}
            <View activePanel="regionPanel" id="catTs">
                <Panel id="regionPanel">
                    <PanelHeader>
                        Категория ТС
                    </PanelHeader>
                    <Group>
                        <List>
                        <Cell
                            onClick={() => {setCats('Автомобили легковые'); setActiveView('profile')}}
                            asideContent={catTs === 'Автомобили легковые' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Автомобили легковые
                        </Cell>
                        <Cell
                            onClick={() => {setCats('Мотоциклы и мотороллеры'); setActiveView('profile')}}
                            asideContent={catTs === 'Мотоциклы и мотороллеры' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Мотоциклы и мотороллеры
                        </Cell>
                        <Cell
                            onClick={() => {setCats('Грузовые автомобили'); setActiveView('profile')}}
                            asideContent={catTs === 'Грузовые автомобили' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Грузовые автомобили
                        </Cell>
                        </List>
                    </Group>
                </Panel>
            </View>
            {/* TS view для selectMimicry */} 

            </Root>  
	    </Panel>
    );
}

Trans.propTypes = {
  props: PropTypes.object.isRequired
}

export default Trans;