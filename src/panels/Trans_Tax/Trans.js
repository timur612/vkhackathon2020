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
import axios from 'axios'


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

    const sumInput = useInputValue();
    const [region,setRegion] = React.useState('');
    const [catTs,setCats] = React.useState('');
    const months = useInputValue('');
    let stavka=0;

    const [activeViewq,setActiveView] = React.useState('profile');

    const [regions,setRegions] = React.useState([]);
    const [transports,setTransports] = React.useState([]);
    const [ls,setLs] = React.useState([]);

    React.useEffect(()=>{
        async function getNames(){
            const api_url = 'https://supertima.pythonanywhere.com/api/tax/names';
        
            await axios.get(api_url).then(res => {
                const names = res.data;
                setRegions(names[0]);
                setTransports(names[1]);
                setLs(names[2]);
            }).catch(err=>console.log(err))
        }

        getNames()
    },[])
    

    console.log(regions)

    props.showValue({ls:sumInput.value(),stavka:stavka,month:months.value(),region:region,catTs:catTs})

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
                        Расчёт налога 
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

                        {/* <SelectMimicry
                                top="Мощность в Л.С."
                                placeholder="Не выбрана"
                                onClick={() => setActiveView('LS')}
                        >{sumInput}</SelectMimicry> */}

                        <FormLayoutGroup top="Мощность в Л.С.">
                            <Input placeholder="Введите мощность в л.с." {...sumInput.bind} type="number" />
                        </FormLayoutGroup>

                        <FormLayoutGroup top="Количество месяцев эксплуатации">
                            {<Input placeholder="1 - 12 месяцев" {...months.bind} type="number"/>}
                            
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
                        {regions.map((region_a,index)=>{
                            return <Cell onClick={() => {setRegion(region_a); setActiveView('profile')}}
                            asideContent={region === region_a ? <Icon24Done fill="var(--accent)" /> : null}>
                                    {region_a}
                                 </Cell>
                        })}
                        
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
                        {transports.map((transport_a,index)=>{
                            return <Cell onClick={() => {setCats(transport_a); setActiveView('profile')}}
                            asideContent={catTs === transport_a ? <Icon24Done fill="var(--accent)" /> : null}>
                                    {transport_a}
                                 </Cell>
                        })}
                        </List>
                    </Group>
                </Panel>
            </View>
            {/* TS view для selectMimicry */} 

            {/* LS view для selectMimicry*/}
            {/* <View activePanel="regionPanel" id="LS">
                <Panel id="regionPanel">
                    <PanelHeader>
                        Категория ТС
                    </PanelHeader>
                    <Group>
                        <List>
                        {ls.map((ls_a,index)=>{
                            return <Cell onClick={() => {setSumInput(ls_a); setActiveView('profile')}}
                            asideContent={sumInput === ls_a ? <Icon24Done fill="var(--accent)" /> : null}>
                                    {ls_a}
                                 </Cell>
                        })}
                        </List>
                    </Group>
                </Panel>
            </View> */}
            {/* LS view для selectMimicry */} 

            </Root>  
	    </Panel>
    );
}

Trans.propTypes = {
  props: PropTypes.object.isRequired
}

export default Trans;