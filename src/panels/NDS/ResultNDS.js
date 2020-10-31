import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import React from 'react'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';


import {Title } from '@vkontakte/vkui';

const osName = platform();

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
        <Div>
            <Title  weight="regular">НДС из</Title >
            <Title  weight="medium" style={{ marginBottom: 16 }}>{props.value.sumInput} руб.</Title >

            <Title  weight="regular">Ставка</Title >
            <Title  weight="medium" style={{ marginBottom: 16 }}>{props.value.stavkaInput}%</Title >

            <Title  weight="regular">Сумма НДС</Title >
            <Title  weight="medium" style={{ marginBottom: 16 }}>{ndsCount(parseInt(props.value.sumInput),parseInt(props.value.stavkaInput)/100)} руб.</Title >

            <Title  weight="regular">Сумма без НДС</Title >
            <Title  weight="medium" style={{ marginBottom: 16 }}>{ndsWithout(parseInt(props.value.sumInput),parseInt(props.value.stavkaInput)/100)} руб.</Title >
        </Div>
    </Panel>
    );
    
}

ResultNDS.propTypes = {
    props: PropTypes.object.isRequired
}

export default ResultNDS;