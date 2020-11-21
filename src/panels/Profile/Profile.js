import React, { useEffect } from 'react';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import {PanelHeader, Separator,Title,Text, Panel,SimpleCell,Avatar,Switch,Cell} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import input from '@vkontakte/vkui'

import NotificationIcon from '../../img/notification.svg'

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
    useEffect(()=>{
        async function turnOnNotif(){
           await bridge.send("VKWebAppAllowNotifications");
        }    
        async function turnOffNotif(){
            await bridge.send("VKWebAppDenyNotifications");
        }

        if(props.turnOn){
            turnOnNotif()
        }else{
            turnOffNotif()
        }
    })
    
    console.log(props.turnOn);
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
            <Div>
                <Group>
                <Cell asideContent={props.turnOn===false ? <Switch onClick={()=>props.setTurnOn(!props.turnOn)} /> : <Switch defaultChecked onClick={()=>props.setTurnOn(!props.turnOn)}  />} >
                    <div style={{display:'flex'}}>
                        <img  src={NotificationIcon}></img> 
                        <Text style={{marginTop:'0.3rem',marginLeft:'0.5rem',fontSize:'1rem'}}>Уведомление</Text> 
                    </div>
                    
                </Cell>
                </Group>
            </Div>
        </Panel>
    );
}

export default Main;