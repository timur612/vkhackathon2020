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

const NDS = props =>{
    return (
        <Panel id={props.id}>
            <PanelHeader
                left={<PanelHeaderButton onClick={props.go} data-to="home">
                    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </PanelHeaderButton>}
            >
                Налоговый калькулятор
            </PanelHeader>
            
                <FormLayout>
                    <FormLayoutGroup top="НДС из">
                        <Input type="text" />
                    </FormLayoutGroup>

                    <FormLayoutGroup top="Ставка(%)">
                        <Input type="text" />
                    </FormLayoutGroup>
                </FormLayout>
            
            <Div style={styles.btn}>
                <Button size="xl" level="2">
                    Рассчитать налог
                </Button>
            </Div>
            
	    </Panel>
    );
}

export default NDS