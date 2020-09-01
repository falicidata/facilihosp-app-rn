/* eslint-disable prettier/prettier */

import { Appbar } from 'react-native-paper'
import { React } from 'react'
import authService from '../services/authService'


const AppBarDefault = (props) => {

    const logout = async () => {
        let res = await authService.logout();
        if (res) props.navigation.navigate("Login")
    }



    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={() => { }} />
            <Appbar.Content title={props.title} subtitle={'Facilidata'} />
            <Appbar.Action icon='exit-to-app' onPress={logout} />
        </Appbar.Header>
    );
}


export default AppBarDefault;
