import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';


import NDS from './panels/NDS/NDS';
import Immus from './panels/Immuns_Tax/Immus';
import NDFL from './panels/NDFL/NDFL';
import Trans from './panels/Trans_Tax/Trans';


const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [activeRoot, setActiveRoot] = useState('');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	const goRoot = e=>{
		setActiveRoot(e.currentTarget.dataset.to);
	}

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} />
			<NDS id='nds' go={go}/>
			<Trans id='Trans'go={go}/>
			<NDFL id='NDFL' go={go}/>
			<Immus id='Immus' go={go}/>
		</View>
	);
}

export default App;

