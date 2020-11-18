import React,{useEffect} from 'react';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import {Link, Separator,Title,Text, Panel} from '@vkontakte/vkui';
import axios from 'axios'

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
    let headers = {
        'Content-Type': 'application/json',
    }

    console.log(props.fetchedPost)
    //https://api.vk.com/method/wall.get?owner_id=-200122131&count=1&filter=owner&access_token=82ea6bde12ad58701bfeb7001df9a18107b3768fddd76de66d63effb48386427e797cb920ef3714958948&v=5.126
    // useEffect(()=>{
    //     fetch('https://api.vk.com/method/users.get?user_id=210700286&v=5.126')
    //         .then(res=>res.json())
    //         .then((result)=>{
    //             console.log(result);
    //         },(error)=>console.log(error))
    // },[])

    // useEffect(()=>{
        
    //     axios.get(`https://api.vk.com/method/users.get?user_id=210700286&v=5.126`)
    //         .then(res => {  
    //             console.log(res)
    //         })
        
    // },[])
    
    

    return(
        <Panel id={props.id}>
            <Group>
            <div id="vk_post_-200122131_3"></div>
                <script type="text/javascript" src="https://vk.com/js/api/openapi.js?168"></script>
                <script type="text/javascript">
            </script>
            </Group>
        </Panel>
    );
}

export default Main;