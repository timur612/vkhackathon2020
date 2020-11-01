import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import { Link } from '@vkontakte/vkui';
import jquery from 'jquery'

const styles = {
	h1: {
		textAlign:"center",
	},
	a:{
		marginBottom: 10,
	}
}
function Home({ id, go, fetchedUser }) {
	return (
		<Panel id={id}>
			<PanelHeader>Налоговый калькулятор</PanelHeader>

			<Group title="Посчитать НДС" plus>
				<Cell onClick={go} data-to="nds" >
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
		<Group>
			<div className="warpper">
			<h1 style={styles.h1}>Ближайшие налоговые изменения</h1>
			<Group  description="с 1 января 2021г."> 
			<Link href="https://buhguru.com/news/minfin-rasshirit-2021-vidy-deyatelnosti-ip-psn-perechen.html" style={styles.a}>Новые виды деятельности ПСН.</Link>
        	</Group>
			<Group  description="с 1 января 2021г."> 
			<Link href="https://www.nalog.ru/rn91/news/tax_doc_news/9370241/." style={styles.a}>Отмена ЕНВД.</Link>
        	</Group>
			<Group  description="с 1 января 2021г."> 
			<Link href="https://www.nalog.ru/rn91/news/tax_doc_news/9370241/." style={styles.a}>Отмена ЕНВД.</Link>
        	</Group>
			</div>
		</Group>
		</Panel>
	);
}
Group.defaultProps = {
	separator: 'auto',
  };
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
