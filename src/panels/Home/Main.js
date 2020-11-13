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
}

export default Main;