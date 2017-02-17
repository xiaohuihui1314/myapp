/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    ScrollView,
    View,
    StatusBar,
    TouchableHighlight
} from 'react-native';
import Carousel  from './public/pages/Carousel';
import Test  from './public/pages/Test';
import SimpleView  from './public/pages/Navigator';



//简单封装一个组件
class CustomButton extends  Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#9DD6EB',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#9DD6EB',
    }
});

export default class myapp extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={{ paddingVertical: 20}}>
            <View>
                <StatusBar
                    backgroundColor='#9DD6EB'
                    translucent={true}
                    hidden={false}
                    animated={true}
                />
                <SimpleView/>
                <Carousel/>
                <Test/>
            </View>
            </ScrollView>
        )
    }
}


AppRegistry.registerComponent('myapp', () => myapp);
