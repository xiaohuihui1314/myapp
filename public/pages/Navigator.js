import React, {Component} from 'react';

import {
    StyleSheet,
    Navigator,
    Text,
    View
} from 'react-native';

export default class SimpleView  extends Component {
    render() {
        return (
            <View style={simple.ViewSimple}>
                <Text>啦啦啦</Text>
            </View>
        );
    }
}
var simple = StyleSheet.create({
    ViewSimple:{
        top:0,
        left:0,
        flexDirection: 'row',
        height: 40,
        backgroundColor: "#e54847",
    }
});