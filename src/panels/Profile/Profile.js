import React from 'react';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import {PanelHeader, Separator,Title,Text, Panel,SimpleCell,Avatar} from '@vkontakte/vkui';


const styles = {
	h1: {
		textAlign:"center",
	},
	a:{
		marginBottom: 10,
	},
	icon:{
		marginRight:"1rem",
		color:"#3F8AE0",
		position:"absolute",
		right:"0",
		top:"0"
	}
}
const Main = (props) => {
    return(
        <Panel id={props.id}>
            <PanelHeader>Профиль</PanelHeader>
            <Div>
                {props.fetchedUser &&
                <SimpleCell
                    before={props.fetchedUser.photo_200 ? <Avatar src={props.fetchedUser.photo_200}/> : null}
                    description={props.fetchedUser.city && props.fetchedUser.city.title ? props.fetchedUser.city.title : 'Города нет'}
                >
                    {`${props.fetchedUser.first_name} ${props.fetchedUser.last_name}`} 
                </SimpleCell>}
            </Div>
            <Separator></Separator>
        </Panel>
    );
}

export default Main;