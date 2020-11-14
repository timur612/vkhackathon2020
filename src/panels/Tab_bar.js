import React from 'react';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import View from '@vkontakte/vkui/dist/components/View/View';

import IconHome from '../img/Icon_home.svg';
import IconHomeActive from '../img/Icon_home_active.svg';
import IconCalc from '../img/Icon_calc.svg';
import IconCalcActive from '../img/Icon_calc_active.svg';
import IconProfile from '../img/Icon_profile.svg';
import IconProfileActive from '../img/Icon_profile_active.svg';

const styles = {
    iconBar:{
        height: '3rem',
        display:'block',marginLeft:'auto',marginRight:'auto'
    }
}

const TabBar = (props) => {
    return(
        <View>
            <Div style={{display:'flex'}}>
                {props.id==='main'
                                ? <img onClick={props.go} data-to="main" src={IconHomeActive} style={styles.iconBar}></img>
                                : <img onClick={props.go} data-to="main" src={IconHome} style={styles.iconBar}></img>}
                
                {props.id==='home' 
                                ? <img onClick={props.go} data-to="home" src={IconCalcActive} style={styles.iconBar}></img>
                                : <img onClick={props.go} data-to="home" src={IconCalc} style={styles.iconBar}></img>}
                {props.id==='profile' 
                                ? <img onClick={props.go} data-to="profile" src={IconProfileActive} style={styles.iconBar}></img>
                                : <img onClick={props.go} data-to="profile" src={IconProfile} style={styles.iconBar}></img>}
                
            </Div>    
        </View>
    );
}

export default TabBar;