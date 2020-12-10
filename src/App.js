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


// import {
// 	Appearance,
// 	ProviderContext,
// 	ProviderContextInterface,
// 	Scheme,
// 	WebviewType,
//   } from 'ProviderContext';
import TabBar from './panels/Tab_bar';
// import { canUseDOM } from '../../lib/dom';

import {FixedLayout,Panel} from '@vkontakte/vkui';

const App = () => {
	const [sumInput,setSumInput] = useState(0);
	const [stavkaInput,setStavkaInput] = useState(0);
	const [sumInput2,setSumInput2] = useState(0);
	const [typeNdfl,setTypeNdfl] = useState('');
	const [month,setMonth] = useState(1);
	const [region,setRegion] = useState('');
	const [transport,setTransport] = useState('');

	const [turnOn,setTurnOn] = React.useState(false);

	const [userFace,setUserFace] = React.useState('');

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
		setRegion(arg.region);
		setTransport(arg.catTs)
	}
	
	function showNPO(arg){
		setStavkaInput(arg.stavkaInput);
		setSumInput(arg.sumInputRas);
		setSumInput2(arg.sumInputDoh)
	}

	const goBack = () => {
		if( history.length === 1 ) {  // Если в массиве одно значение:
		  bridge.send("VKWebAppClose", {"status": "success"}); // Отправляем bridge на закрытие сервиса.
		} else if( history.length > 1 ) { // Если в массиве больше одного значения:
		  history.pop() // удаляем последний элемент в массиве.
		  setActivePanel( history[history.length - 1] ) // Изменяем массив с иторией и меняем активную панель.
		}
	  };
	  const [activePanel, setActivePanel] = useState("home"); // Ставим начальную панель
	const [history, setHistory] = useState(['home']); // Заносим начальную панель в массив историй.	
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
		})
		window.addEventListener('popstate', () => goBack());
		;
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		async function fetchDataGroup(){
			//const id_user = await bridge.send("VKWebAppGetAuthToken", {"app_id": 7645272, "scope": "friends,status"});
			const post = await bridge.send("VKWebAppCallAPIMethod", {"method": "wall.get", "request_id": "32test", "params": {"owner_id": "-200122131", "v":"5.126", "access_token":`ebda87c9e0cf6e9d35c20bfd91c711e9045802787e33a88de1435257e7d55100fa694667f751017151a2d`}});
			setPost(post)
		}
		async function checkUser(){
			const flag = await bridge.send("VKWebAppStorageGet", {"keys": ["Face"]});
			// setUserFace(flag.keys[0])
			if(flag.keys[0].value===""){
				await bridge.send("VKWebAppStorageSet", {"key": "Face", "value": "fiz"});
				setUserFace('fiz')
			}else{
				if(flag.keys[0].value==='ur'){
					setUserFace('ur')
				}else if(flag.keys[0].value==='fiz'){
					setUserFace('fiz')
				}
			}
			
		}
		function goToPage( name ) { // В качестве аргумента принимаем id панели для перехода
			window.history.pushState( {panel: name}, name ); // Создаём новую запись в истории браузера
			setActivePanel( name ); // Меняем активную панель
			history.push( name ); // Добавляем панель в историю
		  };
		fetchData();
		fetchDataGroup();
		checkUser();
	}, []);
	// console.log(userFace)
	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};
	return (  
		// <Provider isWebView={true}>
		<Panel>
			<View activePanel={activePanel} popout={popout} history={history}onSwipeBack={goBack}>
				<Home userFace={userFace} id='home' fetchedUser={fetchedUser} go={go}/>
				<NDS userFace={userFace} id='nds' go={go} showValue={showNds}/>
				<Trans id='Trans'go={go} showValue={showTs}/>
				<NDFL id='NDFL' go={go} showValue={showNdfl}/>
				<NPO id='NPO' go={go} showValue={showNPO}/>
				<Immus id='Immus' go={go}/>
				<ResultNDS id='resultNds' go={go} value={{sumInput,stavkaInput}}/>
				<ResultNPO id="resultNPO" go={go} value={{sumInput,stavkaInput,sumInput2}}></ResultNPO>
				<ResultNDFL id='resultNdfl' go={go} value={{sumInput,stavkaInput}}></ResultNDFL>
				<ResultTrans id='resultTrans' go={go} value={{sumInput,stavkaInput,month,region,transport}}/>
				<Main fetchedPost={fetchedPost} id="main" go={go}></Main>
				<Profile setUserFace={setUserFace} userFace={userFace} setTurnOn={setTurnOn} turnOn={turnOn} id="profile" fetchedUser={fetchedUser} go={go}></Profile>
			</View>	
			{activePanel==='home' || activePanel==='main' || activePanel==='profile' 
								?<FixedLayout vertical="bottom"><TabBar id={activePanel} go={go}></TabBar></FixedLayout>
								: ''}
			
		</Panel>
		// </Provider>
	);
}

export default App;
