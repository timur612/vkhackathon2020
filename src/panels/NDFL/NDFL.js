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
import Calendar from 'react-calendar';


import {FormLayout,FormLayoutGroup,Input,SelectMimicry,View,Root,Group,List,Cell,Separator,Title} from '@vkontakte/vkui';
import Icon24Done from '@vkontakte/icons/dist/24/done'

const styles = {
    btn: {
        marginTop:'.5rem'
    },
    h1: {
            textAlign:"center",
        },
    a:{
            marginBottom: 10,
        }
}

const osName = platform();

function useInputValue(defaultValue=''){
    const [value,setValue] = React.useState(defaultValue);

    return {
        bind:{
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: ()=> setValue(0),
        changeValue: (value)=> setValue(value),
        value: () => value
    }
}

const NDFL = props =>{
   const [date,setDate] = React.useState('');
   function onChange(){
    setDate(new Date());
   }
   
    const [ras,setRas] = React.useState('');
    const [stavka,setStavka] = React.useState('');
    
    const [activeViewq,setActiveView] = React.useState('profile');

    const sumInput = useInputValue('');
    const stavkaInput = useInputValue('');

    let stavkaNew = '';
    if(stavka==="Обычные доходы(13%)"){
        stavkaNew=13;
    }else if(stavka==="Иностранцы(30%)"){
        stavkaNew=30;
    }else{
        stavkaNew=stavkaInput.value();
    }
    props.showValue({sumInput:sumInput.value(),stavkaInput:stavkaNew,ras});
    console.log(ras);
   
   
    
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
                            {ras==='' ?<Input disabled type="number" /> 
                                      :<Input {...sumInput.bind} type="number" />}
                        </FormLayoutGroup>

                        <Separator style={{ margin: '12px 0' }} />

                        <SelectMimicry
                            top="Ставка"
                            placeholder="Не выбрана"
                            onClick={() => setActiveView('stavka')}
                        >{stavka}</SelectMimicry>

                        <FormLayoutGroup top="Ставка(%)">
                            {stavka===''?<Input disabled type="number" />:(stavka==='Обычные доходы(13%)') 
                                        ? <Input  type="text" value={13} placeholder="13" disabled defaultValue="13"/> 
                                        : (stavka==='Иностранцы(30%)') ? <Input  type="text" value={30} placeholder="30" disabled defaultValue="30"/> 
                                        : <Input {...stavkaInput.bind} type="number"/>}
                        </FormLayoutGroup>
                    </FormLayout>
                    
                    <Div style={styles.btn}>
                        {sumInput.value()!=='' && stavkaNew!=='' ? 
                            <Button size="xl" level="2" onClick={props.go} data-to="resultNdfl">
                            Рассчитать налог
                        </Button>:
                        <Button disabled size="xl" level="2" onClick={props.go} data-to="resultNdfl">
                            Рассчитать налог
                        </Button>
                        }
                        
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
                            onClick={() => {setRas('Посчитать сумму к выплате и налог'); setActiveView('profile')}}
                            asideContent={ras === 'Посчитать сумму к выплате и налог' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Посчитать сумму к выплате и налог
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
                            asideContent={stavka === 'Обычные доходы(13%)' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Обычные доходы(13%)
                        </Cell>
                        <Cell
                            onClick={() => {setStavka('Иностранцы(30%)'); setActiveView('profile')}}
                            asideContent={stavka === 'Иностранцы(30%)' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Иностранцы(30%)
                        </Cell>
                        <Cell
                            onClick={() => {setStavka('Другая ставка'); setActiveView('profile')}}
                            asideContent={stavka === 'Другая ставка' ? <Icon24Done fill="var(--accent)" /> : null}
                        >
                            Другая ставка
                        </Cell>
                        </List>
                    </Group>
                </Panel>
            </View>
            {/* Ставка view для selectMimicry */}
            <Group>
			<h1 style={styles.h1}>Последний день уплаты налога</h1>
			<Group>
				<h2 styles={styles.h1}>Декабрь 2020 г.</h2>
				<img src="././img/Ячейки.png"></img>
			</Group>
		</Group>
        </Root>
        </Panel>
    );
}


NDFL.propTypes = {
    props: PropTypes.object.isRequired
}

export default NDFL;