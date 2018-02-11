import React, { Component } from 'react';
import { 
    Text,View,
    TextInput,
    Button
} from 'react-native';

import LoginPage from '../pages/LoginPage';

class LoginForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
        console.log('onSubmit',this.state);

    }

    render(){
        return(
            <View style={{padding:10}}>
                <Text style={{fontSize:24}}>Login</Text>
                <TextInput
                    style={{backgroundColor: '#cc0000'}}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    style={{backgroundColor: 'orange',marginTop:10,marginBottom:10}}
                    secureTextEntry
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <Button
                    title="Login"
                    onPress={this.onSubmit}
                />
            </View>
        )
    }
}

export default LoginForm;