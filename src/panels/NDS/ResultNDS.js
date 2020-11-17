import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import React from 'react'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';


import {Title,View} from '@vkontakte/vkui';
import resultBill from '../../img/result.svg';
const osName = platform();

const styles = {
    checkStyle:{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'
    },
    checkStyleImg:{
        position: 'absolute',
        alignSelf: 'center',
    }
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
        <View style={{}}>
            <img style={styles.checkStyleImg} src={resultBill}></img> 
            
            <View style={styles.checkStyle}>
                <Div style={{}}>
                    <Title  weight="regular">НДС из</Title >
                    <Title  weight="medium" style={{ marginBottom: 16, }}>{props.value.sumInput} ₽</Title >

                    <Title  weight="regular">Ставка</Title >
                    <Title  weight="medium" style={{ marginBottom: 16 }}>{props.value.stavkaInput}%</Title >

                    <Title  weight="regular" >Сумма без НДС</Title >
                    <Title  weight="medium" style={{ marginBottom: 16 }}>{ndsWithout(parseInt(props.value.sumInput),parseInt(props.value.stavkaInput)/100)} руб.</Title >

                    <Title  weight="regular" style={{fontSize: "20px"}}>Сумма НДС</Title >
                    <Title  weight="medium" style={{ marginBottom: 16,fontSize: "20px" }}>{ndsCount(parseInt(props.value.sumInput),parseInt(props.value.stavkaInput)/100)} руб.</Title >
                </Div>
            </View>
        </View>
    </Panel>
    );
    
}

ResultNDS.propTypes = {
    props: PropTypes.object.isRequired
}

export default ResultNDS;