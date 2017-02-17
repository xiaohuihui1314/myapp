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
    ListView,
    View,
    StatusBar,
    TouchableHighlight,
    Platform,
    Dimensions
} from 'react-native';
import Carousel  from './public/pages/Carousel';
import Test  from './public/pages/Test';
import SimpleView  from './public/pages/Navigator';
import List  from './public/pages/ListView';



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
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    listViewContent: {
        flex: 1,
        paddingBottom: 20,
        marginBottom: 0,
        backgroundColor: '#FFEFDB',
        height: height - 49 - (Platform.OS === 'ios' ? 64 : 44),
    },
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

            <View>
                <StatusBar
                    backgroundColor='#9DD6EB'
                    translucent={true}
                    hidden={false}
                    animated={true}
                />
                <SimpleView title={'首页'}/>

                <Test/>
            </View>

        )
    }
}


AppRegistry.registerComponent('myapp', () => List);
