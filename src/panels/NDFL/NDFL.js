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


import {FormLayout,FormLayoutGroup,Input,SelectMimicry,View,Root,Group,List,Cell,Separator} from '@vkontakte/vkui';
import Icon24Done from '@vkontakte/icons/dist/24/done'

const styles = {
    btn: {
        marginTop:'.5rem'
    }  
}

const osName = platform();

const NDFL = props =>{
    const [ras,setRas] = React.useState('');
    const [stavka,setStavka] = React.useState('');
    const [activeViewq,setActiveView] = React.useState('profile');
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
                        Расчет НДФЛ 
                    </PanelHeader>

                    <FormLayout>
                        <SelectMimicry
                            top="Выберите расчет"
                            placeholder="Не выбран"
                            onClick={() => setActiveView('raschet')}
                        >{ras}</SelectMimicry>

                        <FormLayoutGroup top="Сумма">
                            <Input type="text" />
                        </FormLayoutGroup>

                        <Separator style={{ margin: '12px 0' }} />

                        <SelectMimicry
                            top="Ставка"
                            placeholder="Не выбрана"
                            onClick={() => setActiveView('stavka')}
                        >{stavka}</SelectMimicry>

                        <FormLayoutGroup top="Ставка(%)">
                            {(stavka==='Обычные доходы(13%)') ? <Input type="text" defaultValue="13" disabled/> : <Input type="number"/>}
                            
                        </FormLayoutGroup>
                    </FormLayout>
                    
                    <Div style={styles.btn}>
                        <Button size="xl" level="2">
                            Рассчитать налог
                        </Button>
                    </Div>
                    
                </Panel>
            </View>

            {/* Расчет view для selectMimicry*/}
            <View activePanel="raschetPanel" id="raschet">
                <Panel id="raschetPanel">
                    <PanelHeader>
                        Выбор налога
                    </PanelHeader>
                    <Group>
                        <List>
                        <Cell
                            onClick={() => {setRas('Посчитать налог'); setActiveView('profile')}}
                            asideContent={ras === 'Посчитать налог' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Посчитать налог
                        </Cell>
                        <Cell
                            onClick={() => {setRas('Что-то налог'); setActiveView('profile')}}
                            asideContent={ras === 'Что-то налог' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Что-то налог
                        </Cell>
                        </List>
                    </Group>
                </Panel>
            </View>
            {/* Расчет view для selectMimicry */}

            {/* Ставка view для selectMimicry */}
            <View activePanel="stavkaPanel" id="stavka">
                <Panel id="stavkaPanel">
                    <PanelHeader>
                        Выбор ставки
                    </PanelHeader>
                    <Group>
                        <List>
                        <Cell
                            onClick={() => {setStavka('Обычные доходы(13%)'); setActiveView('profile')}}
                            asideContent={ras === 'Обычные доходы(13%)' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Обычные доходы(13%)
                        </Cell>
                        <Cell
                            onClick={() => {setStavka('Иностранцы(30%)'); setActiveView('profile')}}
                            asideContent={ras === 'Иностранцы(30%)' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Иностранцы(30%)
                        </Cell>
                        <Cell
                            onClick={() => {setStavka('Другая ставка'); setActiveView('profile')}}
                            asideContent={ras === 'Другая ставка' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Другая ставка
                        </Cell>
                        </List>
                    </Group>
                </Panel>
            </View>
            {/* Ставка view для selectMimicry */}

        </Root>
        </Panel>
    );
}

NDFL.propTypes = {
    props: PropTypes.object.isRequired
}

export default NDFL