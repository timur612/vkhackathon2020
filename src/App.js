import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import NPO from './panels/NPO/NPO';
import ResultNPO from './panels/NPO/ResultNPO';
import NDS from './panels/NDS/NDS';
import Immus from './panels/Immuns_Tax/Immus2';
import NDFL from './panels/NDFL/NDFL';
import Trans from './panels/Trans_Tax/Trans';
import ResultNDS from './panels/NDS/ResultNDS';
import ResultNDFL from './panels/NDFL/ResultNDFL';
import ResultTrans from './panels/Trans_Tax/ResultTrans';
import Main from './panels/Home/Main';
import Profile from './panels/Profile/Profile';

import TabBar from './panels/Tab_bar';

import {FixedLayout,Panel} from '@vkontakte/vkui';

const App = () => {
	const [sumInput,setSumInput] = useState(0);
	const [stavkaInput,setStavkaInput] = useState(0);
	const [typeNdfl,setTypeNdfl] = useState('');
	const [month,setMonth] = useState(1);
	const [region,setRegion] = useState('');

	const [turnOn,setTurnOn] = React.useState(false);

	function showNds(arg){
		setSumInput(arg.sumInput);
		setStavkaInput(arg.stavkaInput);
	}

	function showNdfl(arg){
		setSumInput(arg.sumInput);
		setStavkaInput(arg.stavkaInput);
		setTypeNdfl(arg.ras);
	}

	function showTs(arg){
		setSumInput(arg.ls);
		setStavkaInput(arg.stavka);
		setMonth(arg.month);
		setRegion(arg.region)
	}
	
	function showNPO(arg){
		setStavkaInput(arg.stavka);

	}


	const [activePanel, setActivePanel] = useState('home');
	
	const [fetchedUser, setUser] = useState(null);
	const [fetchedPost, setPost] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				//schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				//document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		async function fetchDataGroup(){
			const id_user = await bridge.send("VKWebAppGetAuthToken", {"app_id": 7645272, "scope": "friends,status"});
			const post = await bridge.send("VKWebAppCallAPIMethod", {"method": "wall.get", "request_id": "32test", "params": {"owner_id": "-200122131", "v":"5.126", "access_token":`${id_user.access_token}`}});
			setPost(post)
		}
		async function checkNotif(){
			const flag = await bridge.send("VKWebAppStorageSet", {"notif": turnOn});

		}
		fetchData();
		fetchDataGroup();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	return (
		<Panel>
			<View activePanel={activePanel} popout={popout}>
				<Home id='home' fetchedUser={fetchedUser} go={go}/>
				<NDS id='nds' go={go} showValue={showNds}/>
				<Trans id='Trans'go={go} showValue={showTs}/>
				<NDFL id='NDFL' go={go} showValue={showNdfl}/>
				<NPO id='NPO' go={go} showValue={showNPO}/>
				<Immus id='Immus' go={go}/>
				<ResultNDS id='resultNds' go={go} value={{sumInput,stavkaInput}}/>
				<ResultNDFL id='resultNdfl' go={go} value={{sumInput,stavkaInput,typeNdfl}}></ResultNDFL>
				<ResultTrans id='resultTrans' go={go} value={{sumInput,stavkaInput,month,region}}/>
				<Main fetchedPost={fetchedPost} id="main" go={go}></Main>
				<Profile setTurnOn={setTurnOn} turnOn={turnOn} id="profile" fetchedUser={fetchedUser} go={go}></Profile>
			</View>	
			{activePanel==='home' || activePanel==='main' || activePanel==='profile' 
								?<FixedLayout vertical="bottom"><TabBar id={activePanel} go={go}></TabBar></FixedLayout>
								: ''}
			
		</Panel>
			
	);
}

export default App;