import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import React from 'react'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import Icon24ShareOutline from '@vkontakte/icons/dist/24/share_outline';
import Icon28ShareOutline from '@vkontakte/icons/dist/28/share_outline';

import {Title,View,Button} from '@vkontakte/vkui';
import resultBill from '../../img/result.svg';
const osName = platform();

const styles = {
    checkStyle:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,justifyContent:'center', alignItems: 'center',alignSelf:'center',
        
        
    },
}

const ResultNDS = (props) =>{
    function ndsCount(sum,stavka){
        let sumNds = sum*stavka;
        return sumNds;
    }
    function ndsWithout(sum,stavka){
        let sumWithoutNds = sum-(sum*stavka);
        return sumWithoutNds;
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
        <div style={{padding:'0.5rem'}}>
            <img src={resultBill}></img> 
                <Div style={styles.checkStyle}>
                    <div style={{marginTop:'5rem',paddingLeft:'1.5rem'}}>
                        <Title  weight="regular" style={{ color:"#6D7885"}}>НДС из</Title >
                        <Title  weight="medium" style={{ marginBottom: 16, }}>{props.value.sumInput} ₽</Title >

                        <Title  weight="regular" style={{ color:"#6D7885"}}>Ставка</Title >
                        <Title  weight="medium" style={{ marginBottom: 16 }}>{props.value.stavkaInput}%</Title >

                        <Title  weight="regular" style={{ color:"#6D7885"}}>Сумма без НДС</Title >
                        <Title  weight="medium" style={{ marginBottom: 16 }}>{ndsWithout(parseInt(props.value.sumInput),parseInt(props.value.stavkaInput)/100)} руб.</Title >

                        <Title  weight="regular" style={{fontSize: "18px", color:"#6D7885"}}>Сумма НДС</Title >
                        <Title  weight="medium" style={{ marginBottom: 16,fontSize: "20px" }}>{ndsCount(parseInt(props.value.sumInput),parseInt(props.value.stavkaInput)/100)} руб.</Title >
                    </div>
                    
                    <Div>
                        <Button style={{float:'right'}} mode="tertiary"><Icon28ShareOutline></Icon28ShareOutline></Button>
                        <Button size="xl">Сохранить результат</Button>
                    </Div>
                </Div>
            
        </div>
    </Panel>
    );
    
}

ResultNDS.propTypes = {
    props: PropTypes.object.isRequired
}

export default ResultNDS;