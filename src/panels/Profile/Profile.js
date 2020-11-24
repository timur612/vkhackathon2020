import React, { useEffect } from 'react';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import {PanelHeader, Separator,Button,Text, Panel,SimpleCell,Avatar,Switch,Cell} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import input from '@vkontakte/vkui'
import Icon28UserOutline from '@vkontakte/icons/dist/28/user_outline';
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
const Profile = (props) => {
    const [clicked,setClicked] = React.useState(true)
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

        async function faceFiz(){
            await bridge.send("VKWebAppStorageSet", {"key": "Face", "value": "fiz"});
        }
        async function faceLaw(){
            await bridge.send("VKWebAppStorageSet", {"key": "Face", "value": "ur"});
        }        
    })
    console.log(props.userFace);
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
                <Group>
                    <Cell>
                    <div style={{display:'flex'}}>
                        <img src={Icon28UserOutline}></img>
                        {props.userFace==='ur' ?
                                                <Button onClick={()=>{bridge.send("VKWebAppStorageSet", {"key": "Face", "value": "fiz"});props.setUserFace('fiz')}} style={{marginTop:'0.3rem',marginLeft:'0.5rem',fontSize:'1rem'}}>Переключиться на физ. лицо</Button> 
                                                : <Button onClick={()=>{bridge.send("VKWebAppStorageSet", {"key": "Face", "value": "ur"});props.setUserFace('ur');}} style={{marginTop:'0.3rem',marginLeft:'0.5rem',fontSize:'1rem'}}>Переключиться на юр. лицо</Button>}
                        
                    </div>
                    </Cell>
                </Group>
            </Div>
        </Panel>
    );
}

export default Profile;