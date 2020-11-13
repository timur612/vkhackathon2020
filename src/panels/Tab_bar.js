import React from 'react';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import View from '@vkontakte/vkui/dist/components/View/View';

import IconHome from '../img/Icon_home.svg';
import IconCalc from '../img/Icon_calc.svg';
import IconProfile from '../img/Icon_profile.svg';

const styles = {
    iconBar:{
        height: '2rem',
        display:'block',marginLeft:'auto',marginRight:'auto'
    }
    
}

const TabBar = (props) => {

    return(
        <View>
            <Div style={{display:'flex'}}>
                <img onClick={props.go} data-to="main" src={IconHome} style={styles.iconBar}></img>
                <img onClick={props.go} data-to="home" src={IconCalc} style={styles.iconBar}></img>
                <img onClick={props.go} data-to="profile" src={IconProfile} style={{height: '3rem',display:'block',marginLeft:'auto',marginRight:'auto'}}></img>
            </Div>    
        </View>
    );
}

export default TabBar;