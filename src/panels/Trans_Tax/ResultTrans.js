import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import React from 'react'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import {Title,Separator} from '@vkontakte/vkui';

const osName = platform();

const ResultTrans = (props) =>{

    console.log(props.value.stavkaInput)
    return (
    <Panel id={props.id}>
        <PanelHeader
                left={<PanelHeaderButton onClick={props.go} data-to="home">
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                Результат
        </PanelHeader>
        <Div>
            <Title  weight="regular">Регион</Title >
            <Title  weight="medium" style={{ marginBottom: 16 }}>{props.value.region}</Title >

            <Title  weight="regular">Мощность в Л.С.</Title >
            <Title  weight="medium" style={{ marginBottom: 16 }}>{props.value.sumInput}</Title >

            <Title  weight="regular">Сумма налога</Title >
            <Title  weight="medium" style={{ marginBottom: 16 }}>{props.value.sumInput*props.value.stavkaInput*(props.value.month/12)} руб.</Title >
        </Div>

        <Div style={{marginTop:'.5rem'}}>
            <Title level="3" align='center' weight="bold" style={{ marginBottom: 5 }}>Изменения ставок на Транспортные налоги</Title>

            <Title level="3" weight="regular" style={{ marginBottom: 16 }}>Республика Саха(Якутия) <strong style={{marginLeft:'3rem'}}>120 <p style={{color:"#4986CC",display:"inline",marginLeft:'.5rem'}}>+0.66</p></strong></Title>
            <Separator style={{ margin: '12px 0' }} />
            <Title level="3" weight="regular" style={{ marginBottom: 16 }}>Республика Татарстан <strong style={{marginLeft:'4.4rem'}}>110 <p style={{color:"#4986CC",display:"inline",marginLeft:'.5rem'}}>+0.56</p></strong></Title>
            <Separator style={{ margin: '12px 0' }} />
            <Title level="3" weight="regular" style={{ marginBottom: 16 }}>Москва <strong style={{marginLeft:'11.3rem'}}>130 <p style={{color:"#E64646",display:"inline",marginLeft:'.5rem'}}>-0.32</p></strong></Title>
        </Div>
    </Panel>
    );
    
}

ResultTrans.propTypes = {
    props: PropTypes.object.isRequired
}

export default ResultTrans;
