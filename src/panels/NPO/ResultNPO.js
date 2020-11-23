import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import React from 'react'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import Icon28ShareOutline from '@vkontakte/icons/dist/28/share_outline';

import {Title,View,Button} from '@vkontakte/vkui';
import resultBill from '../../img/result.svg';
const osName = platform();

const styles = {
    checkStyle:{
        position: 'absolute',
        display: "flex",
        top: 0,
        left: 0,
        bottom: 210,
        right: 180,
        justifyContent:'center', alignItems: 'center',alignSelf:'center',
    },
}

const ResultNPO = (props) =>{
    function npoCount(sum,stavka){
        let sumNPO = sum*stavka;
        return sumNPO;
    }
    function npoWithout(sum,stavka){
        let sumWithoutNPO = sum-(sum*stavka);
        return sumWithoutNPO;
    }

    return (
    <Panel id={props.id}>
        <PanelHeader
                left={<PanelHeaderButton onClick={props.go} data-to="home">
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                Результат
        </PanelHeader>
        <div style={{padding:'0.5rem', display:'flex', justifyContent:'center'}}>
            <img src={resultBill}></img> 
                <Div style={styles.checkStyle}>
                    <div>
                        <Title  weight="regular" style={{ color:"#6D7885"}}>НДС из</Title >
                        <Title  weight="medium" style={{ marginBottom: 16, }}>{props.value.sumInput} ₽</Title >

                        <Title  weight="regular" style={{ color:"#6D7885"}}>Ставка</Title >
                        <Title  weight="medium" style={{ marginBottom: 16 }}>{props.value.stavkaInput}%</Title >

                        <Title  weight="regular" style={{ color:"#6D7885"}}>Сумма без НДС</Title >
                        <Title  weight="medium" style={{ marginBottom: 16 }}>{npoWithout(parseInt(props.value.sumInput),parseInt(props.value.stavkaInput)/100)} руб.</Title >

                        <Title  weight="regular" style={{fontSize: "18px", color:"#6D7885"}}>Сумма НДС</Title >
                        <Title  weight="medium" style={{ marginBottom: 16,fontSize: "20px" }}>{npoCount(parseInt(props.value.sumInput),parseInt(props.value.stavkaInput)/100)} руб.</Title >
                    </div>
                </Div>
            
        </div>
    </Panel>
    );
    
}

ResultNPO.propTypes = {
    props: PropTypes.object.isRequired
}

export default ResultNPO;