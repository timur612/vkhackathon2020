import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
//import $ from 'jquery';
import { render } from 'react-dom';
import Icon28ChevronDownOutline from '@vkontakte/icons/dist/28/chevron_down_outline';
import Icon28ArrowUpOutline from '@vkontakte/icons/dist/28/arrow_up_outline';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Component from 'react';
import {Link, Separator,Title,Text, FixedLayout} from '@vkontakte/vkui';
import Collapsible from 'react-collapsible';
import Calendar from 'react-calendar';
import tax1 from '../img/tax1.svg';
import tax2 from '../img/tax2.svg';
import tax3 from '../img/tax3.svg';
import tax4 from '../img/tax4.svg';


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
		top:"0",
	},
	iconTurned:{
		marginRight:"1rem",
		color:"#3F8AE0",
		position:"absolute",
		right:"0",
		top:"0",
		transform:"rotate(0.5turn)"
	},
	predicon:{
		position:"absolute",
		marginLeft:"1rem",
	},
	predicontext:{
		position:"relative",
		marginLeft:"40px",
		marginTop:"3	px",
	}
}

const Home = ({ id, go })=>{
		// TODO: переписать это говно
		const [touched1,setTouched1] = React.useState(true)
		const [touched2,setTouched2] = React.useState(true)
		const [touched3,setTouched3] = React.useState(true)

		function turnTriangle(){
			setTouched1(!touched1)
		}
		function turnTriangle2(){
			setTouched2(!touched2)
		}
		function turnTriangle3(){
			setTouched3(!touched3)
		}

		return(
			<Panel id={id}>
				<PanelHeader>Налоговый калькулятор</PanelHeader>
				
				<Group title="Посчитать НДС" style={{position:"relative"}}>
				<img src={tax1} style={styles.predicon}></img>
					<Cell>
						<Title onClick={go} data-to="nds" style={styles.predicontext}>НДС</Title>
					</Cell>
					<Collapsible trigger={<Icon28ChevronDownOutline onClick={turnTriangle} style={ touched1===true ? styles.icon : styles.iconTurned}/>}>
						<Div><p>Налог на добавочную стоимость (НДС) — это косвенный налог. Исчисление производится продавцом при реализации товаров (работ, услуг, имущественных прав) покупателю.</p></Div>		
					</Collapsible>
				</Group>
				<Group title="Посчитать НДФЛ" style={{position:"relative"}}>
				<img src={tax2} style={styles.predicon}></img>
					<Cell>
						<Title onClick={go} data-to="NDFL" style={styles.predicontext}>НДФЛ</Title>
					</Cell>
					<Collapsible trigger={<Icon28ChevronDownOutline onClick={turnTriangle2} style={touched2===true ? styles.icon : styles.iconTurned}/>}>
						<Div><p>Налог на доходы физических лиц (НДФЛ) — основной вид прямых налогов. Исчисляется в процентах от совокупного дохода физических лиц за вычетом документально подтверждённых расходов, в соответствии с действующим законодательством.</p></Div>		
					</Collapsible>
				</Group>
				<Group title="Посчитать транспортный налог" style={{position:"relative"}}>
				<img src={tax3} style={styles.predicon}></img>
					<Cell >
						<Title onClick={go} data-to="Trans" style={styles.predicontext}>Транспортный налог</Title>
					</Cell>
					<Collapsible trigger={<Icon28ChevronDownOutline onClick={turnTriangle3} style={touched3===true ? styles.icon : styles.iconTurned}/>}>
						<Div><p>Транспортный налог — налог, взимаемый с владельцев зарегистрированных транспортных средств.</p></Div>		
					</Collapsible>
				</Group>
				<Group title="Посчитать НПО" style={{position:"relative"}}>
				<img src={tax2} style={styles.predicon}></img>
					<Cell>
						<Title onClick={go} data-to="NPO" style={styles.predicontext}>Налог на прибыль организаций</Title>
					</Cell>
					<Collapsible trigger={<Icon28ChevronDownOutline onClick={turnTriangle} style={ touched1===true ? styles.icon : styles.iconTurned}/>}>
						<Div><p>Налог на прибыль организаций — это прямой налог, его величина прямо зависит от конечных финансовых результатов деятельности организации.
Он начисляется на прибыль, которую получила организация, то есть на разницу между доходами и расходами.</p></Div>		
					</Collapsible>
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
