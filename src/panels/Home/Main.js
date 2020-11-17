import React from 'react';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import {Link, Separator,Title,Text, Panel} from '@vkontakte/vkui';


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