/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Carousel  from './public/pages/Carousel';

export default class myapp extends Component {
    render() {
        return (
            <View>
                <Carousel/>
                <Text style={appStyle.text}>
                    hello react-native !
                </Text>
            </View>
        )
    }
}
const appStyle =  StyleSheet.create({
    text:{
        marginTop:15,
        textAlign: 'center',
        fontSize: 28,
        color:'#000',
        fontWeight: 'bold'
    }
});
AppRegistry.registerComponent('myapp', () => myapp);
