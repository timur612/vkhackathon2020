import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import $ from 'jquery';


$(".plus").click(function() {
	$(".add").toggleClass("rotate");
	$(".plus").toggleClass("open");
	$(".pop").slideToggle(400);
  });
  

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Налоговый калькулятор</PanelHeader>

		<Group title="Посчитать НДС">
			<Cell onClick={go} data-to="nds">
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
		<Group title="Посчитать имущественный налог">
			<Cell onClick={go} data-to="Immus">
			Имущественный налог	
			</Cell>
		</Group>
	</Panel>
);

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
