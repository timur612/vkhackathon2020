import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import React, { useContext } from 'react'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Context from '../../Context'

import {View,Title } from '@vkontakte/vkui';

const osName = platform();

const ResultNDS = (props) =>{

    const value = useContext(Context);

    function ndsCount(sum,stavka){
        let sumNds = sum*stavka;
        let sumWithoutNds = sum-(sum*stavka);
        return {sumNds,sumWithoutNds};
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
            <Title  weight="medium" style={{ marginBottom: 16 }}>45 000</Title >

            <Title  weight="regular">Ставка</Title >
            <Title  weight="medium" style={{ marginBottom: 16 }}>20%</Title >

            <Title  weight="regular">Сумма НДС</Title >
            <Title  weight="medium" style={{ marginBottom: 16 }}>{value}</Title >

            <Title  weight="regular">Сумма без НДС</Title >
            <Title  weight="medium" style={{ marginBottom: 16 }}>{value}</Title >
        </Div>
    </Panel>
    );
    
}

ResultNDS.propTypes = {
    props: PropTypes.object.isRequired
}

export default ResultNDS;