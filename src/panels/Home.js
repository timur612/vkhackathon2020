import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import $ from 'jquery';
import { render } from 'react-dom';
import { Icon16Add} from '@vkontakte/icons';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Component from 'react';

class Home extends Component{
	constructor(){
		super()
		this.state={
			showMe:false
		}
	}
}
operation()
{
	this.setState({
		showMe:true
	})
}
function Home({ id, go, fetchedUser }) {
	return (
		<Panel id={id}>
			<PanelHeader>Налоговый калькулятор</PanelHeader>

			<Group title="Посчитать НДС" plus>
				<Cell onClick={go} data-to="nds" >
				<Div>{
					this.state.showMe?
					<div>sample text</div>
					:null
					}
       <Button before={<Icon16Add/>} onClick={()=>this.operation()}></Button>
     </Div>
					НДС
				</Cell>
			</Group>
			<Group title="Посчитать НДФЛ">
				<Cell onClick={go} data-to="NDFL">
					НДФЛ
				</Cell>
			</Group>
			<Group title="Посчитать транспортный налог">
				<Cell onClick={go} data-to="Trans">
					Транспортный налог
				</Cell>
			</Group>

		</Panel>
	);
}
		
Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
