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

const styles = {
    btn: {
        marginTop:'.5rem'
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
        value: () => value,
        setValueForFiz: () => setValue(20)
    }
}

const NDS = props=> {
    const sumInput = useInputValue('');
    const stavkaInput = useInputValue('');

    let stavkaValue = stavkaInput.value();
    console.log(stavkaValue)
    if(props.userFace=="fiz"){
        stavkaValue = 20;
    }
    //props.value = sumInput.value();
    props.showValue({sumInput:sumInput.value(),stavkaInput:stavkaValue})
    //console.log(ndsCount(parseInt(sumInput.value()),parseInt(stavkaInput.value())/100).sumNds);
    return (
        <Panel id={props.id}>
                <PanelHeader
                    left={<PanelHeaderButton onClick={props.go} data-to="home">
                        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                    </PanelHeaderButton>}
                >
                    Расчет НДС 
                </PanelHeader> 
                
                    <FormLayout>
                        <FormLayoutGroup top="НДС из">
                            <Input placeholder="Введите сумму" required type="number" {...sumInput.bind} onInput={()=>{if(sumInput.value()<0){sumInput.clear()}}}/>
                        </FormLayoutGroup>

                        <FormLayoutGroup top="Ставка(%)">
                            {props.userFace == 'fiz' ? <Input placeholder="20%" required type="number" disabled defaultValue={"20%"}/> : <Input placeholder="20%" required type="number" {...stavkaInput.bind}/>}
                            
                        </FormLayoutGroup>
                    </FormLayout>
                <Div style={styles.btn}>
                    
                    {sumInput.value()!=='' && stavkaValue!=='' ? 
                        <Button size="xl" level="2" onClick={props.go} data-to={"resultNds"} > 
                        Рассчитать налог
                        </Button> : <Button disabled size="xl" level="2" onClick={props.go} data-to={"resultNds"} > 
                        Рассчитать налог
                        </Button>}
                </Div>
	    </Panel>
    );
}

NDS.propTypes = {
    props: PropTypes.object.isRequired,
}

export default NDS;