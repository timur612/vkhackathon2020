import React from 'react';
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



const Home = ({ id, go, fetchedUser })=>(
		<Panel id={id}>
			<PanelHeader>Налоговый калькулятор</PanelHeader>
			
			<Group title="Посчитать НДС" style={{position:"relative"}}>
				<Cell>
					<Title onClick={go} data-to="nds">НДС</Title>
				</Cell>
				<Collapsible trigger={<Icon28ChevronDownOutline style={styles.icon}/>}>
					<Div><p>Налог на добавочную стоимость (НДС) — это косвенный налог. Исчисление производится продавцом при реализации товаров (работ, услуг, имущественных прав) покупателю.</p></Div>		
				</Collapsible>
			</Group>
			<Group title="Посчитать НДФЛ" style={{position:"relative"}}>
				<Cell>
					<Title onClick={go} data-to="NDFL">НДФЛ</Title>
				</Cell>
				<Collapsible trigger={<Icon28ChevronDownOutline style={styles.icon}/>}>
					<Div><p>Налог на доходы физических лиц (НДФЛ) — основной вид прямых налогов. Исчисляется в процентах от совокупного дохода физических лиц за вычетом документально подтверждённых расходов, в соответствии с действующим законодательством.</p></Div>		
				</Collapsible>
			</Group>
			<Group title="Посчитать транспортный налог" style={{position:"relative"}}>
				<Cell >
					<Title onClick={go} data-to="Trans">Транспортный налог</Title>
				</Cell>
				<Collapsible trigger={<Icon28ChevronDownOutline style={styles.icon}/>}>
					<Div><p>Транспортный налог — налог, взимаемый с владельцев зарегистрированных транспортных средств.</p></Div>		
				</Collapsible>
			</Group>
			
			
			<Group>
			<Div>
				<Title level="2">Ближайшие налоговые изменения</Title>
				<Group > 
					<Text style={{color:"#6D7885"}}>с 1 января 2021г.</Text>
					<Title level="3" weight="regular"  style={styles.a}>Изменения налогообложения ИТ-компаний</Title>
					<Link href="https://vc.ru/legal/144217-gosduma-prinyala-zakon-o-nalogovom-manevre-dlya-it-s-2021-goda-nalog-na-pribyl-sostavit-3-i-7-6-strahovye-vznosy">Источник</Link>
				</Group>
				<Separator style={{ margin: '12px 0' }} />
				<Group > 
					<Text style={{color:"#6D7885"}}>с 1 января 2021г.</Text>
					<Title level="3" weight="regular"  style={styles.a}>Прогрессивная ставка НДФЛ в 15%</Title>
					<Link href="https://www.rbc.ru/economics/24/06/2020/5ef226b29a794766cc4d2343">Источник</Link>
				</Group>
				<Separator style={{ margin: '12px 0' }} />
				<Group > 
					<Text style={{color:"#6D7885"}}>с 1 января 2021г.</Text>
					<Title level="3" weight="regular"  style={styles.a}>Переходный период для субъектов малого и среднего бизнеса</Title>
					<Link href="https://www.nalog.ru/rn77/news/activities_fts/9971710/">Источник</Link>
				</Group>
				<Separator style={{ margin: '12px 0' }} />
				<Group>
					<Text style={{color:"#6D7885"}}>с 1 января 2021г.</Text>
					<Title level="3" weight="regular"  style={styles.a}>Налог на проценты по вкладам</Title>
					<Link href="https://tass.ru/ekonomika/8122739">Источник</Link>
				</Group>
				<Separator style={{ margin: '12px 0' }} />
				
			</Div>
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
