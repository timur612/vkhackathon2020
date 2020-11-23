import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import React from 'react'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import cal from '../../img/Ячейки.svg';
import resultBill from '../../img/result.svg';
import {Title } from '@vkontakte/vkui';
const styles = {
    btn: {
        marginTop:'.5rem'
    },
    h1: {
            textAlign:"center",
        },
    a:{
            marginBottom: 10,
        },
        checkStyle:{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,justifyContent:'center', alignItems: 'center',alignSelf:'center',
            
            
        },
}
const osName = platform();


const ResultNDFL = (props) =>{

    function ndflCount(sum,stavka){
        let sumNds = sum*stavka;
        return sumNds;
    }
    function ndflWithout(sum,stavka){
        let sumWithoutNds = sum+(sum*stavka);
        return sumWithoutNds;
    }
    function ndflOklad(sum,stavka){
        let sumWithoutNds = sum-(sum*stavka);
        return sumWithoutNds;
    }
    console.log(props.value.typeNdfl)
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
            <Title  weight="regular">Сумма</Title >
            <Title  weight="medium" style={{ marginBottom: 16 }}>{props.value.sumInput} руб.</Title >

            <Title  weight="regular">Ставка</Title >
            <Title  weight="medium" style={{ marginBottom: 16 }}>{props.value.stavkaInput}%</Title >

            <Title  weight="regular">Сумма НДФЛ</Title >
            <Title  weight="medium" style={{ marginBottom: 16 }}>{ndflCount(parseInt(props.value.sumInput),parseInt(props.value.stavkaInput)/100)} ₽</Title >

            <Title  weight="regular">Сумма оклада</Title >
            {props.value.typeNdfl==='Посчитать налог'?
                <Title  weight="medium" style={{ marginBottom: 16 }}>{ndflWithout(parseInt(props.value.sumInput),parseInt(props.value.stavkaInput)/100)} ₽</Title >
            : <Title  weight="medium" style={{ marginBottom: 16 }}>{ndflOklad(parseInt(props.value.sumInput),parseInt(props.value.stavkaInput)/100)} ₽</Title >}
        </div>
        </Div>
        </div>
    </Panel>
    );
    
}

ResultNDFL.propTypes = {
    props: PropTypes.object.isRequired
}

export default ResultNDFL;