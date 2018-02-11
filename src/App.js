import React, { Component } from 'react';
import { Text,View } from 'react-native';
import Navbar from './Component/Navbar';
import LoginPage from './Component/pages/LoginPage';
import LoginForm from './Component/forms/LoinForm';

export default class App extends Component {
    
    render() {
        return(
            <View>
                <Navbar/>
                <LoginPage/>
            </View>
        );
    }
}